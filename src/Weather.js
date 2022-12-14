import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDate from "./WeatherDate";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  let [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState("Tokyo");

  function showWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coordinates,
      date: new Date(),
      name: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      main: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  function search() {
    let key = "37do4ft2cfe4091641be09b5a6ea838c";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
    axios.get(url).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function cityWeather(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather-app">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="&#128269; Search for a city..."
            onChange={cityWeather}
          ></input>
        </form>
        <WeatherDate date={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
