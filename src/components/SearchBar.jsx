import "./SearchBar.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <form className="search" action="/weather">
        <button className="searchInput" type="submit">
          <HiMagnifyingGlass className="searchIcon" />
        </button>
        <input
          className="weatherInput"
          required
          type="text"
          name="search"
          placeholder="Search"
        />
      </form>
    </div>
  );
};
export default SearchBar;
