import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SearchBar />} />
          <Route exact path="/weather" element={<Weather />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
