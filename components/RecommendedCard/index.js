import React from "react";
import OptimizedImage from "../OptimizedImage";
import styles from "./Recommended.module.css";

function RecommendedCard({
  subTitle,
  title,
  block,
  discountPrice,
  price,
  img,
  imgWebp,
  imageStyles,
  ...props
}) {
  return (
    <div className={styles.recommendCardWrapper} {...props}>
      <OptimizedImage
        src={img}
        style={{ ...imageStyles, height: 118 }}
        type={"jpg"}
      ></OptimizedImage>

      <div className={styles.recommendBottomArea}>
        <div className={styles.tag}>
          <p className={styles.hotelName}>{subTitle}</p>
        </div>
        <div className={styles.recommendTextArea}>
          <p className={styles.recommendTitle}>{title}</p>
          <p className={styles.recommendDescription}>{block}</p>
        </div>

        <div className={styles.priceArea}>
          <p className={styles.discountedPrice}>
            {discountPrice}
            <span>/night</span>
          </p>
          <p className={styles.price}>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default RecommendedCard;
