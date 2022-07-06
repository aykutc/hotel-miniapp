import React from "react";
import Bed from "../icons/Bed";
import Calendar from "../icons/Calendar";
import styles from "./room-summary.module.css";

function RoomSummary({ booking, onDateClick, onRoomClick }) {
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
          <p className={styles.roomTitle}>{booking.room.count} Room</p>
          <p className={styles.roomSubTitle}>{booking.room.adult} Adult</p>
        </div>
      </div>
    </div>
  );
}

export default RoomSummary;
