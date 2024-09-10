# My Travel Adventures

## Overview

**My Travel Adventures** is a web-based project showcasing various travel destinations on an interactive map. It uses the Mapbox API to geocode locations and display them visually on a map with dynamic markers and a route line connecting all destinations. The page also includes a grid layout with detailed cards for each destination, allowing users to explore these places interactively.

## Features

- **Interactive Map:** Displays travel destinations with clickable markers on a Mapbox-powered map.
- **Geocoding and Routing:** Automatically geocodes place names to obtain their coordinates and draws a route connecting them.
- **Smooth Map Navigation:** Fly-to functionality zooms in on a location when a place card is clicked.
- **Place Cards:** Displays images and descriptions for each destination in a responsive grid.
- **Visualized Route:** Connects all destinations with a dashed line using a bezier spline interpolation for smoothness.

## Technologies Used

- **HTML/CSS:** For the structure and styling of the page, including a responsive design and grid layout for place cards.
- **JavaScript (ES6):** To control map interactivity, fetch geolocation data, and handle dynamic DOM updates.
- **Mapbox API:** Used for map rendering, geocoding locations, adding markers, and drawing the route.
- **Turf.js:** For calculating and smoothing the routes between destinations.
- **Mapbox GL Geocoder:** Provides search and geocoding functionality for finding places.

## Installation & Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/my-travel-adventures.git
    cd my-travel-adventures
    ```

2. **Open the project**:
    Simply open the `index.html` file in your preferred browser to view the interactive travel map.

## Usage

- **View Destinations:** Navigate the map to view various travel locations. Click on a marker to view information about that place.
- **Fly to Locations:** Click on a destination card in the grid below the map, and the map will zoom in on that location.
- **Explore the Route:** The dashed route line visually connects all locations, and you can see the smooth transitions between them.

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

## Screenshots

Add relevant screenshots to demonstrate how the page looks and functions.

## Future Enhancements

- Add more travel destinations with custom categories and filters.
- Implement user-generated travel recommendations and reviews.
- Provide weather and local tips for each destination.

## License

This project is licensed under the MIT License.

---

Enjoy exploring the world through **My Travel Adventures**!
