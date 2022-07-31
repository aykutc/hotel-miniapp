import React from "react";
import Plus from "../../icons/Plus";
import Minus from "../../icons/Minus";

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
    <>
      <div className={"guestContainer"}>
        <div className={"guestText"}>{guest}</div>
        <div className={"incDecSvgContainer"}>
          <button
            className={"decreaseButton"}
            onClick={() => guestNumberHandler("decrease")}
            disabled={item[guest.toLowerCase()] === 0 || item.adults === 0}
            style={{ opacity: item[guest.toLowerCase()] === 0 ? ".1" : "1" }}
          >
            <Minus className={"decreaseCircle"} />
          </button>
          <div className={"adultsNumber"}>{item[guest.toLowerCase()]}</div>
          <button
            className={"increaseButton"}
            onClick={() => guestNumberHandler("increase")}
            disabled={guest === "Kids" && item.adults === 0}
            style={{
              opacity:
                guest === "Kids" &&
                item.adults === 0 &&
                item[guest.toLowerCase()] === 0
                  ? ".1"
                  : "1",
            }}
          >
            <Plus className={"increaseCircle"} />
          </button>
        </div>
      </div>
      <style jsx>{`
        .guestContainer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px;
        }
        .incDecSvgContainer {
          display: flex;
          position: relative;
          width: 123px;
          height: 38px;
          justify-content: center;
          align-items: center;
        }

        .guestText,
        .adultsNumber {
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.01em;
          color: #1d1f22;
        }

        .increaseButton,
        .decreaseButton {
          border: none;
          outline: none;
          background-color: #fff;
          width: 38px;
          height: 38px;
          position: absolute;
          padding: 0;
          left: 0;
        }
        .increaseButton {
          left: auto;
          right: 0px;
        }
        .decreaseCircle,
        .increaseCircle {
          width: 38px;
          height: 38px;
        }
      `}</style>
    </>
  );
};

export default GuestContainer;
