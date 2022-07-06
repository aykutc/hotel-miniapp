import React, { useEffect, useState } from 'react';
import styles from './slider.module.css';

const MultipleSlider = ({ value, setValue, minValue, maxValue, leftText, rightText }) => {
  const handleInput = (e) => {
    if (e.target.name === 'min') {
      setValue([e.target.value, value[1]]);
    } else {
      setValue([value[0], e.target.value]);
    }
  };

  useEffect(() => {
    const _value1 = ((value[0] - minValue) / (maxValue - minValue)) * 100;
    const _value2 = ((value[1] - minValue) / (maxValue - minValue)) * 100;

    document.getElementById('container').style.setProperty('--background-color', `linear-gradient(to right, #E8E9E9 0%, #E8E9E9 ${_value1}%, #b89535 ${_value1}%, #b89535 ${_value2}%, #E8E9E9 ${_value2}%, #E8E9E9 100%)`);
  }, [value]);

  return (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', whiteSpace: 'nowrap', margin: '16px 0' }}>
      <p style={{ width: '40px', minWidth: '40px' }}>{leftText}</p>

      <div id="container" className={styles.sliderContainer}>
        <input onInput={handleInput} name="min" type="range" value={value[0]} min={minValue} max={maxValue} step="1" />
        <input onInput={handleInput} name="max" type="range" value={value[1]} min={minValue} max={maxValue} step="1" />
      </div>

      <p style={{ width: '40px', minWidth: '40px' }}>{rightText}</p>
    </div>
  );
};

export default MultipleSlider;
