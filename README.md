# 🗺️ My Travel Adventures

An interactive world map of the places I've been — photo markers, a flight-path animation, a timeline with a year filter, and a card grid of memories. Built as a single static page, published with GitHub Pages, and updated entirely from the browser.

**✈️ Live site → https://fanyiyang.github.io/travel-map/**

![Screenshot of the travel map](screenshot.png)

## Features

### The map (`index.html`)
- 📍 **Photo markers** — every destination is a circular photo icon, rendered inside the WebGL layer so markers stay perfectly in sync while panning (no DOM-marker lag)
- 🔗 **Share links** — every place has its own address (`…/travel-map/#rome-italy`) that opens the map straight to it; popups have a Copy link button, and the browser's back button steps between places
- 🔵 **Smart clustering** — nearby stops (Tokyo & Kamakura, London & Edinburgh…) merge into a numbered bubble at low zoom; click to zoom in and separate
- ✈️ **Flight animation** — a little plane glides along the whole route at an even pace (about 50 s) when the page opens
- 🧭 **Great-circle route** — dashed arcs connect the stops in trip order, correctly crossing the antimeridian (computed in a few lines instead of loading Turf.js)
- 📅 **Timeline & year filter** — trips order themselves chronologically; chips above the grid filter both cards and markers by year
- 🖼️ **Albums & lightbox** — places can have multiple photos, shown as a carousel in the popup; click any popup photo for a fullscreen viewer with keyboard/swipe navigation
- 📖 **Journal** — destinations can carry a long-form story, readable from the popup's "Read the journal" link or collected on [journal.html](https://fanyiyang.github.io/travel-map/journal.html), a magazine-style reader with cover images, a table of contents, and drop caps
- 🌙 **Dark mode** — follows the system theme, including a dark map style
- 🖱️ **Direct zoom** — on desktop the scroll wheel zooms the map straight away; on phones one finger scrolls the page and two fingers move the map, plus small-screen layout tweaks
- 🌍 **Visited countries** — every country you've been to gets a warm coral wash, drawn under the map's labels and fading out as you zoom in
- 📊 **Stats bar** — destinations · countries · since first trip, computed from the data
- ⌨️ **Keyboard & screen-reader friendly** — cards are real buttons with focus rings, and animations respect `prefers-reduced-motion`
- ⚡ **Fast** — the map style is fetched in parallel with the Mapbox library, markers and cards load small copies of the photos (~1 MB instead of 4.5 MB), there are no geocoding calls at load, and the photo grid renders even if the map CDN is down
- 🖼️ **No blank map on open** — the map box shows a pre-rendered picture of the opening view (`map-poster-light.jpg` / `map-poster-dark.jpg`, ~20 KB) from the first paint, and the live map fades in over it once it has drawn
- 🎞️ **Smooth on high-refresh screens** — the plane is drawn on its own overlay every display frame (60/120/144 Hz) without repainting the map underneath

### Updating from the browser — no code editing
- ➕ **[add.html](https://fanyiyang.github.io/travel-map/add.html)** — add a destination in four steps. Location and trip date auto-fill from the photo's EXIF GPS/capture date (with place-name geocoding as fallback), the country auto-fills from the pin, and photos are compressed client-side before upload.
- ✏️ **[manage.html](https://fanyiyang.github.io/travel-map/manage.html)** — edit any destination's name, note, date, country, or journal; add photos to an existing place or drop one from its album.
- Both pages publish straight to this repository through the GitHub API using a [fine-grained personal access token](https://github.com/settings/personal-access-tokens/new) (scoped to this repo, **Contents: Read and write**). The pages are public; writing requires the token, which stays in your browser.

## How it works

| File | Purpose |
| --- | --- |
| `index.html` | The map page (Mapbox GL JS, no build step) |
| `places.js` | All destination data: name, note, photos, `[lon, lat]`, date, country + ISO code, journal |
| `add.html` | Browser-based "new destination" publisher |
| `manage.html` | Browser-based editor for existing destinations |
| `journal.html` | Long-form journal entries |
| `shared.js` | Helpers shared by the two publishing pages (file format, GitHub API, image compression) |
| `*.jpg / *.jpeg` | The photos (≤1600 px, recompressed), shown full size in the lightbox |
| `map-poster-*.jpg` | Pre-rendered opening view shown while the live map loads (regenerate if the opening camera or map style changes) |
| `cards/`, `thumbs/` | Smaller copies of each photo for the cards/popups (640 px) and map markers (192 px); created automatically by add.html and manage.html |

A destination entry looks like:

```javascript
{ "name": "Kyoto, Japan", "description": "Temples and tea", "images": ["kyoto.jpg", "kyoto2.jpg"], "coordinates": [135.7681, 35.0116], "date": "2026-04-05", "country": "Japan", "cc": "JP" },
```

`date`, `country`/`cc`, and `journal` are optional — undated places keep their hand-ordered position in the timeline, and `cc` (ISO 3166-1 alpha-2) is what shades the country on the map.

## Running locally

```bash
git clone https://github.com/fanyiyang/travel-map.git
cd travel-map
python3 -m http.server 8000   # then open http://localhost:8000
```

## Using this for your own travels

1. Fork the repo and enable GitHub Pages (Settings → Pages → deploy from `main`).
2. Replace the Mapbox access token near the top of the `<script>` in `index.html`, `add.html`, and `manage.html` with your own [public token](https://docs.mapbox.com/help/getting-started/access-tokens/) (consider restricting it to your site's URL).
3. Empty the array in `places.js`, update the repository field defaults in `add.html`/`manage.html`, and start adding your own destinations with `add.html`.

## License

MIT — enjoy exploring the world through **My Travel Adventures**!
