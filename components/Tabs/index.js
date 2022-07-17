import React, { useEffect, useRef, useState } from "react";
import styles from "./tabs.module.css";

const Tabs = ({ data, selected, setSelected }) => {
  const ref = useRef();
  const [width, setWidth] = useState(null);
  useEffect(() => {
    if (ref.current) {
      setWidth(ref?.current?.clientWidth);
    }
  }, [ref]);

  const index = data.findIndex((val) => {
    return val === selected;
  });

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <a
          ref={ref}
          className={styles.item}
          onClick={() => setSelected(item)}
          style={{
            flex: 1 / data.length,
            /* backgroundColor: item === selected ? "#1D1F22" : "transparent", */
            color: item === selected ? "#FFF" : "#8E8F90",
            zIndex: 200,
          }}
          key={index}
        >
          {item}
        </a>
      ))}
      {width && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#1D1F22",
            width,
            height: "100%",
            borderRadius: 100,
            transition: "transform .3s",
            transform: "translateX(" + index * width + "px)",
          }}
        ></div>
      )}
    </div>
  );
};

export default Tabs;
