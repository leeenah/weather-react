import React from "react";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Temperature city="Auckland" />
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
