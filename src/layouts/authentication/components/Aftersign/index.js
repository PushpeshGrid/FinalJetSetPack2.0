import React, { useState } from "react";
import "./tailwind.css";
import Welcome from "./welcomponent/welcomebody";
import Aboutjet from "./welcomponent/aboutjetset";

const App = () => {
  return (
    <div>
      <div className="bubble">
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>

        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>

        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
        <span className="bubble-animation"></span>
      </div>
      <Welcome />
      <Aboutjet />
    </div>
  );
};

export default App;
