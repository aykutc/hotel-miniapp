import React, { useState } from "react";
import styles from "./slider.module.css";

const Slider = () => {
  const [price, setPrice] = useState(40);
  const handleInput = (e) => {
    setPrice(e.target.value);
  };
  return (
    <div>
      <input type="range" className={styles.slider} onInput={handleInput} />
      <p>Value: {price}</p>
    </div>
  );
};

export default Slider;
