import React, { useState } from "react";
import RoomsGuests from "../RoomsGuests";
import FloatingBottomButton from "../FloatingBottomButton";
import { Router } from "next/router";

function RoomBottomSheet({ onClick }) {
  const [roomSelection, setRoomSelection] = useState([
    { roomNo: 1, adults: 1, kids: 0 },
  ]);
  return (
    <div style={{ overflow: "scroll", height: "calc(100vh - 160px)" }}>
      <div style={{ paddingBottom: "120px" }}>
        <RoomsGuests rooms={roomSelection} setRooms={setRoomSelection} />
      </div>
      <FloatingBottomButton
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
    </div>
  );
}

export default RoomBottomSheet;
