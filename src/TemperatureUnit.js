import React from "react";

import "./Temperature.css";

export default function TemperatureUnit(props) {
  return (
    <div className="TemperatureUnit">
      {" "}
      <current-temperature>{props.celsius}</current-temperature>
      {/* removed className = "active" */}
      <celcius-link>°C |</celcius-link>
      <farenheit-link>°F</farenheit-link>
    </div>
  );
}
