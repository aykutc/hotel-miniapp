import * as React from "react";

const CheckIn = ({ ...props }) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 3.75H5a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75ZM17 2.25v3M8 2.25v3M4.25 8.25h16.5"
      stroke="#8E8F90"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="m15.875 12-4.378 4.125-2.372-2.25"
      stroke="#8E8F90"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default CheckIn;
