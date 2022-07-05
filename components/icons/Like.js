import * as React from "react";

const Like = ({ fill = "transparent", ...props }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 16C9 16 1.50711 11.804 1.50711 6.70881C1.50711 5.80808 1.81919 4.93517 2.39024 4.2386C2.96129 3.54202 3.75605 3.06482 4.63929 2.88817C5.52253 2.71152 6.43969 2.84634 7.23473 3.2697C8.02977 3.69305 8.65357 4.37879 9 5.21023C9.34644 4.37879 9.97024 3.69305 10.7653 3.2697C11.5603 2.84634 12.4775 2.71152 13.3607 2.88817C14.244 3.06482 15.0387 3.54202 15.6098 4.2386C16.1808 4.93517 16.4929 5.80808 16.4929 6.70881C16.4929 11.804 9 16 9 16Z"
      fill={fill}
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default Like;
