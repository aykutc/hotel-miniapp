import React from "react";

function Title({ children, ...props }) {
  return (
    <>
      <div className={"title"} {...props}>
        {children}
      </div>
      <style jsx>{`
        .title {
          font-weight: 500;
          font-size: 18px;
          line-height: 23px;
          color: var(--primary-neom-dark);
          margin-bottom: 8px;
        }
      `}</style>
    </>
  );
}

export default Title;
