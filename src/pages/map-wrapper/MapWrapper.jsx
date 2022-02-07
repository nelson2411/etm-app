import React from "react";
import { useParams } from "react-router-dom";
import MapContainer from "../map/MapContainer";

function MapWrapper() {
  const { point } = useParams();
  return (
    <>
      <MapContainer point={point} />
    </>
  );
}

export default MapWrapper;
