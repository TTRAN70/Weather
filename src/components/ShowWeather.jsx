import "./ShowWeather.css";
import moment from "moment";
import { useState, useEffect } from "react";
import { FiWind } from "react-icons/fi";
import { BsThermometerHalf, BsArrowLeftCircleFill } from "react-icons/bs";
import {
  WiSunrise,
  WiHumidity,
  WiThermometerExterior,
  WiThermometer,
  WiRain,
  WiSunset,
  WiDirectionDown,
  WiDirectionUp,
} from "react-icons/wi";
const ShowWeather = (weatherData) => {
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [dailyWeather, setDailyWeather] = useState([]);
  const formatHourlyForecast = () => {
    let hourArray = [];
    let hour = parseInt(
      weatherData.weatherData.location.localtime.substring(11, 14)
    );
    let day = 0;
    for (let i = 0; i < 12; i++) {
      if (hour < 24) {
        hourArray.push(
          weatherData.weatherData.forecast.forecastday[day].hour[hour]
        );
        hour++;
      } else {
        hour = 0;
        day = 1;
        hourArray.push(
          weatherData.weatherData.forecast.forecastday[day].hour[hour]
        );
        hour++;
      }
    }
    setHourlyWeather(hourArray);
  };
  const formatDailyForecast = () => {
    let dailyArray = [];
    for (let i = 0; i < 3; i++) {
      dailyArray.push(weatherData.weatherData.forecast.forecastday[i]);
    }
    setDailyWeather(dailyArray);
  };
  useEffect(() => {
    formatHourlyForecast();
    formatDailyForecast();
  }, []);
  return (
    <div className="weatherCard">
      <div className="currentWeather">
        <h1 className="current region">
          {weatherData.weatherData.location.name}
        </h1>
        <h2 className="current country">
          {weatherData.weatherData.location.country}
        </h2>
        <div className="current ctext">
          {weatherData.weatherData.current.condition.text}
        </div>
        <img
          className="current cimage"
          src={weatherData.weatherData.current.condition.icon}
          alt=""
        />
        <span className="current temp">
          {weatherData.weatherData.current.temp_f}°F
        </span>
      </div>
      <div className="windInfo">
        <h2 className="time">
          Local Time:{" "}
          {moment(
            weatherData.weatherData.location.localtime.substring(11, 17),
            "HH:mm"
          ).format("h:mm a")}
        </h2>
        <h3 className="date">
          {moment(
            weatherData.weatherData.location.localtime.substring(0, 11)
          ).format("MMMM Do, YYYY")}
        </h3>
        <div className="infoContainer">
          <div className="info row1">
            <div className="itext">
              <WiThermometer className="icon" /> High
            </div>
            <div className="currentData">
              {weatherData.weatherData.forecast.forecastday[0].day.maxtemp_f}
              °F
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
              {weatherData.weatherData.forecast.forecastday[0].astro.sunrise.toLowerCase()}
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
              {weatherData.weatherData.forecast.forecastday[0].day.mintemp_f}
              °F
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
              {weatherData.weatherData.forecast.forecastday[0].astro.sunset.toLowerCase()}
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
      <div className="hourlyForecast">
        <div className="hourlyTitle">Hourly Forecast</div>
        <div className="hourlyForecastContainer">
          {hourlyWeather.map((item, index) => {
            return (
              <div className={`hourlyContainer ${index}`} key={index}>
                <div className="Firstchild">
                  {index !== 0
                    ? moment(item.time.substring(11, 14), "H").format("h a")
                    : "Now"}
                </div>
                <div className="Secondchild">
                  <img src={item.condition.icon}></img>
                </div>
                <div className="Thirdchild">
                  {item.chance_of_rain < 10 ? "" : item.chance_of_rain + "%"}
                </div>
                <div className="Fourthchild">{item.temp_f}°F</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sevendayForecast">
        <div className="hourlyTitle">3-Day Forecast</div>
        <div className="sevendayForecastContainer">
          {dailyWeather.map((item, index) => {
            return (
              <div className={`hourlyContainer ${index}`} key={index}>
                <div className="Firstchild">
                  {index !== 0
                    ? moment(item.date, "YYYY-MM-DD")
                        .format("dddd")
                        .substring(0, 3)
                    : "Today"}
                </div>
                <div className="Secondchild">
                  <img src={item.day.condition.icon}></img>
                </div>
                <div className="Thirdchild">
                  {item.day.daily_chance_of_rain < 10
                    ? ""
                    : item.day.daily_chance_of_rain + "%"}
                </div>
                <span className="sevenFifth">
                  <WiDirectionUp />
                  {item.day.maxtemp_f}°F
                </span>
                <div className="sevenFourth">
                  <WiDirectionDown className="down" />
                  {item.day.mintemp_f}°F
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="blankDiv"></div>
    </div>
  );
};

export default ShowWeather;
