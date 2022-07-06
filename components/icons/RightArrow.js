import * as React from "react";

const RightArrow = (props) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.375 3.75 11.625 9l-5.25 5.25"
      stroke="#8E8F90"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RightArrow;
