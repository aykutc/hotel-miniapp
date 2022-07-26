import React from "react";

const FloatingBottomButton = ({ children, disabled, onClick, ...props }) => {
  return (
    <>
      <button
        disabled={disabled}
        className={"button"}
        onClick={onClick}
        {...props}
      >
        {children}
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
          background: #e8e9e9;
          color: #8e8f90;
        }

        .button:active {
          background-color: #333538;
        }
      `}</style>
    </>
  );
};

export default FloatingBottomButton;
