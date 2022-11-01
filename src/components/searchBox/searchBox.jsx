import React from "react";
import "./searchBox.css";

const SearchBox = ({ placeHolder, handleChange }) => {
  return (
    <input
      className="searchbox"
      type="text"
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
