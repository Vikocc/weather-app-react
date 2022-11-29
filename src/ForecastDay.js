import React from "react";
export default function ForecastDay(props) {
  let time = new Date(props.day.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];
  let day = days[time.getDay()];
  function max() {
    let temperature = props.day.temperature.maximum;
    return `${Math.round(temperature)}º`;
  }

  function min() {
    let temperature = props.day.temperature.minimum;
    return `${Math.round(temperature)}º`;
  }
  return (
    <div>
      <div className="forecast">
        <div className="day">{day}</div>
        <div className="icon-day">
          <img src={props.day.condition.icon_url} alt="icon" />
        </div>
        <div className="forecast-temperature">
          <span className="forecast-max">{max()}</span>
          <span className="forecast-min">{min()}</span>
        </div>
      </div>
    </div>
  );
}
