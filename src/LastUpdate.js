import React from "react";

export default function LastUpdate(props) {
  let hour = props.information.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = props.information.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.information.getDay()];

  let date = props.information.getDate();

  let months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  let month = months[props.information.getMonth()];

  return (
    <span>
      Last update: {hour}:{minute}, {day}, {date} {month}
    </span>
  );
}
