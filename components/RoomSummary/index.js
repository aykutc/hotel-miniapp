import React from "react";
import Bed from "../icons/Bed";
import Calendar from "../icons/Calendar";
import styles from "./room-summary.module.css";

function RoomSummary({
  booking,
  onDateClick,
  onRoomClick,
  kids = 0,
  adults = 1,
  rooms = 1,
  checkIn = "24 JUN 22",
  checkOut = "27 JUN 22",
}) {
  const subTitle = () => {
    let str = "";
    if (adults == 1) {
      str += adults.toString() + "Adult";
    } else if (adults > 1) {
      str += adults.toString() + "Adults";
    }
    if (kids == 1) {
      str += ", " + kids.toString() + "Kid";
    } else if (kids > 1) {
      str += ", " + kids.toString() + "Kids";
    }
    return str;
  };
  return (
    <div className={styles.roomContainer}>
      <div className={styles.dateWrapper} onClick={onDateClick}>
        <Calendar />
        <div className={styles.roomTextWrapper}>
          <p className={styles.roomTitle}>
            {checkIn?.split(" ")[1] +
              " " +
              checkIn?.split(" ")[0] +
              " - " +
              checkOut?.split(" ")[1] +
              " " +
              checkOut?.split(" ")[0]}
          </p>
          <p className={styles.roomSubTitle}>
            {Number(checkOut?.split(" ")[0]) - Number(checkIn?.split(" ")[0])}{" "}
            Nights
          </p>
        </div>
      </div>
      <div className={styles.roomContainerDivider} />
      <div className={styles.roomWrapper} onClick={onRoomClick}>
        <Bed />
        <div className={styles.roomTextWrapper}>
          <p className={styles.roomTitle}>
            {rooms} {rooms.length <= 1 ? "Rooms" : "Room"}
          </p>
          <p className={styles.roomSubTitle}>{subTitle()}</p>
        </div>
      </div>
    </div>
  );
}

export default RoomSummary;
