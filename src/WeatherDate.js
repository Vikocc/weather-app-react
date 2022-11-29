import React from "react";
import LastUpdate from "./LastUpdate";
import Temperature from "./Temperature";

export default function WeatherDate(props) {
  return (
    <div className="WeatherDate">
      <div className="lastUpdated">
        <LastUpdate information={props.date.date} />
      </div>
      <div className="city">{props.date.name}</div>
      <Temperature
        mainTemperture={props.date.temperature}
        maxTemperture={props.date.maxTemp}
        minTemperture={props.date.minTemp}
      />

      <div className="main">{props.date.main}</div>
      <img src={props.date.icon} className="icon" alt={props.date.main} />
    </div>
  );
}
