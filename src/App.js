import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Service />
      <Portfolio />
    </div>
  );
}

export default App;
