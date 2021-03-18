import React, { useState } from "react";
import axios from "axios";
import "./Temperature.css";

export default function Temperature(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function getResponse(response) {
    setWeatherData({
      city: response.data.name,
      date: "Wednesday 10:00",
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Temperature">
        <h1> {weatherData.city} </h1>
        <p className="currentDay"> {weatherData.date}</p>
        <p className="currently">currently</p>
        <span className="current-temperature">
          {" "}
          {Math.round(weatherData.temperature)}{" "}
        </span>
        {/* removed className = "active" */}
        <span className="celcius-link">°C |</span>

        <span className="farenheit-link">°F</span>
        <h3 class="text-lowercase"> {weatherData.description} </h3>
        <div className="row">
          <div className="col-sm">
            Feels like: <span> {Math.round(weatherData.feelsLike)} </span>°C |
            Humidity:
            <span> {Math.round(weatherData.humidity)} </span> %
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    let apiKey = "fc744c97c485c14d19b2746947729882";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(getResponse);

    return "searching...";
  }
}
