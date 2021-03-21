import React, { useState } from "react";
import "./Search.css";

export default function Search(props) {
  const [query, setQuery] = useState(null);

  function submitSearch(event, searchWeather) {
    event.preventDefault();
    searchWeather(query);
  }

  function updateCity(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }

  return (
    <div className="Search">
      <form
        onSubmit={(event) => {
          submitSearch(event, props.searchWeather);
        }}
      >
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
