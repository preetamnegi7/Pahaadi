import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 30.0668,
    longitude: 79.0193,
    width: "100vw",
    height: "100vh",
    zoom: 8,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <h2>Welcome to uttarakhand</h2>
        <h2>देवभूमि उत्तराखंड मा आपक स्वागत च</h2>
      </ReactMapGL>
    </div>
  );
}
