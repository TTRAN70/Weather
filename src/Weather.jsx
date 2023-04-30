import { useState, useEffect } from "react";
import "./Weather.css";
import ShowWeather from "./components/ShowWeather";
const Weather = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let value = params.search;
  const [searchInfo, setSearchInfo] = useState(value);
  const [weatherData, setWeatherData] = useState(undefined);
  const fetchData = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_REACT_API_KEY
      }&q=${searchInfo}&days=7`
    );
    const data = await response.json();
    setWeatherData(data);
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
