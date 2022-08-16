import { Navbar } from "framework7-react";
import React from "react";

function F7Navbar({ children, ...props }) {
  return (
    <Navbar
      noShadow
      noHairline
      largeTransparent
      backLinkShowText={false}
      backLink={false}
      style={{ marginBottom: 12, flexShrink: 0 }}
      {...props}
    >
      {children}
    </Navbar>
  );
}

export default F7Navbar;
