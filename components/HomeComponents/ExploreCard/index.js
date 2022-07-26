import React from "react";
import OptimizedImage from "../../OptimizedImage";

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
    <>
      <div className={"cardWrapper"} {...props}>
        <div className={"bgImage"}>
          <OptimizedImage
            loading={index < 2 ? "eager" : "lazy"}
            src={img}
            fileWebp={imgWebp}
            type="jpg"
          ></OptimizedImage>
        </div>
        <div className={"regionIcon"}>
          <OptimizedImage
            src={logo}
            style={{ height: "100%", width: "100%" }}
          ></OptimizedImage>
        </div>
        <div className={"textArea"}>
          <p className={"title"}>{title}</p>
          <p className={"description"}>{description}</p>
        </div>
      </div>
      <style jsx>{`
        .cardWrapper {
          position: relative;
          width: 200px;
          height: 208px;
          border: 1px solid #1d1f2212;
          border-radius: 4px;
          display: flex;
          box-sizing: border-box;
          background-repeat: no-repeat;
          margin-right: 10px;
          transition: box-shadow 1s;
        }

        .cardWrapper:active {
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        }

        .cardWrapper:focus {
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        }

        .regionIcon {
          position: absolute;
          z-index: 999999;
          width: 48px !important;
          height: 48px !important;

          left: 14px;
          top: 14px;
        }
        .bgImage {
          position: absolute;
          z-index: -10;
          border-radius: 4px;
          width: 100%;
          height: 100%;
          left: 0px;
          top: 0px;
        }
        .textArea {
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: 200px;
          height: 67px;
          padding: 0px 14px 14px 14px;
          border-radius: 4px;
          background: linear-gradient(
            180deg,
            rgba(29, 31, 34, 0) 0%,
            rgba(29, 31, 34, 0.61092) 45.16%,
            #1d1f22 100%
          );
        }

        .title {
          margin: 0;

          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 4px;
          text-align: start;
        }

        .description {
          margin: 0;

          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: 18px;

          color: #e8e9e9;
          text-align: start;
        }
      `}</style>
    </>
  );
}

export default ExploreCard;
