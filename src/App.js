import React from "react";
import Search from "./Search";
import City from "./City";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./City.css";

export default function App() {
  return (
    <div className="App">
      <Search />
      <City />
      <Temperature />
      <Forecast />
      <footer>
        {" "}
        <a href="https://github.com/leeenah/weather-react" target="_blank">
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
