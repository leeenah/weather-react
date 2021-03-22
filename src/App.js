import React, { useState } from "react";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  const [weather, setWeather] = useState({
    //Static/Fake data
    city: "Auckland",
    date: new Date(),
    temperature: 5,
    description: "hope it's nice where you are!",
    feelsLike: 6,
    humidity: 80,
  });

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
    });
  }

  return (
    <div className="App">
      <Search updateSearchedWeather={showWeather} />
      {weather !== null && <Temperature weather={weather} />}
      <Forecast color="black" size={40} />
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
