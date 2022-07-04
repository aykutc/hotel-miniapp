import React from "react";
import styles from "./button.module.css";

const FloatingBottomButton = ({ children, onClick, ...props }) => {
  return (
    <>
      <button className={styles.callendarButton} onClick={onClick} {...props}>
        {children}
      </button>
    </>
  );
};

export default FloatingBottomButton;
