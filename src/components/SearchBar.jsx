import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import search_icon from "../assets/search_icon.svg";
import SvgImage from "./SvgImage";
import "./searchBar.css";

const SearchBarDemo = ({ onCityClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const _toggleSearch = () => {
    if (isActive) {
      onCityClick(inputValue);
      setInputValue("");
    }
    setIsActive(!isActive);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClear = () => {
    setInputValue("");
  };

  return (
    <>
      <div
        className={`search-container ${isActive && "search-container-active"}`}
      >
        {/* <button className="search-button-style" onClick={_toggleSearch}>
          {isActive ? (
            <AiOutlineClose size={18} />
          ) : (
            <SvgImage src={search_icon} />
          )}
        </button> */}
        <button className="search-button-style" onClick={_toggleSearch}>
          <SvgImage src={search_icon} />
        </button>
        {isActive && (
          <button className="close-button-style" onClick={onClear}>
            <AiOutlineClose size={12} />
          </button>
        )}
        <input
          className="search-input"
          value={inputValue}
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
};

export default SearchBarDemo;
