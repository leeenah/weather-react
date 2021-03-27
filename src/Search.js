import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

import "./Search.css";

export default function Search(props) {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    searchLocation();
  }, []);

  function searchWeather(city) {
    // Call API from here and pass it city
    let apiKey = "fc744c97c485c14d19b2746947729882";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    return axios.get(apiUrl);
  }

  function searchForecast(city) {
    let apiKey = "fc744c97c485c14d19b2746947729882";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`;
    return axios.get(apiUrl);
  }

  function submitSearch(event) {
    event.preventDefault();
    search(query);
  }

  function submitLocationSearch(event) {
    event.preventDefault();
    searchLocation();
  }

  async function search(city) {
    setIsSearching(true);
    // Call API and wait till we hear back from both
    const [weatherResponse, forecastResponse] = await Promise.all([
      searchWeather(city), // This call (maybe takes 2 seconds)
      searchForecast(city), // This call (maybe takes 10 seconds)
    ]);
    // After 10 seconds when we get both responses, we pass responses back to App
    // Which can use those responses to update state
    props.updateForecastAndWeather(weatherResponse, forecastResponse);
    setIsSearching(false);
  }

  function searchLocation() {
    setIsSearching(true);
    navigator.geolocation.getCurrentPosition(getLocation);
  }

  function getLocation(position) {
    let apiKey = "fc744c97c485c14d19b2746947729882";
    let unit = "metric";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showLocation);
  }

  function showLocation(response) {
    let city = response.data.city.name;
    search(city);
    setIsSearching(false);
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
        <button
          className="goButton"
          type="submit"
          disabled={isSearching || query.length === 0}
        >
          Go
        </button>

        <button
          className="fas fa-location-arrow"
          onClick={submitLocationSearch}
          disabled={isSearching}
        ></button>
      </form>
      <p style={{ fontSize: 20 }}>
        {isSearching === true && (
          <span>
            <Spinner animation="border" size="sm" />
          </span>
        )}
        {isSearching === false && <span>{"\u00A0"}</span>}
      </p>
    </div>
  );
}
