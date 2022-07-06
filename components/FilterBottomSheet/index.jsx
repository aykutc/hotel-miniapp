import React, { useState } from 'react';
import MultipleSlider from './MultipleSlider';
import SelectBox from './SelectBox';
import Slider from './Slider';

function FilterBottomSheet() {
  const [distance, setDistance] = useState(100);
  const [priceRange, setPriceRange] = useState([100, 2000]);
  const [sortBy, setSortBy] = useState('Distance');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '24px' }}>
      <SelectBox title="Sort By" data={['Distance', 'Price Range', 'Rating']} selected={sortBy} setSelected={setSortBy} />
      <Slider value={distance} setValue={setDistance} minValue={1} maxValue={150} leftText={'1 mi'} rightText={distance + ' mi'} />
      <MultipleSlider value={priceRange} setValue={setPriceRange} minValue={100} maxValue={2000} leftText={'$' + priceRange[0]} rightText={'$' + priceRange[1]} />
    </div>
  );
}

export default FilterBottomSheet;
