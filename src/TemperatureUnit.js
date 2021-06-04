import React, { useState } from "react";
import TemperatureSwitcher from "./TemperatureSwitcher";

import "./Temperature.css";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
    props.toggleUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    props.toggleUnit("celsius");
  }

  function farenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  return (
    <div className="TemperatureUnit">
      <TemperatureSwitcher
        value={
          unit === "celsius"
            ? props.celsius
            : Math.round(farenheit(props.celsius))
        }
        isCelsius={unit === "celsius"}
        action={unit === "celsius" ? showFarenheit : showCelsius}
      />
    </div>
  );
}
