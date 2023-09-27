import React, { useContext, useState } from "react";
import "./style.css";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { QueryContext } from "../../../App";

const Search = () => {
  const { setQuery } = useContext(QueryContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue !== "") {
      setQuery(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="search-block">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Search...."
        className="search-input"
      />
      <UilSearch
        onClick={handleSearch}
        size={25}
        className="icons-search search-icon"
      />
    </div>
  );
};

export default Search;
