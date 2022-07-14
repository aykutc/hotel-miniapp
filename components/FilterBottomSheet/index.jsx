import { getFilter, saveFilter } from "data/api";
import React, { useState, useEffect } from "react";
import FloatingBottomButton from "../FloatingBottomButton";
import MultipleSlider from "./MultipleSlider";
import SelectBox from "./SelectBox";
import Slider from "./Slider";

function FilterBottomSheet({ onClose, reset }) {
  const [distance, setDistance] = useState(150);
  const [priceRange, setPriceRange] = useState([100, 2000]);
  const [sortBy, setSortBy] = useState("Distance");
  const [filters, setFilters] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const _filters = getFilter();
    if (_filters) {
      setFilters(_filters);
      if (_filters.sortBy) {
        setSortBy(_filters.sortBy);
      }
      if (_filters.distance) {
        setDistance(parseInt(_filters.distance));
      }
      if (_filters.priceRange) {
        setPriceRange(_filters.priceRange);
      }
    }
  }, []);

  useEffect(() => {
    if (reset) {
      setDistance(150);
      setPriceRange([100, 2000]);
      setSortBy("Distance");
    }
  }, [reset]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "24px",
        gap: "40px",
        height: "calc(100vh - 140px)",
      }}
    >
      <SelectBox
        title="Sort By"
        data={["Distance", "Price Range", "Rating"]}
        selected={sortBy}
        setSelected={setSortBy}
      />
      <Slider
        title="Distance"
        value={distance}
        setValue={setDistance}
        minValue={1}
        maxValue={150}
        leftText={"1 mi"}
        rightText={distance + " mi"}
      />
      <MultipleSlider
        title="Price Range"
        value={priceRange}
        setValue={setPriceRange}
        minValue={100}
        maxValue={2000}
        leftText={"$" + priceRange[0]}
        rightText={"$" + priceRange[1]}
      />

      <FloatingBottomButton
        onClick={() => {
          saveFilter({ ...filters, sortBy, distance, priceRange });
          onClose();
        }}
      >
        SEE RESULTS
      </FloatingBottomButton>
    </div>
  );
}

export default FilterBottomSheet;
