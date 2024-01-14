import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import SearchBar from "./components/SearchBar";
import Weather from "./Weather";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={15}
        outerSize={10}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "div.title",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
      <Router>
        <Routes>
          <Route exact path="*" element={<Error />} />
          <Route exact path="/" element={<SearchBar />} />
          <Route exact path="/weather" element={<Weather />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
