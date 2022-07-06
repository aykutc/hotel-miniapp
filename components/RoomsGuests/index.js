import React, { useState } from "react";
import GuestContainer from "./components/GuestContainer";
import styles from "./RoomsGuests.module.css";
import Add from "../icons/Add";

const RoomsGuests = () => {
    const [roomContainer, setRoomContainer] = useState([
        { roomNo: 1, adults: 0, kids: 0 },
    ]);
    // console.log(roomContainer);
    const roomRemover = (index) => {
        roomContainer.splice(index, 1);
        console.log(roomContainer);
        let roomNumber = 1;
        roomContainer.map(e => {
            e.roomNo = roomNumber;
            roomNumber++;
        });
        setRoomContainer([...roomContainer]);
    };
    return (
        <div className={styles.roomsGuests}>
            {roomContainer.map((item, index) => (
                <React.Fragment key={index}>
                    <div className={styles.roomContainer}>
                        <div className={styles.roomNo}>Room {item.roomNo}</div>
                        {item.roomNo > 1 && (
                            <button className={styles.removeButton} onClick={() => roomRemover(index)}>
                                Remove
                            </button>
                        )}
                        <div className={styles.guestsInfoContainer}>
                            {item.adults > 0 ? `${item.adults} Adult${item.adults > 1 ? "s" : ""}` : ""}
                            {item.kids > 0 ? `, ${item.kids} Kid${item.kids > 1 ? "s" : ""}` : ""}
                        </div>
                    </div>
                    <div className={styles.adultsKidsContainer}>
                        <GuestContainer
                            item={item}
                            setRoomContainer={setRoomContainer}
                            guest={"Adults"}
                            roomContainer={roomContainer}
                        />
                        <hr className={styles.lineBreak} />
                        <GuestContainer
                            item={item}
                            setRoomContainer={setRoomContainer}
                            guest={"Kids"}
                            roomContainer={roomContainer}
                        />
                    </div>
                </React.Fragment>
            ))}
            <button
                className={styles.addRoom}
                onClick={() =>
                    setRoomContainer([
                        ...roomContainer,
                        { roomNo: roomContainer[roomContainer.length - 1].roomNo + 1, adults: 0, kids: 0 },
                    ])
                }
            >
                <Add className={styles.squareSvgImage} />
                <span className={styles.addRoomSpan}>Add Room</span>
            </button>
        </div>
    );
};

export default RoomsGuests;
