import * as React from "react";

const Bed = ({ stroke = "#8E8F90", ...props }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.3125 11.8125V5.625H14.625C15.2217 5.625 15.794 5.86205 16.216 6.28401C16.6379 6.70597 16.875 7.27826 16.875 7.875V11.8125"
      stroke="#8E8F90"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.125 14.625V3.375"
      stroke="#8E8F90"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.125 11.8125H16.875V14.625"
      stroke="#8E8F90"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.3125 5.625H1.125"
      stroke="#8E8F90"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Bed;
