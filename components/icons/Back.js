import * as React from "react";
import Router from "next/router";
import { useRouterBack } from "@/utils/hooks";

const Back = ({
  onClick,
  disableClick,
  fill = "#8E8F90",
  f7router,
  ...props
}) => {
  const back = useRouterBack();
  return (
    <div
      className="div"
      style={{
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
        ...props.style,
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        if (disableClick) {
          return;
        }
        if (onClick) {
          console.log("onclick");
          onClick();
        } else {
          back(f7router);
          /* Router.back(); */
          /* window.history.back(); */
        }
      }}
    >
      <svg
        width={10}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
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
        div {
          height: 36px;
          width: 36px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Back;
