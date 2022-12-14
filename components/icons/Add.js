import * as React from "react";

const Add = ({ ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 4C1 2.34315 2.34315 1 4 1H16C17.6569 1 19 2.34315 19 4V16C19 17.6569 17.6569 19 16 19H4C2.34315 19 1 17.6569 1 16V4Z"
      stroke="#8E8F90"
      strokeWidth="1.5"
    />
    <path
      d="M9.09961 6L9.09961 14L10.5996 14L10.5996 6L9.09961 6Z"
      fill="#8E8F90"
    />
    <path d="M14 9.25L6 9.25L6 10.75L14 10.75L14 9.25Z" fill="#8E8F90" />
  </svg>
);

export default Add;
