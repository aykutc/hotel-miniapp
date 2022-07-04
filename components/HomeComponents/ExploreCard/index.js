import React from "react";
import OptimizedImage from "../../OptimizedImage";
import styles from "./ExploreCard.module.css";

function ExploreCard({
  index,
  title,
  description,
  img,
  imgWebp,
  logo,
  logoWebp,
  ...props
}) {
  return (
    <div className={styles.cardWrapper} {...props}>
      <div className={styles.bgImage}>
        <OptimizedImage
          loading={index < 2 ? "eager" : "lazy"}
          src={img}
          fileWebp={imgWebp}
          type="jpg"
        ></OptimizedImage>
      </div>
      <div className={styles.regionIcon}>
        <OptimizedImage
          src={logo}
          style={{ height: "100%", width: "100%" }}
        ></OptimizedImage>
      </div>
      <div className={styles.textArea}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ExploreCard;
