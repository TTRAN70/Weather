import { useState, useEffect } from "react";
import "./Weather.css";
const Weather = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let value = params.search;
  const [searchInfo, setSearchInfo] = useState(value);
  const [weatherData, setWeatherData] = useState([""]);
  const fetchData = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_REACT_API_KEY
      }&q=${searchInfo}&days=7`
    );
    const data = await response.json();
    setWeatherData(data);
  };
  const formatForecast = () => {};
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="weatherCard">
      <div className="currentWeather">some data</div>
      <div className="windInfo">wind data</div>
      <div className="currentForecast">current forecast data</div>
      <div className="sevendayForecast">sevenday forecast data</div>
    </div>
  );
};

export default Weather;
