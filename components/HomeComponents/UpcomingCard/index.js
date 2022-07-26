import Like from "@/components/icons/Like";
import RecommendedCard from "@/components/RecommendedCard";
import React, { useState } from "react";
import OptimizedImage from "../../OptimizedImage";

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
    <>
      <div className={"upcomingCardWrapper"} {...props}>
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
        <div className={"upcomingBottomArea"}>
          <p className={"upcomingDateText"}>{date}</p>

          <div className={"upcomingTextArea"}>
            <p className={"upcomingTitle"}>{hotelName}</p>
            <p className={"upcomingDescription"}>{block}</p>
          </div>
          {status && (
            <div className={"tag"}>
              <p className={"hotelName"}>{status}</p>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .upcomingCardWrapper {
          position: relative;
          width: 100%;
          min-width: 230px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          overflow: hidden;
          border: 1px solid #1d1f2212;
          margin-right: 10px;
        }

        .upcomingBottomArea {
          padding: 14px;
          border-top: 1px solid #1d1f2212;
          border-bottom-right-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        .tag {
          width: max-content;
          background: #f3efe5;
          border-radius: 4px;

          padding: 1px 6px;
        }

        .hotelName {
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

        .upcomingTextArea {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .upcomingTitle {
          margin: 0px;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.01em;

          color: #1d1f22;

          text-align: start;
        }

        .upcomingDescription {
          margin: 0;

          font-style: normal;
          font-weight: 300;
          font-size: 13px;
          line-height: 16px;

          color: #565759;

          text-align: start;
          margin-bottom: 12px;
        }

        .upcomingDateText {
          font-style: normal;
          font-weight: 300;
          font-size: 13px;
          line-height: 16px;
          color: #565759;
          margin-bottom: 12px;
        }
      `}</style>
    </>
  );
}

export default UpcomingCard;
