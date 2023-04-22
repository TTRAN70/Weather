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
        <h3>{weatherData.weatherData.location.localtime.substring(0, 11)}</h3>
        <h2>{weatherData.weatherData.location.localtime.substring(11, 17)}</h2>
        <div className="infoContainer">
          <div className="info">
            <div>
              <WiThermometer /> High
            </div>
            <div>
              {weatherData.weatherData.forecast.forecastday[0].day.maxtemp_f}°F
            </div>
          </div>
          <div className="info">
            <div>
              <FiWind /> Wind
            </div>
            <div>{weatherData.weatherData.current.wind_mph}mph</div>
          </div>
          <div className="info">
            <div>
              <WiSunrise /> Sunrise
            </div>
            <div>
              {weatherData.weatherData.forecast.forecastday[0].astro.sunrise}
            </div>
          </div>
          <div className="info">
            <div>
              <WiHumidity /> Humidity
            </div>
            <div>{weatherData.weatherData.current.humidity}%</div>
          </div>
          <div className="info">
            <div>
              <WiThermometerExterior /> Low
            </div>
            <div>
              {weatherData.weatherData.forecast.forecastday[0].day.mintemp_f}°F
            </div>
          </div>
          <div className="info">
            <div>
              <WiRain /> Chance of Rain
            </div>
            <div>
              {
                weatherData.weatherData.forecast.forecastday[0].day
                  .daily_chance_of_rain
              }
              %
            </div>
          </div>
          <div className="info">
            <div>
              <WiSunset /> Sunset
            </div>
            <div>
              {weatherData.weatherData.forecast.forecastday[0].astro.sunset}
            </div>
          </div>
          <div className="info">
            <div>
              <BsThermometerHalf /> Feels Like
            </div>
            <div>{weatherData.weatherData.current.feelslike_f}°F</div>
          </div>
        </div>
      </div>
      <div className="currentForecast">current forecast data</div>
      <div className="sevendayForecast">sevenday forecast data</div>
    </div>
  );
};

export default ShowWeather;
