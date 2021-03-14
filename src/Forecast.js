import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div>08:00</div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color={props.color}
            size={props.size}
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
        <div className="col-2">
          <div>08:00</div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color={props.color}
            size={props.size}
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
        <div className="col-2">
          <div>08:00</div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color={props.color}
            size={props.size}
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
        <div className="col-2">
          <div>08:00</div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_NIGHT"
            color={props.color}
            size={props.size}
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
        <div className="col-2">
          <div>08:00</div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_NIGHT"
            color={props.color}
            size={props.size}
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
        <div className="col-2">
          <div>08:00</div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color={props.color}
            size={props.size}
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
    </div>
  );
}
