import "./ShowWeather.css";
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
      <div className="windInfo">wind data</div>
      <div className="currentForecast">current forecast data</div>
      <div className="sevendayForecast">sevenday forecast data</div>
    </div>
  );
};

export default ShowWeather;
