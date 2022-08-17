import React from "react";
import Spinner from "../Spinner";

const FloatingBottomButton = ({
  children,
  spinner,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <>
      <button
        disabled={disabled}
        className={"button"}
        onClick={(e) => {
          e.preventDefault();
          if (!spinner) {
            onClick();
          }
        }}
        {...props}
      >
        {spinner ? <Spinner></Spinner> : children}
      </button>
      <style jsx>{`
        .button {
          position: fixed;
          bottom: 40px;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          height: 52px;
          width: calc(100% - 48px);
          min-width: max-content;
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          background-color: var(--primary-neom-dark);
          border-radius: 104px;
          color: #fff;
          z-index: 999999;
          transition: all 0.3s;
        }

        .button:disabled {
          background: #8e8f90;
          color: white;
        }

        .button:active {
          background-color: #333538;
        }
      `}</style>
    </>
  );
};

export default FloatingBottomButton;
