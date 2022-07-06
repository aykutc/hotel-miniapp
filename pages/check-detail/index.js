import BottomSheet from "@/components/BottomSheet";
import Callendar from "@/components/Calendar";
import FloatingBottomButton from "@/components/FloatingBottomButton";
import HeaderTitle from "@/components/HeaderTitle";
import SearchContent from "@/components/HomeComponents/SearchContent";
import Back from "@/components/icons/Back";
import Location from "@/components/icons/Location";
import RoomBottomSheet from "@/components/RoomBottomSheet";
import RoomsGuests from "@/components/RoomsGuests";
import RoomSummary from "@/components/RoomSummary";
import SearchBar from "@/components/SearchBar";
import SearchBottomSheet from "@/components/SearchBottomSheet";
import { SearchRegionArray } from "data/data";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./check-detail.module.css";

function CheckDetail() {
  const router = useRouter();

  const { checkIn, checkOut, title, rooms, adults, kids } = router.query;

  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateSelection, setDateSelection] = useState({});
  const [roomSelection, setRoomSelection] = useState({
    rooms: rooms | 1,
    adults: adults | 1,
    kids: kids | 0,
  });
  useEffect(() => {
    setRoomSelection({
      rooms,
      adults,
      kids,
    });
  }, [router.query]);
  console.log("roomSelection", roomSelection);
  console.log("1111", rooms);
  const booking = {
    calander: {
      date: "Jun 24 - Jun 27",
      time: "3",
    },
  };
  return (
    <>
      <BottomSheet
        className={"bottom-sheet-2"}
        title="DATES"
        isOpen={isDateModalOpen}
        onDismiss={() => setIsDateModalOpen(false)}
      >
        <div
          style={{
            padding: "0px 24px",
            height: "calc(100vh - 170px)",
          }}
        >
          <Callendar setSelection={setDateSelection} />
          <FloatingBottomButton
            onClick={async () => {
              setIsDateModalOpen(false);
              setDateSelection({});
              Router.push(
                {
                  pathname: "/check-detail",
                  query: {
                    checkIn:
                      dateSelection["CHECK-IN"].day +
                      " " +
                      dateSelection["CHECK-IN"].time,
                    checkOut:
                      dateSelection["CHECK-OUT"].day +
                      " " +
                      dateSelection["CHECK-OUT"].time,
                    title,
                    rooms: roomSelection.count,
                    kids: roomSelection.kids,
                    adults: roomSelection.adults,
                  },
                },
                undefined,
                { shallow: true }
              );
            }}
          >
            {dateSelection.durationAmount
              ? `CONTINUE - ${dateSelection.durationAmount} NIGHTS`
              : `SELECT ${
                  dateSelection["CHECK-IN"] === undefined
                    ? "CHECK IN"
                    : "CHECK OUT"
                } DATE`}
          </FloatingBottomButton>
        </div>
      </BottomSheet>
      <BottomSheet
        className={"bottom-sheet-1"}
        title="ROOMS & GUESTS"
        isOpen={isRoomModalOpen}
        onDismiss={() => setIsRoomModalOpen(false)}
      >
        <RoomBottomSheet
          onClick={(rooms) => {
            setIsRoomModalOpen(false);
            setRoomSelection({
              rooms: rooms.count,
              kids: rooms.kids,
              adults: rooms.adults,
            });
            Router.push(
              {
                pathname: "/check-detail",
                query: {
                  checkIn,
                  checkOut,
                  title,
                  rooms: rooms.count,
                  kids: rooms.kids,
                  adults: rooms.adults,
                },
              },
              undefined,
              { shallow: true }
            );
          }}
          setIsRoomModalOpen={setIsDateModalOpen}
        ></RoomBottomSheet>
      </BottomSheet>
      <BottomSheet
        className={"bottom-sheet-3"}
        title="REGION"
        isOpen={isRegionModalOpen}
        onDismiss={() => setIsRegionModalOpen(false)}
      >
        <SearchBottomSheet />
      </BottomSheet>

      <div className={styles.checkDetailContainer}>
        <div className={styles.header}>
          <HeaderTitle>DETAILS</HeaderTitle>
        </div>
        <div
          className={styles.regionContainer}
          onClick={() => {
            setIsRegionModalOpen(true);
          }}
        >
          <Location />
          <p className={styles.regionText}>{router.query.title}</p>
        </div>
        <RoomSummary
          booking={booking}
          rooms={roomSelection.rooms}
          kids={roomSelection.kids}
          adults={roomSelection.adults}
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
                title,
                rooms: roomSelection.rooms,
                kids: roomSelection.kids,
                adults: roomSelection.adults,
              },
            });
          }}
        >
          SEE RESULTS
        </FloatingBottomButton>
      </div>
    </>
  );
}

export default CheckDetail;
