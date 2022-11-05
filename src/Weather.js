import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  let [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      name: response.data.city,
      temperature: Math.round(response.data.daily[0].temperature.day),
      minTemp: Math.round(response.data.daily[0].temperature.minimum),
      maxTemp: Math.round(response.data.daily[0].temperature.maximum),
      main: response.data.daily[0].condition.description,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather-app">
        <form>
          <input
            type="search"
            placeholder="&#128269; Search for a city..."
          ></input>
        </form>
        <div className="city">{weather.name}</div>
        <div className="temperature">{weather.temperature}</div>
        <div className="main">{weather.main}</div>
        <div className="temp-h-l">
          <span className="max-temp">H: {weather.maxTemp}℃</span>
          <span className="min-temp">L: {weather.minTemp}℃</span>
        </div>

        <div className="forecast">04 nov</div>
      </div>
    );
  } else {
    let key = "37do4ft2cfe4091641be09b5a6ea838c";
    let city = "kyiv";

    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`;
    axios.get(url).then(showWeather);
    return "Loading...";
  }
}
