import React from "react";
import tubemap from "./tubemap.png";

function Map() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 402 315"
      width="402"
      height="315"
    >
      {/* Background map image */}
      <image width="402" height="315" xlinkHref={tubemap} />

      {/* Clickable areas */}
      <a
        href="https://en.wikipedia.org/wiki/Piccadilly_Circus_tube_station"
        target="_blank"
        rel="noopener noreferrer"
      >
        <rect x="316" y="254" width="50" height="50" fill="#fff" opacity="0" />
      </a>

      <a
        href="https://en.wikipedia.org/wiki/Bond_Street_station"
        target="_blank"
        rel="noopener noreferrer"
      >
        <rect x="0" y="5" width="100" height="100" fill="#fff" opacity="0" />
      </a>
    </svg>
  );
}

export default Map;
