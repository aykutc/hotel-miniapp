import Like from "@/components/icons/Like";
import RecommendedCard from "@/components/RecommendedCard";
import React, { useState } from "react";
import OptimizedImage from "../../OptimizedImage";
import styles from "./UpcomingCard.module.css";

function UpcomingCard({
  hotelName,
  title,
  block,
  img,
  showFavorite,
  isFavorite,
  status,
  date,
  imageStyles,
  favoriteOnClick,
  ...props
}) {
  return (
    <div className={styles.upcomingCardWrapper} {...props}>
      <OptimizedImage
        src={img}
        style={{ ...imageStyles, height: 118, width: "100%" }}
        type={"jpg"}
      ></OptimizedImage>
      {showFavorite && (
        <Like
          onClick={(e) => {
            e.stopPropagation();
            favoriteOnClick();
          }}
          fill={isFavorite ? "white" : "transparent"}
          style={{ position: "absolute", top: 10, right: 10 }}
        />
      )}
      <div className={styles.upcomingBottomArea}>
        <p className={styles.upcomingDateText}>{date}</p>

        <div className={styles.upcomingTextArea}>
          <p className={styles.upcomingTitle}>{hotelName}</p>
          <p className={styles.upcomingDescription}>{block}</p>
        </div>

        <div className={styles.tag}>
          <p className={styles.hotelName}>{status}</p>
        </div>
      </div>
    </div>
  );
}

export default UpcomingCard;
