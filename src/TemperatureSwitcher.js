import React from "react";

export default function TemperatureSwitcher(props) {
  return (
    <div className="TemperatureUnit">
      {" "}
      <current-temperature>{props.value}</current-temperature>
      <temp-link>
        {props.isCelsius ? (
          <temp-link-active>°C</temp-link-active>
        ) : (
          <a href="/" onClick={props.action}>
            °C
          </a>
        )}
      </temp-link>
      <span> | </span>
      <temp-link>
        {props.isCelsius ? (
          <a href="/" onClick={props.action}>
            °F
          </a>
        ) : (
          <temp-link-active>°F</temp-link-active>
        )}
      </temp-link>
    </div>
  );
}
