import React from "react";
export default function LastUpdate(props) {
  let day = props.information.getDay();

  return <div>`Last update: 2:23, 06 ${day}`</div>;
}
