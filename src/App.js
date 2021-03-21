import React, { useState } from "react";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  const [weather, setWeather] = useState(null);

  function searchWeather(city) {
    console.log("Search weather for", city);
    // Call API from here and pass it city
    let apiKey = "fc744c97c485c14d19b2746947729882";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(parseResponse);

    // 1. search component passes back query: i.e. Prague
    // 2. axios searches API with that query (right above)
    // 3. we receive response and store response in state of App
    // 4. which causes the reload / refresh of App component and its re-render
    // 5. and then we're done because everything is rendered with the recent state
    // may need to tweak Temperature.js (but most likely not)
  }

  function parseResponse(response) {
    console.log(response);

    setWeather({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      feelsLike: response.data.main.feels_like,
    });
    //   humidity: response.data.main.humidity,
  }

  return (
    <div className="App">
      <Search searchWeather={searchWeather} />
      {weather != null && <Temperature weather={weather} />}
      {weather != null && <Forecast color="black" size={40} />}
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
