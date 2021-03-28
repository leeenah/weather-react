import React, { useState } from "react";

import "./Temperature.css";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("celsius");
  const [isActive, setIsActive] = useState(true);

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
    setIsActive(false);
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
        <celsius-link>
          <celsius-link-active>°C </celsius-link-active>
        </celsius-link>
        <span> | </span>
        <farenheit-link>
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
        </celsius-link>
        <span> | </span>
        <farenheit-link>
          <farenheit-link-active>°F </farenheit-link-active>
        </farenheit-link>
      </div>
    );
  }
}
