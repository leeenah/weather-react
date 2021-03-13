import React from "react";
import Search from "./Search";
import City from "./City";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

import "./App.css";
import "./City.css";

export default function App() {
  return (
    <div className="App">
      <Search />
      <City />
      <Temperature />
      <Forecast />
      <br />
      <Forecast />
      <br />
      <Forecast />
    </div>
  );
}
