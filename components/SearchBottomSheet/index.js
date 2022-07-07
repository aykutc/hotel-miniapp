import { SearchRegionArray } from "data/data";
import React, { useState } from "react";
import SearchContent from "../HomeComponents/SearchContent";
import Back from "../icons/Back";
import SearchBar from "../SearchBar";
import styles from "./search-bottom-sheet.module.css";

function SearchBottomSheet() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div style={{ padding: 24, height: "calc(100vh - 170px)" }}>
      <div className={styles.search}>
        <Back
          onClick={() => {
            setSearchTerm("");
          }}
        ></Back>
        <SearchBar
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></SearchBar>
      </div>
      <SearchContent searchData={SearchRegionArray} searchTerm={searchTerm} />
    </div>
  );
}

export default SearchBottomSheet;
