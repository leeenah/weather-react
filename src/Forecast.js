import React from "react";
import ForecastTile from "./ForecastTile";

import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      {/* <div className="container"> */}
      <div className="row">
        {/* <div className="Forecast row"> */}
        {props.list.slice(0, 6).map(function (forecast, index) {
          return (
            <ForecastTile
              forecast={{
                time: new Date(forecast.dt * 1000),
                high: Math.round(forecast.main.temp_max),
                low: Math.round(forecast.main.temp_min),
                icon: forecast.weather[0].icon,
                color: "black",
                size: 40,
              }}
            />
          );
        })}
      </div>
    </div>
    // </div>
  );
}
