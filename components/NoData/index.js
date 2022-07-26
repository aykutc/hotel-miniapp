import React from "react";

function NoData({ title, subTitle }) {
  return (
    <>
      <div className={"noDataContainer"}>
        <p className={"noDataTitle"}>{title}</p>
        <p className={"noDataSubTitle"}>{subTitle}</p>
      </div>
      <style jsx>{`
        .noDataContainer {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
        }

        .noDataTitle {
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 23px;
          text-align: center;
          color: #1d1f22;
        }

        .noDataSubTitle {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          text-align: center;
          color: #8e8f90;
        }
      `}</style>
    </>
  );
}

export default NoData;
