import React from "react";
import Bed from "../icons/Bed";
import Calendar from "../icons/Calendar";
import styles from "./room-summary.module.css";

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
    <div className={styles.roomContainer}>
      <div className={styles.dateWrapper} onClick={onDateClick}>
        <Calendar />
        <div className={styles.roomTextWrapper}>
          <p className={styles.roomTitle}>
            {monthFormatter.format(checkInDate) +
              " " +
              checkIn?.split(" ")[0] +
              " - " +
              monthFormatter.format(checkOutDate) +
              " " +
              checkOut?.split(" ")[0]}
          </p>
          <p className={styles.roomSubTitle}>
            {duration + " "}
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
