import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TiWeatherWindyCloudy } from "react-icons/ti";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState("");
  const navigate = useNavigate();
  const successSearch = (position) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
      );
      const data = await response.json();
      setSearch(data.city);
    };
    fetchData();
  };
  const errorSearch = (error) => {
    console.log("oh no!");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/weather?search=" + search);
  };
  const handleCities = (event) => {
    event.preventDefault();
    navigate("/weather?search=" + event.target.innerText);
  };

  useEffect(() => {
    const fetchCity = async () => {
      const city = await fetch(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      );
      const cityData = await city.json();
      const searchCity = cityData.filter(
        function (c) {
          if (this.count < 10 && c.name.includes(search)) {
            this.count++;
            return true;
          }
          return false;
        },
        { count: 0 }
      );
      setCities(searchCity);
    };
    if (search) {
      fetchCity().catch(console.error);
    } else {
      setCities("");
    }
  }, [search]);
  return (
    <div className="search-bar">
      <nav className="navigation">
        <div className="title">
          <TiWeatherWindyCloudy className="windy" /> NEON WEATHER
        </div>
        <form
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
          className="search"
        >
          <button
            onClick={() =>
              navigator.geolocation.getCurrentPosition(
                successSearch,
                errorSearch
              )
            }
            type="button"
            className="geolocation"
          >
            <HiOutlineLocationMarker className="geoicon" />
          </button>
          <button
            onClick={(e) => e.preventDefault}
            className="searchInput"
            type="submit"
          >
            <HiMagnifyingGlass className="searchIcon" />
          </button>
          <input
            className="weatherInput"
            required
            type="text"
            name="search"
            placeholder="City name or zip"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div id="cityList" className="citiesList">
            {cities &&
              cities.map((c, index) => {
                return (
                  <div
                    key={index}
                    className="city"
                    onClick={(e) => handleCities(e)}
                  >{`${c.name}, ${c.country}`}</div>
                );
              })}
          </div>
        </form>
      </nav>
      <div className="newTitle">
        Hi, Welcome to my <span className="secondTitle">Neon Weather App.</span>
        <div className="subtext">
          To get started, enter a city name at the top.
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
