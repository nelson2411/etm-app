import React, { Component } from "react";
import { usePoint } from "../../hooks/usePoint";
import GoogleMapReact from "google-map-react";
import { MapDiv } from "./map-container.styles";

const MapContainer = ({ center, zoom }) => {
  return (
    <MapDiv>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCLeAfaJaqFJA__VPgyP1_seHJKYpVWlyA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </MapDiv>
  );
};

MapContainer.defaultProps = {
  center: {
    lat: 40.416775,
    lng: -3.70379,
  },
  zoom: 14,
};

export default MapContainer;
