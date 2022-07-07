import React from "react";
import styles from "./button.module.css";

const FloatingBottomButton = ({ children, disabled, onClick, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={styles.callendarButton}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default FloatingBottomButton;
