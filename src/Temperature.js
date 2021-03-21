import React, { useState } from "react";
import CurrentTime from "./CurrentTime";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h1> {props.weather.city} </h1>
      <div className="currentDay">
        {" "}
        <CurrentTime date={props.weather.date} />
      </div>
      <p className="currently">currently</p>
      <span className="current-temperature">
        {" "}
        {Math.round(props.weather.temperature)}{" "}
      </span>
      {/* removed className = "active" */}
      <span className="celcius-link">°C |</span>

      <span className="farenheit-link">°F</span>
      <h3 className="text-lowercase"> {props.weather.description} </h3>
      <div className="row">
        <div className="col-sm">
          Feels like: <span> {Math.round(props.weather.feelsLike)} </span>°C |
          Humidity:
          <span> {Math.round(props.weather.humidity)} </span> %
        </div>
      </div>
      <hr />
    </div>
  );
}
