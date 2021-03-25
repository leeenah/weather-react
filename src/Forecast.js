import React from "react";

import ReactAnimatedWeather from "react-animated-weather";

import "./Forecast.css";

export default function Forecast(props) {
  const iconMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "010d": "SLEET",
    "010n": "SLEET",
    "011d": "WIND",
    "011n": "WIND",
    "013d": "SNOW",
    "013n": "SNOW",
    "050d": "FOG",
    "050n": "FOG",
  };

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div>{props.forecast.time.getHours()}:00</div>
          <ReactAnimatedWeather
            icon={iconMapping[props.forecast.icon]}
            color={props.forecast.color}
            size={props.forecast.size}
          />
          <div>
            <span>
              {" "}
              <strong> {props.forecast.high}°C </strong>{" "}
            </span>
            <span>| </span>
            <span>{props.forecast.low}°C </span>
          </div>
        </div>
      </div>
    </div>
  );
}
