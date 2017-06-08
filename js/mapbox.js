mapboxgl.accessToken = 'pk.eyJ1IjoibmlraG9yb3NhbGVzIiwiYSI6ImNqM2tsZ244MjAwcHoycXM0b3pvdmZoeXcifQ.q4kHhk' +
        'OWjYBorLmWFp2KqQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/basic-v9',
    center: [-98.4935693, 29.4187488], 
    zoom: 13,
    pitch: 45,
    bearing: -17.6
});

map.on('load', () => {
    map.loadImage('https://s24.postimg.org/zctuw9mr9/maps-and-flags.png', (error, image) => {
        if (error) throw error;
        map.addImage('mappoint', image);
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-98.4935693, 29.4187488]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "mappoint",
                "icon-size": 0.25
            }
        });
    });
});

// the 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
// map.on('load', function() {
//     map.addLayer({
//         'id': '3d-buildings',
//         'source': 'composite',
//         'source-layer': 'building',
//         'filter': ['==', 'extrude', 'true'],
//         'type': 'fill-extrusion',
//         'minzoom': 15,
//         'paint': {
//             'fill-extrusion-color': '#aaa',
//             'fill-extrusion-height': {
//                 'type': 'identity',
//                 'property': 'height'
//             },
//             'fill-extrusion-base': {
//                 'type': 'identity',
//                 'property': 'min_height'
//             },
//             'fill-extrusion-opacity': .6
//         }
//     });
// });