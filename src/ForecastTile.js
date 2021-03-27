import React from "react";

import ReactAnimatedWeather from "react-animated-weather";

import "./Forecast.css";

export default function ForecastTile(props) {
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
    "10d": "SLEET",
    "10n": "SLEET",
    "11d": "WIND",
    "11n": "WIND",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <div className="col-2 ">
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
        <span> | </span>
        <span>{props.forecast.low}°C </span>
      </div>
    </div>
  );
}
