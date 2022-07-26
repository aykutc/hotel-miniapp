import React from "react";
import Bed from "../icons/Bed";
import Calendar from "../icons/Calendar";

function RoomSummary({
  onDateClick,
  onRoomClick,
  kids = 0,
  adults = 1,
  rooms = 1,
  duration,
  checkIn = "24 JUN 22",
  checkOut = "27 JUN 22",
}) {
  const subTitle = () => {
    let str = "";
    if (adults == 1) {
      str += adults.toString() + " Adult";
    } else if (adults > 1) {
      str += adults.toString() + " Adults";
    }
    if (kids == 1) {
      str += ", " + kids.toString() + " Kid";
    } else if (kids > 1) {
      str += ", " + kids.toString() + " Kids";
    }
    return str;
  };

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });

  return (
    <>
      <div className={"roomContainer"}>
        <div className={"dateWrapper"} onClick={onDateClick}>
          <Calendar />
          <div className={"roomTextWrapper"}>
            <p className={"roomTitle"}>
              {monthFormatter.format(checkInDate) +
                " " +
                checkIn?.split(" ")[0] +
                " - " +
                monthFormatter.format(checkOutDate) +
                " " +
                checkOut?.split(" ")[0]}
            </p>
            <p className={"roomSubTitle"}>
              {duration + " "}
              Nights
            </p>
          </div>
        </div>
        <div className={"roomContainerDivider"} />
        <div className={"roomWrapper"} onClick={onRoomClick}>
          <Bed />
          <div className={"roomTextWrapper"}>
            <p className={"roomTitle"}>
              {rooms} {rooms.length <= 1 ? "Rooms" : "Room"}
            </p>
            <p className={"roomSubTitle"}>{subTitle()}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Room Start */

        .roomContainer {
          background: #ffffff;

          border: 1px solid #e8e9e9;
          border-radius: 4px;
          padding: 14px;

          display: flex;
          flex-direction: row;
        }

        .roomContainerDivider {
          width: 1px;
          background-color: #e8e9e9;
          margin-right: 12px;
          margin-left: 4px;
        }

        .roomWrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0px 4px;
          flex: 0.4;
        }

        .dateWrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 14px;
          flex: 0.6;
        }

        .roomTextWrapper {
          display: flex;
          flex-direction: column;
          margin-left: 12px;
        }

        .roomTitle {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;

          color: #1d1f22;
        }

        .roomSubTitle {
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;

          color: #8e8f90;
        }

        /* Room End */
      `}</style>
    </>
  );
}

export default RoomSummary;
