import React, { useState } from "react";
import RoomsGuests from "../RoomsGuests";
import FloatingBottomButton from "../FloatingBottomButton";

function RoomBottomSheet({ onClick }) {
  const [roomSelection, setRoomSelection] = useState([
    { roomNo: 1, adults: 1, kids: 0 },
  ]);
  return (
    <>
      <RoomsGuests rooms={roomSelection} setRooms={setRoomSelection} />
      <FloatingBottomButton
        style={{ position: "absolute" }}
        disabled={roomSelection?.some((item) => item.adults === 0)}
        onClick={async () => {
          onClick({
            adults: roomSelection.reduce((x, y) => x + y.adults, 0) || 0,
            kids: roomSelection.reduce((x, y) => x + y.kids, 0) || 0,
            count: roomSelection.length,
          });
        }}
      >
        APPLY
      </FloatingBottomButton>
    </>
  );
}

export default RoomBottomSheet;
