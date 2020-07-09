import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <div className="flex flex-row">
        <Nav />
        <Home />
      </div>
    </div>
  );
}

export default App;
