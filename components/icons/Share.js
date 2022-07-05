import * as React from "react";

const Share = ({ ...props }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4L9 1L6 4"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9 1V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M2.75 7C2.75 6.58579 2.41421 6.25 2 6.25C1.58579 6.25 1.25 6.58579 1.25 7H2.75ZM16.75 7C16.75 6.58579 16.4142 6.25 16 6.25C15.5858 6.25 15.25 6.58579 15.25 7H16.75ZM1.25 7V16.5H2.75V7H1.25ZM2.5 17.75H15.5V16.25H2.5V17.75ZM16.75 16.5V7H15.25V16.5H16.75ZM15.5 17.75C16.1904 17.75 16.75 17.1904 16.75 16.5H15.25C15.25 16.3619 15.3619 16.25 15.5 16.25V17.75ZM1.25 16.5C1.25 17.1904 1.80964 17.75 2.5 17.75V16.25C2.63807 16.25 2.75 16.3619 2.75 16.5H1.25Z"
      fill="white"
    />
  </svg>
);

export default Share;
