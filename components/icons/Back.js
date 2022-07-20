import * as React from "react";
import Router from "next/router";

const Back = ({ onClick, disableClick, fill = "#8E8F90", ...props }) => (
  <div
    className="div"
    style={{
      display: "flex",
      paddingRight: 32,
      justifyContent: "center",
      alignItems: "center",
      ...props.style,
    }}
    onClick={(e) => {
      e.preventDefault();
      if (disableClick) {
        return;
      }
      if (onClick) {
        onClick();
      } else {
        Router.back();
      }
    }}
  >
    <svg width={10} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m1.5 8-.707-.707L.086 8l.707.707L1.5 8ZM7.793.293l-7 7 1.414 1.414 7-7L7.793.293Zm-7 8.414 7 7 1.414-1.414-7-7L.793 8.707Z"
        fill={fill}
      />
    </svg>
    <style jsx>{`
      div:hover path {
        fill: var(--primary-neom-dark);
      }
      path {
        transition: all 1s;
      }
    `}</style>
  </div>
);

export default Back;
