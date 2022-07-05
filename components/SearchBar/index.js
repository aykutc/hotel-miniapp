import React from "react";
import Search from "../icons/Search";

function SearchBar({ onClick, onChange, value, inputRef }) {
  return (
    <div className="searchContainer">
      <div className="input-icon">
        <Search></Search>
      </div>

      <input
        ref={inputRef}
        onChange={onChange}
        value={value}
        type="text"
        placeholder="Search for a destination..."
      />

      <style jsx>{`
        .searchContainer {
          position: relative;
          width: 100%;
        }
        *:focus {
          outline: none;
        }
        input {
          background: #ffffff;
          position: relative;
          /* Grayscale/Gray 40% */
          height: 48px;
          border: 1px solid #e8e9e9;
          border-radius: 4px;
          text-align: left;
          padding-left: 48px;
          width: 100%;

          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #8e8f90;
        }
        input::-webkit-input-placeholder {
          text-align: left;
        }
        input::placeholder {
          text-align: left;
        }

        .input-icon {
          position: absolute;
          z-index: 10;
          left: 17px;
          top: 12px;
        }
      `}</style>
    </div>
  );
}

export default SearchBar;
