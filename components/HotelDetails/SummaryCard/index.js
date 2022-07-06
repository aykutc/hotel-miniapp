import React from "react";
import styles from "./card.module.css";
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
  return (
    <div className={styles.container} {...props}>
      <div className={styles.hotel}>
        <p className={styles.hotelName}>{hotelName}</p>
        <p className={styles.confirmCode}>Confirmation {confirmCode}</p>
      </div>
      <div className={styles.dates}>
        <div className={styles.checkIn}>
          <p className={styles.date}>{checkIn?.date}</p>
          <div>
            <p className={styles.abbreviationDay}>{checkIn?.day}</p>
            <p className={styles.abbreviationMonth}>{checkIn?.month}</p>
          </div>
        </div>
        <div className={styles.totalDay}>
          <p className={styles.total}>{totalDay} Nights</p>
        </div>
        <div className={styles.checkIn}>
          <p className={styles.date}>{checkOut?.date}</p>
          <div>
            <p className={styles.abbreviationDay}>{checkOut?.day}</p>
            <p className={styles.abbreviationMonth}>{checkOut?.month}</p>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.infoContainer}>
        <div className={styles.infoBox} onClick={messageOnClick}>
          <Message />
          <p className={styles.infoText}>Message</p>
        </div>
        <div className={styles.infoBox} onClick={checkInOnClick}>
          <CheckIn />
          <p className={styles.infoText}>Check-In</p>
        </div>
        <div className={styles.infoBox} onClick={digitalKeyOnCkick}>
          <DigitalKey />
          <p className={styles.infoText}>Digital Key</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
