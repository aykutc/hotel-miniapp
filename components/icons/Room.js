import * as React from "react";

const Room = ({ ...props }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.6875 15.75H16.3125"
      stroke="#8E8F90"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.9375 15.75V2.8125C3.9375 2.66332 3.99676 2.52024 4.10225 2.41475C4.20774 2.30926 4.35082 2.25 4.5 2.25H13.5C13.6492 2.25 13.7923 2.30926 13.8977 2.41475C14.0032 2.52024 14.0625 2.66332 14.0625 2.8125V15.75"
      stroke="#8E8F90"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.9688 9.84375C11.4347 9.84375 11.8125 9.46599 11.8125 9C11.8125 8.53401 11.4347 8.15625 10.9688 8.15625C10.5028 8.15625 10.125 8.53401 10.125 9C10.125 9.46599 10.5028 9.84375 10.9688 9.84375Z"
      fill="#8E8F90"
    />
  </svg>
);

export default Room;
