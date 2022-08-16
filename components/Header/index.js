import React from "react";

function Header({ children, ...props }) {
  return (
    <>
      <div className={"header"} {...props}>
        {children}
      </div>
      <style jsx>{`
        .header {
          min-height: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
}

export default Header;
