import React, { useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './mapbox.module.css';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"


mapboxgl.accessToken = 'pk.eyJ1Ijoid2VlcGVyIiwiYSI6ImNrcHh0b2tsMTA2NnIycG82eDY2ejgzM3UifQ.iVEdDIHQE5uK14tVmk1NGg';
const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': '123.99/night',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-66.324462, -16.024695]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': '139.99/night',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-61.21582, -15.971891]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': '200.99/night',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-63.292236, -18.281518]
            }
        }
    ]
};

const Map = () => {


    useEffect(() => {
        console.log("selam")
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/weeper/cl57rowp8001i14ns4he9xs4u', // style URL
            center: [35.7931741, 27.799901], // starting position [lng, lat]
            zoom: 6, // starting zoom
            projection: 'globe' // display the map as a 3D globe
        });
        map.on('style.load', () => {
            map.setFog({}); // Set the default atmosphere style
        });

        for (const marker of geojson.features) {
            // Create a DOM element for each marker.
            const el = document.createElement('div');
            el.className = styles.marker;
            el.style.width = `10px`;
            el.style.height = `10px`;

            const subEl = document.createElement('div');
            subEl.className = styles.markerContent
            subEl.innerText = marker.properties.message
            el.appendChild(subEl);

            el.addEventListener('click', () => {
                window.alert(marker.properties.message);
            });

            // Add markers to the map.
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        }
    }, [])

    return (
        <>
            <div className={styles.map} id="map" />
        </>
    )
}

export default Map