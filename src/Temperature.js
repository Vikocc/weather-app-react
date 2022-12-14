import React, { useState } from "react";
import "./Weather.css";

export default function DisplayTemperture(props) {
  let [unit, setUnit] = useState("celsius");
  function changeToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function changeToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <div className="temperature">
          {props.mainTemperture}
          <span className="unit">
            ℃ |{" "}
            <a href="/" onClick={changeToF}>
              ℉
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let main = Math.round(props.mainTemperture * 1.8 + 32);

    return (
      <div>
        {" "}
        <div className="temperature">
          {main}
          <span className="unit">
            <a href="/" onClick={changeToC}>
              ℃{" "}
            </a>
            | ℉
          </span>
        </div>
      </div>
    );
  }
}
