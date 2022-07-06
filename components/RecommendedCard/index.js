import Router from "next/router";
import React, { useState } from "react";
import Arrow from "../icons/Arrow";
import Like from "../icons/Like";
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
  showFavorite,
  favorite,
  ...props
}) {
  const [isLike, setIsLike] = useState(false);
  return (
    <div
      className={styles.recommendCardWrapper}
      {...props}
      onClick={() => {
        Router.push({
          pathname: "/hotel-detail",
          query: {
            subTitle,
            title,
            block,
            discountPrice,
            price,
            img,
            imgWebp,
            imageStyles,
            showFavorite,
            favorite,
          },
        });
      }}
    >
      <OptimizedImage
        src={img}
        style={{ ...imageStyles, height: 118 }}
        type={"jpg"}
      ></OptimizedImage>
      {showFavorite && (
        <Like
          onClick={(e) => {
            e.stopPropagation();
            setIsLike(!isLike);
          }}
          fill={isLike ? "white" : "transparent"}
          style={{ position: "absolute", top: 10, right: 10 }}
        />
      )}

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
