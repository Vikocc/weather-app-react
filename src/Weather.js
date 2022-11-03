import React from "react";
import "./Weather.css";

export default function () {
  return (
    <div className="Weather-app">
      <form>
        <input
          type="search"
          placeholder="&#128269; Search for a city..."
        ></input>
      </form>
      <div className="city">Kyiv</div>
      <div className="temperature">19℃</div>
      <div className="main">Mostly Clear</div>
      <div className="temp-h-l">
        <span className="high-temp">H: 24℃</span>
        <span className="low-temp">L: 18℃</span>
      </div>
      <div className="forecast">04 nov</div>
    </div>
  );
}
