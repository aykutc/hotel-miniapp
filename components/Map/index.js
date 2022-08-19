import React, { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import Router from "next/router";
import { HotelsArray } from "data/data";
import { saveHotel } from "data/api";
import styles from "./mapbox.module.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoid2VlcGVyIiwiYSI6ImNrcHh0b2tsMTA2NnIycG82eDY2ejgzM3UifQ.iVEdDIHQE5uK14tVmk1NGg";
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      ...HotelsArray[0],
    },
    {
      ...HotelsArray[1],
    },
    {
      ...HotelsArray[2],
    },
  ],
};

const Map = ({ f7router }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/weeper/cl57rowp8001i14ns4he9xs4u", // style URL
      center: [35.7931741, 27.799901], // starting position [lng, lat]
      zoom: 6, // starting zoom
      projection: "mercator", // display the map as a 3D globe
    });

    for (const marker of geojson.features) {
      // Create a DOM element for each marker.
      const el = document.createElement("div");
      el.className = styles.marker;
      el.style.width = `10px`;
      el.style.height = `10px`;

      const subEl = document.createElement("div");
      subEl.className = styles.markerContent;
      subEl.innerText = marker.properties.message;
      subEl.onclick = () => {
        saveHotel({
          ...marker,
        });
        f7router.navigate("/hotel-detail");
      };
      el.appendChild(subEl);

      // Add markers to the map.
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    }
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      })
    );
  }, []);

  return (
    <>
      <div className={"map"} id="map" />
      <style jsx>{`
        .map {
          height: 100%;
          width: 100%;
        }

        .container {
          width: 1024px;
          height: 1024px;
          background-color: yellow;
        }

        .markerContent {
          position: absolute;
          top: -50px;
          left: 2px;

          width: 133px;
          height: 40px;
          background-color: black;
          border-radius: 100px;
          color: white;

          font-family: "Outfit";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.01em;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .markerContent::before {
          content: "";
          position: absolute;

          width: 1px;
          height: 25px;
          left: 1px;

          background-color: black;
          top: 25px;
        }

        .marker {
          display: block;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          padding: 0;
          width: 10;
          height: 10;
          box-sizing: border-box;
          border: 1px solid black;
        }
      `}</style>
    </>
  );
};

export default Map;
