import { useState, useEffect } from "react";
import API_KEY from "../config";
const Weather = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let value = params.search;
  const [searchInfo, setSearchInfo] = useState(value);
  const [weatherData, setWeatherData] = useState([""]);
  const fetchData = async () => {
    base_url = "http://api.weatherapi.com/v1/current.json?key=";
    final_url = base_url + API_KEY + "&q=" + searchInfo;
    const response = await fetch(final_url);
    const data = await response.json();
    setWeatherData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="weatherCard">
      <pre>{JSON.stringify(weatherData, null, 2)}</pre>
    </div>
  );
};

export default Weather;
