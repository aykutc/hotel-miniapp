import React, { useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './mapbox.module.css';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1Ijoid2VlcGVyIiwiYSI6ImNrcHh0b2tsMTA2NnIycG82eDY2ejgzM3UifQ.iVEdDIHQE5uK14tVmk1NGg';
const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        message: '123.99/night',
      },
      geometry: {
        type: 'Point',
        coordinates: [36.7931741, 27.799901],
      },
    },
    {
      type: 'Feature',
      properties: {
        message: '139.99/night',
      },
      geometry: {
        type: 'Point',
        coordinates: [36.7931741, 29.799901],
      },
    },
    {
      type: 'Feature',
      properties: {
        message: '200.99/night',
      },
      geometry: {
        type: 'Point',
        coordinates: [32.7931741, 30.799901],
      },
    },
  ],
};

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/weeper/cl57rowp8001i14ns4he9xs4u', // style URL
      center: [35.7931741, 27.799901], // starting position [lng, lat]
      zoom: 6, // starting zoom
      projection: 'mercator', // display the map as a 3D globe
    });

    for (const marker of geojson.features) {
      // Create a DOM element for each marker.
      const el = document.createElement('div');
      el.className = styles.marker;
      el.style.width = `10px`;
      el.style.height = `10px`;

      const subEl = document.createElement('div');
      subEl.className = styles.markerContent;
      subEl.innerText = marker.properties.message;
      el.appendChild(subEl);

      // Add markers to the map.
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    }
  }, []);

  return (
    <>
      <div className={styles.map} id="map" />
    </>
  );
};

export default Map;
