import React from "react";
import styles from "./Title.module.css";

function Title({ children, ...props }) {
  return (
    <div className={styles.title} {...props}>
      {children}
    </div>
  );
}

export default Title;
