import React from "react";

function HeaderTitle({ children }) {
  return (
    <>
      <div className={"headerTitle"}>{children}</div>
      <style jsx>{`
        .headerTitle {
          display: inline-flex;
          font-size: 18px;
          color: var(--primary-neom-dark);
          text-transform: uppercase;
          font-weight: 600;
          line-height: 23px;
          /* identical to box height */
          letter-spacing: 0.08em;
        }
      `}</style>
    </>
  );
}

export default HeaderTitle;
