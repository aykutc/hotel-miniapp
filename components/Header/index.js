import React from "react";
import HeaderTitle from "../HeaderTitle";
import styles from "./header.module.css";

function Header({ children }) {
  return <div className={styles.header}>{children}</div>;
}

export default Header;
