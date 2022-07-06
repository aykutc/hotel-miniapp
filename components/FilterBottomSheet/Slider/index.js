import React, { useState } from "react";

const Slider = () => {
  const [price, setPrice] = useState(40);
  const handleInput = (e) => {
    setPrice(e.target.value);
  };
  return (
    <>
      <div>
        <input type="range" className="slider" onInput={handleInput} />
        <p>Value: {price}</p>
      </div>
      <style jsx>
        {`
          slider::-ms-track {
            width: 300px;
            height: 5px;

            /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
            background: transparent;

            /*leave room for the larger thumb to overflow with a transparent border */
            border-color: transparent;
            border-width: 6px 0;

            /*remove default tick marks*/
            color: transparent;
          }
          slider::-ms-fill-lower {
            background: #777;
            border-radius: 10px;
          }
          slider::-ms-fill-upper {
            background: #ddd;
            border-radius: 10px;
          }
          slider::-ms-thumb {
            border: none;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: goldenrod;
          }
          slider:focus::-ms-fill-lower {
            background: #888;
          }
          slider:focus::-ms-fill-upper {
            background: #ccc;
          }
        `}
      </style>
    </>
  );
};

export default Slider;
