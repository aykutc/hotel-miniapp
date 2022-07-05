import * as React from "react";

const Message = ({ ...props }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.7565 16.5941C3.63983 14.7101 3.24924 12.4833 3.65804 10.3317C4.06684 8.18014 5.24693 6.25177 6.97677 4.90862C8.7066 3.56548 10.8672 2.89992 13.053 3.0369C15.2388 3.17388 17.2994 4.10398 18.848 5.65259C20.3966 7.2012 21.3267 9.26181 21.4637 11.4476C21.6006 13.6334 20.9351 15.794 19.5919 17.5238C18.2488 19.2536 16.3204 20.4337 14.1689 20.8425C12.0173 21.2513 9.79049 20.8607 7.9065 19.7441L4.794 20.6253C4.66648 20.6626 4.53128 20.6649 4.40256 20.632C4.27384 20.5991 4.15635 20.5321 4.0624 20.4382C3.96845 20.3442 3.9015 20.2267 3.86858 20.098C3.83565 19.9693 3.83796 19.8341 3.87525 19.7066L4.7565 16.5941Z"
      stroke="#8E8F90"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
    <path
      d="M12.5 13.125C13.1213 13.125 13.625 12.6213 13.625 12C13.625 11.3787 13.1213 10.875 12.5 10.875C11.8787 10.875 11.375 11.3787 11.375 12C11.375 12.6213 11.8787 13.125 12.5 13.125Z"
      fill="#8E8F90"
    />
    <path
      d="M8 13.125C8.62132 13.125 9.125 12.6213 9.125 12C9.125 11.3787 8.62132 10.875 8 10.875C7.37868 10.875 6.875 11.3787 6.875 12C6.875 12.6213 7.37868 13.125 8 13.125Z"
      fill="#8E8F90"
    />
    <path
      d="M17 13.125C17.6213 13.125 18.125 12.6213 18.125 12C18.125 11.3787 17.6213 10.875 17 10.875C16.3787 10.875 15.875 11.3787 15.875 12C15.875 12.6213 16.3787 13.125 17 13.125Z"
      fill="#8E8F90"
    />
  </svg>
);

export default Message;
