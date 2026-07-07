// Travel destinations shown on the map, in trip order.
// Coordinates are [longitude, latitude]; images is a list (first one is the cover);
// date is optional (YYYY-MM-DD) and drives the timeline ordering and year filter.
// Add new entries with add.html (recommended) or edit by hand —
// keep the array valid JSON (double quotes, no trailing comment lines inside).
window.PLACES = [
  {"name":"Hokkaido, Japan","description":"Clean, snow, 北大, pre-covid","images":["IMG_20190728_100216.JPG"],"coordinates":[141.3545,43.0618],"date":"2019-07-28"},
  {"name":"Singapore","description":"The City of Light","images":["IMG_0135.jpeg"],"coordinates":[103.8198,1.3521]},
  {"name":"New York City, USA","description":"$","images":["NY.jpeg"],"coordinates":[-74.006,40.7128],"date":"2024-03-18"},
  {"name":"Boston, USA","description":"$","images":["01788763-188B-4708-84A9-A9D9FB32ABE9_1_105_c.jpeg"],"coordinates":[-71.0589,42.3601],"date":"2024-03-23"},
  {"name":"Miami, USA","description":"$","images":["MIAMI.jpg"],"coordinates":[-80.1918,25.7617]},
  {"name":"Las Vegas, Nevada, USA","description":"$","images":["LV.jpg"],"coordinates":[-115.1398,36.1699]},
  {"name":"San Francisco, USA","description":"$¥","images":["SF.jpg"],"coordinates":[-122.4194,37.7749]},
  {"name":"London, UK","description":"Harbor city with iconic landmarks","images":["London.jpg"],"coordinates":[-0.1276,51.5072]},
  {"name":"Edinburgh, UK","description":"","images":["Edinburgh.jpg"],"coordinates":[-3.1883,55.9533]},
  {"name":"Switzerland","description":"Summer camp","images":["switzerland.jpg"],"coordinates":[7.4474,46.948]},
  {"name":"Reykjavik, Iceland","description":"Do not go gentle into that good night","images":["iceland.jpg"],"coordinates":[-21.8277,64.1283]},
  {"name":"Tokyo, Japan","description":"A pleasant journey before work","images":["tokyo.jpeg"],"coordinates":[139.6917,35.6895]},
  {"name":"Kamakura, Japan","description":"Peace, sand, island, shrine","images":["10679E3D-7F2A-477F-96FC-6D21D05C0E05_1_105_c.jpeg"],"coordinates":[139.5467,35.3192],"date":"2025-01-18"},
  {"name":"Hawaii, USA","description":"Man, chill, sand, island","images":["4B2CF592-82A3-4E4F-A063-4DFB482A2696_1_105_c.jpeg"],"coordinates":[-157.8583,21.3069],"date":"2025-01-19"},
  {"name":"Marseille, France","description":"Sea","images":["IMG_2843.jpeg"],"coordinates":[5.3698,43.2965],"date":"2025-11-28"},
  {"name":"Rome, Italy","description":"Fallen Empire","images":["IMG_3129.jpeg"],"coordinates":[12.4964,41.9028],"date":"2025-12-05"},
  {"name":"Rhode Island","description":"Sea, Cliff, Sunset","images":["IMG_4518.jpeg"],"coordinates":[-71.2977,41.4728],"date":"2026-06-20"}
];
