import { saveHotel } from "data/api";
import Router from "next/router";
import React, { useState } from "react";
import Like from "../icons/Like";
import OptimizedImage from "../OptimizedImage";

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
    <>
      <div
        className={roomSelect ? "roomsWrapper" : "recommendCardWrapper"}
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

        <div className={"recommendBottomArea"}>
          {subTitle && <span className={"tag"}>{subTitle}</span>}
          <div className={"recommendTextArea"}>
            <p className={"recommendTitle"}>{title}</p>
            <p
              className={"recommendDescription"}
              style={{
                fontSize: roomSelect && "12px",
                lineHeight: roomSelect && "15px",
              }}
            >
              {info || block}
            </p>
          </div>

          <div className={"priceArea"}>
            <p className={"discountedPrice"}>
              {price || discountPrice}
              <span>/night</span>
            </p>
            {roomSelect || <p className={"price"}>{discountPrice}</p>}
          </div>
          {roomSelect && (
            <button
              className={"roomsButton"}
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
      <style jsx>{`
        .roomsWrapper,
        .recommendCardWrapper {
          position: relative;
          width: 230px;
          min-width: 230px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          overflow: hidden;
          border: 1px solid #1d1f2212;
          margin-right: 10px;
        }

        .recommendBottomArea {
          padding: 14px;
          border-top: 1px solid #1d1f2212;
          border-bottom-right-radius: 4px;
          border-bottom-left-radius: 4px;
          position: relative;
        }

        .tag {
          background: #f3efe5;
          border-radius: 4px;

          padding: 1px 6px;

          margin: 0px;
          font-family: "Outfit";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;

          letter-spacing: 1px;
          text-transform: uppercase;

          color: #1d1f22;
        }

        .hotelName {
        }

        .recommendTextArea {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 13px;
        }

        .recommendTitle {
          margin: 0px;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.01em;
          color: #1d1f22;
          text-align: start;
        }

        .recommendDescription {
          margin: 0;
          font-style: normal;
          font-weight: 300;
          font-size: 13px;
          line-height: 16px;
          color: #565759;
          text-align: start;
          margin-bottom: 12px;
        }

        .priceArea {
          display: flex;
          align-items: flex-end;
          gap: 8px;
        }

        .discountedPrice {
          margin: 0px;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.01em;
          color: #1d1f22;
        }

        .discountedPrice > span {
          margin: 0px;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          color: #565759;
        }

        .price {
          margin: 0px;

          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;

          color: #8e8f90;
          text-decoration: line-through;
          text-decoration-color: #ebc03f;
        }

        .roomsButton {
          position: absolute;
          right: 14px;
          bottom: 14px;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          padding: 8px 24px;
          border-radius: 68px;
        }
      `}</style>
    </>
  );
}

export default RecommendedCard;
