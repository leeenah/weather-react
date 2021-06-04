import React from "react";
import CurrentTime from "./CurrentTime";
import TemperatureUnit from "./TemperatureUnit";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h1> {props.weather.city} </h1>
      <div className="currentDay">
        {" "}
        <CurrentTime current={props.weather.date} />
      </div>
      <p className="currently">currently</p>
      <TemperatureUnit
        celsius={Math.round(props.weather.temperature)}
        toggleUnit={props.toggleUnit}
      />

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
