# My Travel Adventures
## Example Outlook:
<img width="972" alt="image" src="https://github.com/user-attachments/assets/57dc9fb4-a673-48b7-95a0-be569561524d" />

## Overview

**My Travel Adventures** is a web-based project showcasing various travel destinations on an interactive map. It uses Mapbox GL JS to display destinations with photo markers and a great-circle route line connecting all stops of the journey. The page also includes a grid layout with detailed cards for each destination, allowing users to explore these places interactively.

## Features

- **Interactive Map:** Displays travel destinations as photo markers on a Mapbox-powered map, with zoom and fullscreen controls.
- **Photo Markers & Popups:** Each stop is marked with its own photo; clicking a marker opens a popup with the picture and a short note.
- **Smooth Map Navigation:** Fly-to functionality zooms in on a location (and opens its popup) when a place card is clicked.
- **Place Cards:** Displays images and descriptions for each destination in a responsive grid, with lazy-loaded images.
- **Visualized Route:** Connects all destinations in trip order with dashed great-circle arcs (computed with Turf.js), including segments that cross the antimeridian.
- **No runtime geocoding:** Coordinates are stored with each destination, so the page loads instantly with no geocoding API calls.

## Technologies Used

- **HTML/CSS:** For the structure and styling of the page, including a responsive design and grid layout for place cards.
- **JavaScript (ES6):** To control map interactivity and handle dynamic DOM updates.
- **Mapbox GL JS:** Used for map rendering, markers, popups, and drawing the route.
- **Turf.js:** For computing great-circle arcs between destinations.

## Installation & Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/my-travel-adventures.git
    cd my-travel-adventures
    ```

2. **Open the project**:
    Simply open the `index.html` file in your preferred browser to view the interactive travel map.

## Usage

- **View Destinations:** Navigate the map to view various travel locations. Click on a marker to view the photo and note for that place.
- **Fly to Locations:** Click on a destination card in the grid below the map, and the map will zoom in on that location and open its popup.
- **Explore the Route:** The dashed route line visually connects all locations in the order they were visited.

## Adding a Destination

Add a new entry to the `places` array in `index.html` with a name, a short description, an image path (drop the photo into the repo), and `[longitude, latitude]` coordinates:

```javascript
{ name: "Kyoto, Japan", description: "Temples and tea", image: "kyoto.jpg", coordinates: [135.7681, 35.0116] },
```

## Example Destinations

- **Hokkaido, Japan**
- **Singapore**
- **New York City, USA**
- **Miami, USA**
- **Las Vegas, USA**
- **San Francisco, USA**
- **London, UK**
- **Edinburgh, UK**
- **Switzerland**

## Mapbox Token

To use this project with your own Mapbox account, replace the existing access token with your own in the following line:
```javascript
mapboxgl.accessToken = 'your-access-token';
```
You can obtain a token by signing up for a [Mapbox account](https://www.mapbox.com/).

## Future Enhancements

- Add more travel destinations with custom categories and filters.
- Implement user-generated travel recommendations and reviews.
- Provide weather and local tips for each destination.

## License

This project is licensed under the MIT License.

---

Enjoy exploring the world through **My Travel Adventures**!
