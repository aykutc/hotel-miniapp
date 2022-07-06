import React, { useEffect, useState } from 'react';
import styles from './slider.module.css';

const Slider = ({ value, setValue, minValue, maxValue, leftText, rightText }) => {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const _value = ((value - minValue) / (maxValue - minValue)) * 100;

  return (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', whiteSpace: 'nowrap', margin: '16px 0' }}>
      <p style={{ width: '40px', minWidth: '40px' }}>{leftText}</p>

      <input style={{ background: 'linear-gradient(to right, #b89535 0%, #b89535 ' + _value + '%, #E8E9E9 ' + _value + '%, #E8E9E9 100%)' }} type="range" value={value} min={minValue} max={maxValue} className={styles.slider} onInput={handleInput} />
      <p style={{ width: '40px', minWidth: '40px' }}>{rightText}</p>
    </div>
  );
};

export default Slider;
