import "./ShowWeather.css";
import { FiWind } from "react-icons/fi";
import { BsThermometerHalf } from "react-icons/bs";
import {
  WiSunrise,
  WiHumidity,
  WiThermometerExterior,
  WiThermometer,
  WiRain,
  WiSunset,
} from "react-icons/wi";
const ShowWeather = (weatherData) => {
  return (
    <div className="weatherCard">
      <div className="currentWeather">
        <h1 className="current region">
          {weatherData.weatherData.location.name}
        </h1>
        <h2 className="current country">
          {weatherData.weatherData.location.country}
        </h2>
        <img
          className="current cimage"
          src={weatherData.weatherData.current.condition.icon}
          alt=""
        />
        <span className="current temp">
          {weatherData.weatherData.current.temp_f}°F
        </span>
        <div className="current ctext">
          {weatherData.weatherData.current.condition.text}
        </div>
      </div>
      <div className="windInfo">
        <h3 className="date">
          {weatherData.weatherData.location.localtime.substring(0, 11)}
        </h3>
        <h2 className="time">
          {weatherData.weatherData.location.localtime.substring(11, 17)}
        </h2>
        <div className="infoContainer">
          <div className="info row1">
            <div className="itext">
              <WiThermometer className="icon" /> High
            </div>
            <div className="currentData">
              {weatherData.weatherData.forecast.forecastday[0].day.maxtemp_f}°F
            </div>
          </div>
          <div className="info row1">
            <div className="itext">
              <FiWind className="icon" /> Wind
            </div>
            <div className="currentData">
              {weatherData.weatherData.current.wind_mph}mph
            </div>
          </div>
          <div className="info row1">
            <div className="itext">
              <WiSunrise className="icon" /> Sunrise
            </div>
            <div className="currentData">
              {weatherData.weatherData.forecast.forecastday[0].astro.sunrise}
            </div>
          </div>
          <div className="info row1">
            <div className="itext">
              <WiHumidity className="icon" /> Humidity
            </div>
            <div className="currentData">
              {weatherData.weatherData.current.humidity}%
            </div>
          </div>
          <div className="info row2">
            <div className="itext">
              <WiThermometerExterior className="icon" /> Low
            </div>
            <div className="currentData">
              {weatherData.weatherData.forecast.forecastday[0].day.mintemp_f}°F
            </div>
          </div>
          <div className="info row2">
            <div className="itext">
              <WiRain className="icon" /> Chance of Rain
            </div>
            <div className="currentData">
              {
                weatherData.weatherData.forecast.forecastday[0].day
                  .daily_chance_of_rain
              }
              %
            </div>
          </div>
          <div className="info row2">
            <div className="itext">
              <WiSunset className="icon" /> Sunset
            </div>
            <div className="currentData">
              {weatherData.weatherData.forecast.forecastday[0].astro.sunset}
            </div>
          </div>
          <div className="info row2">
            <div className="itext">
              <BsThermometerHalf className="icon" /> Feels Like
            </div>
            <div className="currentData">
              {weatherData.weatherData.current.feelslike_f}°F
            </div>
          </div>
        </div>
      </div>
      <div className="currentForecast">current forecast data</div>
      <div className="sevendayForecast">sevenday forecast data</div>
    </div>
  );
};

export default ShowWeather;
