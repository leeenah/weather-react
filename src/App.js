import React, { useState } from "react";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  const [weather, setWeather] = useState(null);

  //add another useState for forecast, setForecast and default state
  //re-render and update state to setForecast
  //which will display the time, high/low temperature and the icon

  function showWeatherAndForecast(weatherResponse, forecastResponse) {
    setWeather({
      temperature: {
        city: weatherResponse.data.name,
        date: new Date(weatherResponse.data.dt * 1000),
        temperature: weatherResponse.data.main.temp,
        description: weatherResponse.data.weather[0].main,
        feelsLike: weatherResponse.data.main.feels_like,
        humidity: weatherResponse.data.main.humidity,
        icon: weatherResponse.data.weather[0].icon,
      },
      forecast: {
        time: 7,
        high: 15,
        low: 5,
        icon: "cloudy",
      },
    });
  }

  // tempratruResponse => 2 seconds ==> redraw
  // forecastResponse => 10 seconds ==============> redraw

  return (
    <div className="App">
      <Search updateForecastAndWeather={showWeatherAndForecast} />
      {weather !== null && weather.temperature != null && (
        <Temperature weather={weather.temperature} />
      )}
      {weather !== null && weather.forecast !== null && (
        <Forecast icon={weather.forecast} color="black" size={40} />
      )}
      <footer>
        {" "}
        <a
          href="https://github.com/leeenah/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open source code{" "}
        </a>
        <span>
          {" "}
          <strong>by Lena Zhang</strong>
        </span>{" "}
      </footer>{" "}
    </div>
  );
}
