import React from "react";
import styles from "./tabs.module.css";

const Tabs = ({ data, selected, setSelected }) => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <a
          className={styles.item}
          onClick={() => setSelected(item)}
          style={{
            flex: 1 / data.length,
            backgroundColor: item === selected ? "#1D1F22" : "transparent",
            color: item === selected ? "#FFF" : "#8E8F90",
          }}
          key={index}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Tabs;
