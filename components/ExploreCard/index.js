import React from "react";
import OptimizedImage from "../OptimizedImage";
import styles from "./ExploreCard.module.css";

function ExploreCard({ title, description, img, logo }) {
  return (
    <div className={styles.cardWrapper}>
      <OptimizedImage className={styles.bgImage} file={img}></OptimizedImage>
      <OptimizedImage
        className={styles.regionIcon}
        file={logo}
      ></OptimizedImage>

      <div className={styles.textArea}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ExploreCard;
