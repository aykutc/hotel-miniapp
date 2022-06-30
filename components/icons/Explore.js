import * as React from "react";

const Explore = ({ stroke = "#8E8F90", ...props }) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.086 10.585 17.45 7.05l-3.536 6.364-6.364 3.535 3.536-6.364Z"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: "stroke 1s" }}
    />
    <path
      d="M12.5 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: "stroke 1s" }}
    />
  </svg>
);

export default Explore;
