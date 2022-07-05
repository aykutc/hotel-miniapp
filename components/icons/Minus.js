import * as React from "react";

const Minus = ({ ...props }) => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="19" cy="19" r="18.5" stroke="#1D1F22" />
    <line x1="12" y1="19" x2="26" y2="19" stroke="#1D1F22" strokeWidth="1.5" />
  </svg>
);

export default Minus;
