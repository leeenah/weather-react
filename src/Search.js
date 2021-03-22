import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search(props) {
  const [query, setQuery] = useState(null);

  function searchWeather(city) {
    // Call API from here and pass it city
    let apiKey = "fc744c97c485c14d19b2746947729882";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(parseResponse);
  }

  function parseResponse(response) {
    props.updateSearchedWeather(response);
  }

  function submitSearch(event) {
    event.preventDefault();
    searchWeather(query);
  }

  function updateCity(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={submitSearch}>
        <input
          className="searchCity"
          type="text"
          placeholder="Enter a city"
          autoFocus="on"
          autoComplete="off"
          onChange={updateCity}
        />
        <input className="goButton" type="submit" value="Go" />
        <button className="fas fa-location-arrow"></button>
      </form>
    </div>
  );
}
