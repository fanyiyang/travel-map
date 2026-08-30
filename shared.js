// Shared helpers for the publishing pages (add.html and manage.html).
// Both write places.js through the GitHub API, so the file format and the
// upload plumbing live here rather than being copy-pasted into each page.

// The comment block at the top of places.js. Keep it here only — writing a
// different header from either page makes the file churn on every save.
const PLACES_HEADER =
`// Travel destinations shown on the map, in trip order.
// Coordinates are [longitude, latitude]; images is a list (first one is the cover).
// Optional: date (YYYY-MM-DD) drives the timeline and year filter; country + cc
// (ISO 3166-1 alpha-2) feed the stats bar and the visited-country shading;
// journal is long-form text shown on journal.html.
// Add new entries with add.html, edit them with manage.html, or edit by hand —
// keep the array valid JSON (double quotes, no trailing comment lines inside).
window.PLACES = [
`;

// --- places.js format -------------------------------------------------

// Pull the array out of a places.js file and normalize old single-image
// entries. The array is located after "window.PLACES" on purpose: the header
// comment itself contains a "[longitude, latitude]" that would otherwise be
// mistaken for the start of the data.
function parsePlaces(text) {
    const start = text.indexOf('[', text.indexOf('window.PLACES'));
    if (start < 1) throw new Error('Could not find the places array in places.js.');
    return JSON.parse(text.slice(start, text.lastIndexOf(']') + 1)).map(p => {
        if (p.image && !p.images) {
            const { image, ...rest } = p;
            return { ...rest, images: [image] };
        }
        return p;
    });
}

function serializePlaces(list) {
    return PLACES_HEADER + list.map(p => '  ' + JSON.stringify(p)).join(',\n') + '\n];\n';
}

// --- encoding ---------------------------------------------------------

function b64encodeText(text) {
    const bytes = new TextEncoder().encode(text);
    let bin = '';
    bytes.forEach(b => { bin += String.fromCharCode(b); });
    return btoa(bin);
}

function b64decodeText(b64) {
    const bin = atob(b64.replace(/\n/g, ''));
    const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
}

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const r = new FileReader();
        r.onload = () => resolve(r.result.split(',')[1]);
        r.onerror = reject;
        r.readAsDataURL(file);
    });
}

// Downscale to ≤1600px JPEG so the site stays fast.
async function compressImage(file) {
    if (file.size < 500 * 1024 || !/^image\/(jpeg|png|webp)$/.test(file.type)) return file;
    try {
        const bmp = await createImageBitmap(file); // applies EXIF orientation
        const scale = Math.min(1, 1600 / Math.max(bmp.width, bmp.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(bmp.width * scale);
        canvas.height = Math.round(bmp.height * scale);
        canvas.getContext('2d').drawImage(bmp, 0, 0, canvas.width, canvas.height);
        const blob = await new Promise(r => canvas.toBlob(r, 'image/jpeg', 0.8));
        return (blob && blob.size < file.size) ? blob : file;
    } catch (e) {
        return file; // e.g. HEIC the browser can't decode — upload as-is
    }
}

// --- GitHub -----------------------------------------------------------

async function gh(path, token, opts = {}) {
    const res = await fetch(`https://api.github.com${path}`, {
        ...opts,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
            ...(opts.headers || {})
        }
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.message || `GitHub API error ${res.status}`);
    return body;
}

// Commit one file, creating or updating it. `sha` is required by the API when
// replacing an existing file.
async function ghPutFile(repo, token, { path, content, message, branch, sha }) {
    return gh(`/repos/${repo}/contents/${encodeURIComponent(path)}`, token, {
        method: 'PUT',
        body: JSON.stringify({ message, content, branch, ...(sha ? { sha } : {}) })
    });
}

// --- shared page bits -------------------------------------------------

// Both pages remember the repo/branch/token under the same keys, so a token
// pasted into one page is already there in the other.
function loadGhSettings(els) {
    els.repo.value = localStorage.getItem('tm_repo') || els.repo.value;
    els.branch.value = localStorage.getItem('tm_branch') || els.branch.value;
    const token = localStorage.getItem('tm_token');
    if (token) {
        els.token.value = token;
        els.remember.checked = true;
    }
}

function saveGhSettings({ repo, branch, token, remember }) {
    localStorage.setItem('tm_repo', repo);
    localStorage.setItem('tm_branch', branch);
    if (remember) localStorage.setItem('tm_token', token);
    else localStorage.removeItem('tm_token');
}

function setStatus(msg, cls) {
    const el = document.getElementById('status');
    el.textContent = msg;
    el.className = cls || '';
}
