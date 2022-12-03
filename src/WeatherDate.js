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
      <div className="main">{props.date.main}</div>
      <Temperature mainTemperture={props.date.temperature} />
      <img src={props.date.icon} className="icon" alt={props.date.main} />
    </div>
  );
}
