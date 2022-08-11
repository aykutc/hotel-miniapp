import React from "react";
import Message from "../../icons/Message";
import CheckIn from "../../icons/CheckIn";
import DigitalKey from "../../icons/DigitalKey";
/*
checkIn:{
  date:24,
  day:FRI,
  month:JUN
}
checkOut:{
  date:27,
  day:MON,
  month:JUN
}
*/
const SummaryCard = ({
  hotelName,
  confirmCode,
  checkIn,
  totalDay,
  checkOut,
  messageOnClick,
  checkInOnClick,
  digitalKeyOnCkick,
  ...props
}) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });
  const dayFormatter = new Intl.DateTimeFormat("en", { weekday: "short" });

  return (
    <>
      <div className={"container"} {...props}>
        <div className={"hotel"}>
          <p className={"hotelName"}>{hotelName}</p>
          <p className={"confirmCode"}>Confirmation {confirmCode}</p>
        </div>
        <div className={"dates"}>
          <div className={"checkIn"}>
            <p className={"date"}>{checkInDate.getDate()}</p>
            <div>
              <p className={"abbreviationDay"}>
                {dayFormatter.format(checkInDate)}
              </p>
              <p className={"abbreviationMonth"}>
                {monthFormatter.format(checkInDate)}
              </p>
            </div>
          </div>
          <div className={"totalDay"}>
            <p className={"total"}>{totalDay} Nights</p>
          </div>
          <div className={"checkIn"}>
            <p className={"date"}>{checkOutDate.getDate()}</p>
            <div>
              <p className={"abbreviationDay"}>
                {dayFormatter.format(checkOutDate)}
              </p>
              <p className={"abbreviationMonth"}>
                {monthFormatter.format(checkOutDate)}
              </p>
            </div>
          </div>
        </div>
        <div className={"line"}></div>
        <div className={"infoContainer"}>
          <div className={"infoBox"} onClick={messageOnClick}>
            <Message />
            <p className={"infoText"}>Message</p>
          </div>
          <div className={"infoBox"} onClick={checkInOnClick}>
            <CheckIn />
            <p className={"infoText"}>Check-In</p>
          </div>
          <div className={"infoBox"} onClick={digitalKeyOnCkick}>
            <DigitalKey />
            <p className={"infoText"} style={{ color: "#8E8F90" }}>
              Digital Key
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 238px;
          border-radius: 4px;
          background-color: #fff;
          padding-left: 14px;
          padding-right: 14px;
          padding-top: 16px;
          padding-bottom: 16px;
          border: 1px solid #e8e9e9;
        }

        .hotel {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hotelName {
          margin: 0px;
          padding: 0px;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 23px;
          text-align: center;
          letter-spacing: 0.01em;
          color: #1d1f22;
        }

        .confirmCode {
          margin: 0px;
          padding: 0px;
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: 18px;
          text-align: center;
          color: #565759;
        }

        .dates {
          padding-top: 16px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-left: 9px;
          padding-right: 9px;
          text-transform: uppercase;
        }

        .checkIn {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
        }

        .date {
          margin: 0px;
          padding: 0px;
          font-style: normal;
          font-weight: 600;
          font-size: 32px;
          line-height: 40px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1d1f22;
        }

        .abbreviationDay {
          margin: 0px;
          padding: 0px;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
          color: #1d1f22;
        }

        .abbreviationMonth {
          margin: 0px;
          padding: 0px;
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;
          color: #565759;
          text-transform: uppercase;
        }

        .totalDay {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 4px 12px;
          background: #f3efe5;
          border-radius: 100px;
          text-transform: uppercase;
        }

        .total {
          margin: 0px;
          padding: 0px;
          font-style: normal;
          font-weight: 300;
          font-size: 13px;
          line-height: 16px;
          text-align: center;
          color: #1d1f22;
        }

        .line {
          margin-top: 8px;
          margin-bottom: 8px;
          border: 1px solid #e8e9e9;
        }

        .infoContainer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-left: 28px;
          padding-right: 28px;
          gap: 24px;
        }

        .infoBox {
          display: flex;
          flex-direction: column;
          height: 65px;
          width: 65px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          text-wrap: no-wrap;
        }

        .infoText {
          margin: 0px;
          padding: 0px;
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;
          text-align: center;

          /* Primary / NEOM Dark */

          color: #1d1f22;
        }
      `}</style>
    </>
  );
};

export default SummaryCard;
