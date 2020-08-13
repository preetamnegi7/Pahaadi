import * as React from "react";
import { Component } from "react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";

export default class Map extends Component {
  state = {
    viewport: { longitude: 21.0122, latitude: 52.2297, zoom: 14 },
  };

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/preetamnegi7/ckcpzafdy0y5g1il910ddvc5w"
        width="100vw"
        height="100vh"
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGL>
    );
  }
}
