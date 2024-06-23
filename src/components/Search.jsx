import { useState } from "react";
import "../styles/Search.scss";

function Search({ handleSearch }) {
  const handleChange = (event) => {
    handleSearch(event.target.value); // Update searchText in App.jsx
  };

  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        onChange={handleChange} // Call handleChange on input change
        placeholder="Search your lilypad..."
        className="search"
      />
    </div>
  );
}

export default Search;
