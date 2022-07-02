import React from "react";
import OptimizedImage from "../OptimizedImage";
import styles from "./ExploreCard.module.css";

function ExploreCard({ index, title, description, img, imgWebp, logo }) {
  return (
    <div className={styles.cardWrapper}>
      <OptimizedImage
        className={styles.bgImage}
        loading={index < 2 ? "eager" : "lazy"}
        file={img}
        fileWebp={imgWebp}
        type="jpg"
      ></OptimizedImage>
      <OptimizedImage
        className={styles.regionIcon}
        file={logo}
        type="png"
      ></OptimizedImage>

      <div className={styles.textArea}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ExploreCard;
