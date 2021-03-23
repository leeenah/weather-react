import React, { useState } from "react";

import "./Temperature.css";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureUnit">
        {" "}
        <current-temperature>{props.celsius}</current-temperature>
        {/* removed className = "active" */}
        <celsius-link>°C |</celsius-link>
        <farenheit-link>
          {" "}
          <a href="/" onClick={showFarenheit}>
            °F{" "}
          </a>
        </farenheit-link>
      </div>
    );
  } else {
    return (
      <div className="TemperatureUnit">
        {" "}
        <current-temperature>{Math.round(farenheit())}</current-temperature>
        <celsius-link>
          {" "}
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          |
        </celsius-link>
        <farenheit-link>°F </farenheit-link>
      </div>
    );
  }
}
