import { useState, useEffect } from "react";

import React from "react";

export function usePoint(point) {
  const [points, setPoints] = useState();

  useEffect(() => {
    const getPointsData = async () => {
      try {
        const response =
          await fetch(`https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/${point}/detail/
`);
        const responseJson = await response.json();
        setPoints(responseJson[0]);
      } catch (error) {
        setError(error);
      }
    };
    getPointsData();
  }, [url]);
  return [points, error];
}
