import * as React from "react";

const Stays = ({ stroke = "#8E8F90", ...props }) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.75 6.75H4.25a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-12a.75.75 0 0 0-.75-.75Z"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="bevel"
      style={{ transition: "stroke 1s" }}
    />
    <path
      d="M16.25 20.25v-15a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v15"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="bevel"
      style={{ transition: "stroke 1s" }}
    />
  </svg>
);

export default Stays;
