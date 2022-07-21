import React from "react";
import HeaderTitle from "../HeaderTitle";
import styles from "./header.module.css";

function Header({ children, ...props }) {
  return (
    <div className={styles.header} {...props}>
      {children}
    </div>
  );
}

export default Header;
