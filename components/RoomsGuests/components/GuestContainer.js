import React from "react";
import styles from "./GuestContainer.module.css";
import Plus from "../icons/Plus";
import Minus from "../icons/Minus";

const GuestContainer = ({ item, setRoomContainer, roomContainer, guest }) => {
    const guestNumberHandler = (operation) => {
        operation === "decrease"
            ? (roomContainer.find((e) => e.roomNo === item.roomNo)[
                guest.toLowerCase()
            ] -= 1)
            : (roomContainer.find((e) => e.roomNo === item.roomNo)[
                guest.toLowerCase()
            ] += 1);
        item.adults === 0 &&
            roomContainer.map((e) =>
                e.roomNo === item.roomNo ? (e.kids = 0) : null
            );
        setRoomContainer([...roomContainer]);
    };
    return (
        <div className={styles.guestContainer}>
            <div className={styles.guestText}>{guest}</div>
            <div className={styles.incDecSvgContainer}>
                <button
                    className={styles.decreaseButton}
                    onClick={() => guestNumberHandler("decrease")}
                    disabled={item[guest.toLowerCase()] === 0 || item.adults === 0}
                    style={{ opacity: item[guest.toLowerCase()] === 0 ? ".1" : "1" }}
                >
                    <Minus className={styles.decreaseCircle} />
                </button>
                <div className={styles.adultsNumber}>{item[guest.toLowerCase()]}</div>
                <button
                    className={styles.increaseButton}
                    onClick={() => guestNumberHandler("increase")}
                    disabled={guest === "Kids" && item.adults === 0}
                    style={{
                        opacity:
                            guest === "Kids" && item.adults === 0 && item[guest.toLowerCase()] === 0 ? ".1" : "1",
                    }}
                >
                    <Plus className={styles.increaseCircle} />
                </button>
            </div>
        </div>
    );
};

export default GuestContainer;
