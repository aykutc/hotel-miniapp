import * as React from "react";

// rotate = up | down | left | right
const Arrow = ({ rotate = "up",color="#8E8F90", ...props }) => {
  const rotateArrow = () => {
    if (rotate === "up") {
      return 270;
    } else if (rotate === "down") {
      return 90;
    } else if (rotate === "right") {
      return 0;
    } else if (rotate === "left") {
      return 180;
    }
    return 0;
  };
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`rotate(${rotateArrow()})`}
      {...props}
    >
      <path
        d="M1.375 0.75L6.625 6L1.375 11.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
