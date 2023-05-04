import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
const SearchBar = () => {
  const [search, setSearch] = useState("");
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
    console.error(error);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/weather?search=" + search);
  };
  return (
    <div className="search-bar">
      <div className="title">
        A simple weather app, made just for <span className="you">you</span>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="search">
        <button
          onClick={() =>
            navigator.geolocation.getCurrentPosition(successSearch, errorSearch)
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
          placeholder="Enter a city name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
    </div>
  );
};
export default SearchBar;
