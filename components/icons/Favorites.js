import * as React from "react";

const Favorites = ({ stroke = "#8E8F90", ...props }) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 21.333S2.51 15.74 2.51 8.945a5.195 5.195 0 0 1 9.99-1.998 5.195 5.195 0 0 1 9.99 1.998c0 6.794-9.99 12.388-9.99 12.388Z"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="bevel"
      style={{ transition: "stroke 1s" }}
    />
  </svg>
);

export default Favorites;
