import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, useLoaded] = useState(false);
  let [dayForecast, useDayForecast] = useState(null);

  function Forecast(response) {
    useLoaded(true);
    useDayForecast(response.data.daily);
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
    console.log(props.newCity);
    let key = "37do4ft2cfe4091641be09b5a6ea838c";
    let city = props.newCity;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`;
    axios.get(apiUrl).then(Forecast);
    return null;
  }
}
