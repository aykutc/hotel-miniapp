import React, { useState } from 'react';
import FloatingBottomButton from '../FloatingBottomButton';
import MultipleSlider from './MultipleSlider';
import SelectBox from './SelectBox';
import Slider from './Slider';

function FilterBottomSheet({ onClose }) {
  const [distance, setDistance] = useState(100);
  const [priceRange, setPriceRange] = useState([100, 2000]);
  const [sortBy, setSortBy] = useState('Distance');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '24px', gap: '40px', height: 'calc(100vh - 140px)' }}>
      <SelectBox title="Sort By" data={['Distance', 'Price Range', 'Rating']} selected={sortBy} setSelected={setSortBy} />
      <Slider title="Distance" value={distance} setValue={setDistance} minValue={1} maxValue={150} leftText={'1 mi'} rightText={distance + ' mi'} />
      <MultipleSlider title="Price Range" value={priceRange} setValue={setPriceRange} minValue={100} maxValue={2000} leftText={'$' + priceRange[0]} rightText={'$' + priceRange[1]} />

      {(distance !== 100 || priceRange[0] !== 100 || priceRange[1] !== 2000 || sortBy !== 'Distance') && <FloatingBottomButton onClick={onClose}>SEE RESULTS</FloatingBottomButton>}
    </div>
  );
}

export default FilterBottomSheet;