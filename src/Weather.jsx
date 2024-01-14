import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Weather.css";
import NavBar from "./components/NavBar";
import ShowWeather from "./components/ShowWeather";
const Weather = () => {
  const navigate = useNavigate();
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let value = params.search;
  const [searchInfo, setSearchInfo] = useState(value);
  const [weatherData, setWeatherData] = useState(undefined);
  const fetchData = async () => {
    if (searchInfo !== null) {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_REACT_API_KEY
          }&q=${searchInfo}&days=7`
        );
        if (!response.ok) {
          throw "new exception";
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        console.clear();
        alert("🌏 Please type the correct city name");
        navigate("/");
      }
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    setSearchInfo(params.search);
    fetchData();
  }, [weatherData]);

  if (weatherData === undefined) {
    return (
      <div class="fixWidth">
        <NavBar />
        <div className="weatherCard fixWeatherCard">
          <div className="currentWeather bad">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
          <div className="windInfo bad">
            <div className="fixWind">
              <div className="skeleton skeleton-wind"></div>
              <div className="skeleton skeleton-wind"></div>
              <div className="skeleton skeleton-wind"></div>
              <div className="skeleton skeleton-wind"></div>
              <div className="skeleton skeleton-wind"></div>
              <div className="skeleton skeleton-wind"></div>
              <div className="skeleton skeleton-wind"></div>
              <div className="skeleton skeleton-wind"></div>
            </div>
          </div>
          <div className="hourlyForecast bad">
            <div className="erm">
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
            </div>
          </div>
          <div className="sevendayForecast bad">
            <div className="erm mre">
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
              <div className="skeleton skeleton-hour"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="changeBack">
      <NavBar setWeather={setWeatherData} />
      <ShowWeather weatherData={weatherData} />
    </div>
  );
};

export default Weather;
