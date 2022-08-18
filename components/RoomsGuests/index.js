import React, { useEffect, useState } from "react";
import GuestContainer from "./components/GuestContainer";
import Add from "../icons/Add";

const RoomsGuests = ({
  rooms = [{ roomNo: 1, adults: 1, kids: 0 }],
  setRooms,
}) => {
  const [roomContainer, setRoomContainer] = useState(rooms);
  useEffect(() => {
    setRooms(roomContainer);
  }, [roomContainer, setRooms]);
  const roomRemover = (index) => {
    roomContainer.splice(index, 1);
    let roomNumber = 1;
    roomContainer.map((e) => {
      e.roomNo = roomNumber;
      roomNumber++;
    });
    setRoomContainer([...roomContainer]);
  };
  return (
    <>
      <div className={"roomsGuests"}>
        {roomContainer.map((item, index) => (
          <React.Fragment key={index}>
            <div className={"roomContainer"}>
              <div className={"roomNo"}>Room {item.roomNo}</div>
              {item.roomNo > 1 && (
                <button
                  className={"removeButton"}
                  onClick={() => roomRemover(index)}
                >
                  Remove
                </button>
              )}
              <div className={"guestsInfoContainer"}>
                {item.adults > 0
                  ? `${item.adults} Adult${item.adults > 1 ? "s" : ""}`
                  : ""}
                {item.kids > 0
                  ? `, ${item.kids} Kid${item.kids > 1 ? "s" : ""}`
                  : ""}
              </div>
            </div>
            <div className={"adultsKidsContainer"}>
              <GuestContainer
                item={item}
                setRoomContainer={setRoomContainer}
                guest={"Adults"}
                roomContainer={roomContainer}
              />
              <hr className={"lineBreak"} />
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
          className={"addRoom"}
          onClick={() =>
            setRoomContainer([
              ...roomContainer,
              {
                roomNo: roomContainer[roomContainer.length - 1].roomNo + 1,
                adults: 0,
                kids: 0,
              },
            ])
          }
        >
          <Add className={"squareSvgImage"} />
          <span className={"addRoomSpan"}>Add Room</span>
        </button>
      </div>
      <style jsx>{`
        .addRoomSpan {
          margin-left: 8px;
          margin-top: 2px;
        }

        .roomsGuests {
          padding: 0 24px;
          padding-bottom: 120px;
        }

        .roomContainer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          position: relative;
        }

        .roomNo,
        .guestsInfoContainer {
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #1d1f22;
        }

        .adultsKidsContainer {
          border: 1px solid #e8e9e9;
          border-radius: 4px;
          margin-top: 16px;
        }

        .lineBreak {
          margin: 0;
          border: 1px solid #e8e9e9;
          margin: 0 14px;
        }

        .addRoom {
          position: relative;
          border: none;
          outline: none;
          background-color: #fff;
          width: max-content;
          display: flex;
          text-decoration-line: underline;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #8e8f90;
          padding: 0;
          margin-top: 40px;
        }

        .squareSvgImage {
          width: 18px;
          height: 18px;
          margin-right: 12px;
        }

        .removeButton {
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #b89535;
          border: none;
          outline: none;
          background-color: #fff;
          padding: 0;
          width: min-content;
          position: absolute;
          top: calc(50% - 20px / 2);
          left: 69px;
        }
      `}</style>
    </>
  );
};

export default RoomsGuests;
