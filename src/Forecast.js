import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="col-2">
        <div>08:00</div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="weather-icon"
        />
        <div>
          <span>
            {" "}
            <strong> 10°C </strong>{" "}
          </span>
          <span>| </span>
          <span>5°C </span>
        </div>
      </div>
    </div>
  );
}
