import React from "react";
import LastUpdate from "./LastUpdate";

export default function WeatherDate(props) {
  return (
    <div className="WeatherDate">
      <div className="lastUpdated">
        <LastUpdate information={props.date.date} />
      </div>
      <div className="city">{props.date.name}</div>
      <div className="temperature">{props.date.temperature}</div>
      <div className="main">{props.date.main}</div>
      <div className="temp-h-l">
        <span className="max-temp">H: {props.date.maxTemp}℃</span>
        <span className="min-temp">L: {props.date.minTemp}℃</span>
      </div>
      <img src={props.date.icon} className="icon" alt={props.date.main} />
      <div className="forecast">04 nov</div>
    </div>
  );
}
