import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [dayForecast, setDayForecast] = useState(null);

  function Forecast(response) {
    setLoaded(true);
    setDayForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="row">
        <div className="col">
          <ForecastDay day={dayForecast[0]} />
        </div>
      </div>
    );
  } else {
    let key = "37do4ft2cfe4091641be09b5a6ea838c";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    console.log(props);

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}&units=metric`;
    axios.get(apiUrl).then(Forecast);
    return null;
  }
}
