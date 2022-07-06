import BottomSheet from "@/components/BottomSheet";
import FloatingBottomButton from "@/components/FloatingBottomButton";
import HeaderTitle from "@/components/HeaderTitle";
import Location from "@/components/icons/Location";
import RoomsGuests from "@/components/RoomsGuests";
import RoomSummary from "@/components/RoomSummary";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./check-detail.module.css";

function CheckDetail() {
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const router = useRouter();
  const { checkIn, checkOut } = router.query;
  const booking = {
    calander: {
      date: "Jun 24 - Jun 27",
      time: "3",
    },
    room: {
      count: 1,
      adult: 1,
      child: 0,
    },
  };
  return (
    <div className={styles.checkDetailContainer}>
      <BottomSheet
        className={"bottom-sheet-1"}
        title="ROOMS & GUESTS"
        isOpen={isRoomModalOpen}
        onDismiss={() => setIsRoomModalOpen(false)}
      >
        <RoomsGuests />
      </BottomSheet>
      <BottomSheet
        className={"bottom-sheet-2"}
        title="DATES"
        isOpen={isDateModalOpen}
        onDismiss={() => setIsDateModalOpen(false)}
      >
        <div>sas</div>{" "}
      </BottomSheet>

      <div className={styles.header}>
        <HeaderTitle>DETAILS</HeaderTitle>
      </div>
      <div className={styles.regionContainer}>
        <Location />
        <p className={styles.regionText}>{router.query.title}</p>
      </div>
      <RoomSummary
        booking={booking}
        onDateClick={() => {
          setIsDateModalOpen(true);
        }}
        onRoomClick={() => {
          setIsRoomModalOpen(true);
        }}
      />
      <FloatingBottomButton
        onClick={() => {
          Router.push({
            pathname: "/results",
            query: {
              checkIn,
              checkOut,
            },
          });
        }}
      >
        SEE RESULTS
      </FloatingBottomButton>
    </div>
  );
}

export default CheckDetail;
