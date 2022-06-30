import React from "react";
import styles from "./HeaderTitle.module.css";

function HeaderTitle({ children }) {
  return <div className={styles.headerTitle}>{children}</div>;
}

export default HeaderTitle;
