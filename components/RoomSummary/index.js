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
}) {
  const subTitle = () => {
    let str = "";
    console.log("first,", kids);
    if (adults == 1) {
      str += adults.toString() + "Adult";
    } else if (adults > 1) {
      str += adults.toString() + "Adults";
    }
    if (kids == 1) {
      console.log("aaa");

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
          <p className={styles.roomTitle}>{booking.calander.date}</p>
          <p className={styles.roomSubTitle}>{booking.calander.time} Nights</p>
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
