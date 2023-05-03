import { useState } from "react";
import "./SearchBar.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
const SearchBar = () => {
  const [search, setSearch] = useState("");
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
    console.error(error);
  };
  return (
    <div className="search-bar">
      <div className="title">
        A simple weather app, made just for <span className="you">you</span>
      </div>
      <form className="search" action="/Weather-App/weather">
        <button
          onClick={() =>
            navigator.geolocation.getCurrentPosition(successSearch, errorSearch)
          }
          type="button"
          className="geolocation"
        >
          <HiOutlineLocationMarker className="geoicon" />
        </button>
        <button className="searchInput" type="submit">
          <HiMagnifyingGlass className="searchIcon" />
        </button>
        <input
          className="weatherInput"
          required
          type="text"
          name="search"
          placeholder="Enter a city name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
    </div>
  );
};
export default SearchBar;
