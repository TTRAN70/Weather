const SearchBar = () => {
  return (
    <div className="search-bar">
      <form className="search" action="/weather">
        <input required type="text" name="search" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default SearchBar;
