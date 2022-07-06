import React from "react";
import styles from "./no-data.module.css";

function NoData({ title, subTitle }) {
  return (
    <div className={styles.noDataContainer}>
      <p className={styles.noDataTitle}>{title}</p>
      <p className={styles.noDataSubTitle}>{subTitle}</p>
    </div>
  );
}

export default NoData;
