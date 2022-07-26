import { saveRegion } from "data/api";
import { SearchRegionArray } from "data/data";
import React, { useState } from "react";
import SearchContent from "../HomeComponents/SearchContent";
import Back from "../icons/Back";
import SearchBar from "../SearchBar";

function SearchBottomSheet({ close }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div style={{ padding: 24, height: "calc(100vh - 170px)" }}>
        <div className={"search"}>
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
        <SearchContent
          searchData={SearchRegionArray}
          searchTerm={searchTerm}
          onClick={(value) => {
            saveRegion(value);
            close();
          }}
        />
      </div>
      <style jsx>{`
        .search {
          width: 100%;
          margin-bottom: 16px;
          display: flex;
          flex: 1;
        }
      `}</style>
    </>
  );
}

export default SearchBottomSheet;
