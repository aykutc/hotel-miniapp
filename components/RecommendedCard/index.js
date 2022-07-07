import Router from "next/router";
import React, { useEffect, useState } from "react";
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
  info,
  roomSelect,
  setSelectedRoom,
  selectedRoom,
  item,
  ...props
}) {
  const [isLike, setIsLike] = useState(false);
  const [selected, setSelected] = useState(false);
  // console.log(item.id)

  return (
    <div
      className={roomSelect ? styles.roomsWrapper : styles.recommendCardWrapper}
      {...props}
      onClick={!roomSelect ? () => {
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
      } : undefined}
    >
      <OptimizedImage
        src={img}
        style={{ ...imageStyles, height: 118 }}
        type={"jpg"}
      ></OptimizedImage>
      {showFavorite && (
        <Like
          onClick={() => setIsLike(!isLike)}
          fill={isLike ? "white" : "transparent"}
          style={{ position: "absolute", top: 10, right: 10 }}
        />
      )}

      <div className={styles.recommendBottomArea}>
        {subTitle && <div className={styles.tag}>
          <p className={styles.hotelName}>{subTitle}</p>
        </div>}
        <div className={styles.recommendTextArea}>
          <p className={styles.recommendTitle}>{title}</p>
          <p className={styles.recommendDescription}
            style={{
              fontSize: roomSelect && "12px",
              lineHeight: roomSelect && "15px"
            }}>
            {info || block}</p>
        </div>

        <div className={styles.priceArea}>
          <p className={styles.discountedPrice}>
            {price || discountPrice}
            <span>/night</span>
          </p>
          {roomSelect || <p className={styles.price}>{price}</p>}
        </div>
        {roomSelect && <button className={styles.roomsButton}
          onClick={() => {
            setSelectedRoom(item.id);
            setSelected(!selected);
          }}
          style={{ backgroundColor: selected ? "#1D1F22" : "#e8e9e9", color: selected ? "#fff" : "#565759" }}
        >
          {selected ? "SELECTED" : "SELECT"}
        </button>}
      </div>
    </div>
  );
}

export default RecommendedCard;
