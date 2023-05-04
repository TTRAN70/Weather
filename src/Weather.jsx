import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Weather.css";
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
    fetchData();
  }, []);

  if (weatherData === undefined) {
    return <span className="loader"></span>;
  }
  return (
    <div>
      <ShowWeather weatherData={weatherData} />
    </div>
  );
};

export default Weather;
