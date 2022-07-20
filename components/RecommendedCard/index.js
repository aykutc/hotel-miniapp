import { saveHotel } from "data/api";
import Router from "next/router";
import React, { useState } from "react";
import Like from "../icons/Like";
import OptimizedImage from "../OptimizedImage";
import styles from "./Recommended.module.css";

function RecommendedCard({
  imageStyles,
  showFavorite,
  favoriteOnClick,
  isFavorite,
  hotel,
  roomSelect,
  updateSelectedRooms,
  item,
  subTitle,
  ...props
}) {
  const {
    title,
    block,
    discountPrice,
    price,
    img,
    reviews,
    location,
    phone,
    imgRect,
    rate,
    info,
  } = hotel;

  return (
    <div
      className={roomSelect ? styles.roomsWrapper : styles.recommendCardWrapper}
      {...props}
      onClick={
        !roomSelect
          ? () => {
              saveHotel({
                ...hotel,
                imageStyles,
                showFavorite,
              });
              Router.push({
                pathname: "/hotel-detail",
              });
            }
          : undefined
      }
    >
      <OptimizedImage
        src={img}
        style={{ ...imageStyles, height: 118 }}
        type={"jpg"}
      />
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

      <div className={styles.recommendBottomArea}>
        {subTitle && <span className={styles.tag}>{subTitle}</span>}
        <div className={styles.recommendTextArea}>
          <p className={styles.recommendTitle}>{title}</p>
          <p
            className={styles.recommendDescription}
            style={{
              fontSize: roomSelect && "12px",
              lineHeight: roomSelect && "15px",
            }}
          >
            {info || block}
          </p>
        </div>

        <div className={styles.priceArea}>
          <p className={styles.discountedPrice}>
            {price || discountPrice}
            <span>/night</span>
          </p>
          {roomSelect || <p className={styles.price}>{discountPrice}</p>}
        </div>
        {roomSelect && (
          <button
            className={styles.roomsButton}
            onClick={() => {
              updateSelectedRooms(item.id);
            }}
            style={{
              backgroundColor: item.selected ? "#1D1F22" : "#e8e9e9",
              color: item.selected ? "#fff" : "#565759",
            }}
          >
            {item.selected ? "SELECTED" : "SELECT"}
          </button>
        )}
      </div>
    </div>
  );
}

export default RecommendedCard;
