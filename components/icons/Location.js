import * as React from "react";

const Location = ({ stroke = "#8E8F90", ...props }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_9_24639)">
      <path
        d="M14.25 7C14.25 7.64079 13.947 8.5461 13.3957 9.61723C12.8568 10.6641 12.1301 11.7771 11.3911 12.8048C10.654 13.8297 9.91533 14.755 9.36007 15.4249C9.2288 15.5832 9.10795 15.7271 9 15.8545C8.89205 15.7271 8.7712 15.5832 8.63993 15.4249C8.08467 14.755 7.34597 13.8297 6.6089 12.8048C5.86986 11.7771 5.1432 10.6641 4.60435 9.61723C4.05302 8.5461 3.75 7.64079 3.75 7C3.75 4.1005 6.1005 1.75 9 1.75C11.8995 1.75 14.25 4.1005 14.25 7Z"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <circle
        cx="8.9999"
        cy="6.9999"
        r="1.82143"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_9_24639">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Location;
