import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    temperature: 10,
    description: "clear",
    feelsLike: 2,
    humidity: 70,
  };

  return (
    <div className="Temperature">
      <span className="current-temperature"> {weatherData.temperature} </span>
      {/* removed className = "active" */}
      <span className="celcius-link">°C |</span>

      <span className="farenheit-link">°F</span>
      <h3> {weatherData.description} </h3>
      <div className="row">
        <div className="col-sm">
          Feels like: <span> {weatherData.feelsLike} </span>°C | Humidity:
          <span> {weatherData.humidity} </span> %
        </div>
      </div>
      <hr />
    </div>
  );
}
