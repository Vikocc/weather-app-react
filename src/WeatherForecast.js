import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Weather.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [dayForecast, setDayForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props]);

  function Forecast(response) {
    setLoaded(true);
    setDayForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="row">
        {dayForecast.map(function (dailyInformation, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <ForecastDay day={dailyInformation} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let key = "37do4ft2cfe4091641be09b5a6ea838c";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}&units=metric`;
    axios.get(apiUrl).then(Forecast);
    return null;
  }
}
