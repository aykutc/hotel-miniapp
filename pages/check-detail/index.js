import BottomSheet from "@/components/BottomSheet";
import Callendar from "@/components/Calendar";
import FloatingBottomButton from "@/components/FloatingBottomButton";
import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
import SearchContent from "@/components/HomeComponents/SearchContent";
import Arrow from "@/components/icons/Arrow";
import Back from "@/components/icons/Back";
import Location from "@/components/icons/Location";
import RoomBottomSheet from "@/components/RoomBottomSheet";
import RoomsGuests from "@/components/RoomsGuests";
import RoomSummary from "@/components/RoomSummary";
import SearchBar from "@/components/SearchBar";
import SearchBottomSheet from "@/components/SearchBottomSheet";
import {
  getDateSelection,
  getRegion,
  getRoomSelection,
  saveDateSelection,
  saveRoomSelection,
} from "data/api";

import Router from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./check-detail.module.css";

export async function getStaticProps() {
  return {
    props: {},
  };
}
function CheckDetail() {
  const [checkState, setCheckState] = useState({});

  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateSelection, setDateSelection] = useState({});
  /*   const [roomSelection, setRoomSelection] = useState({
    rooms: 1,
    adults: 1,
    kids: 0,
  }); */

  /*   useEffect(() => {
    setRoomSelection({
      rooms,
      adults,
      kids,
    });
    setDateSelection({
      "CHECK-IN": {
        time: checkIn?.split(" ")[1] + " " + checkIn?.split(" ")[2],
        day: Number(checkIn?.split(" ")[0]),
      },
      "CHECK-OUT": {
        time: checkOut?.split(" ")[1] + " " + checkOut?.split(" ")[2],
        day: Number(checkOut?.split(" ")[0]),
      },
      durationAmount: 2,
    });
  }, [router.query]); */

  const booking = {
    calander: {
      date: "Jun 24 - Jun 27",
      time: "3",
    },
  };

  React.useEffect(() => {
    const region = getRegion();
    const dateSelection = getDateSelection();
    const roomSelection = getRoomSelection();

    setCheckState({
      region,
      ...dateSelection,
      ...roomSelection,
    });
  }, [isDateModalOpen, isRegionModalOpen, isRoomModalOpen]);

  return (
    <>
      <div className={styles.checkDetailContainer}>
        <Header>
          <Arrow
            style={{ marginRight: 24 }}
            onClick={() => {
              Router.back();
            }}
            rotate="left"
          ></Arrow>
          <HeaderTitle>DETAILS</HeaderTitle>
        </Header>
        <div
          className={styles.regionContainer}
          onClick={() => {
            setIsRegionModalOpen(true);
          }}
        >
          <Location />
          <p className={styles.regionText}>{checkState.region}</p>
        </div>
        <RoomSummary
          checkIn={checkState.checkIn}
          checkOut={checkState.checkOut}
          booking={booking}
          rooms={checkState.rooms}
          kids={checkState.kids}
          adults={checkState.adults}
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
            });
          }}
        >
          SEE RESULTS
        </FloatingBottomButton>
      </div>
      <BottomSheet
        className={"bottom-sheet-2"}
        title="DATES"
        isOpen={isDateModalOpen}
        onDismiss={() => setIsDateModalOpen(false)}
        onClose={() => setIsDateModalOpen(false)}
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
              saveDateSelection({
                checkIn:
                  dateSelection["CHECK-IN"].day +
                  " " +
                  dateSelection["CHECK-IN"].time,
                checkOut:
                  dateSelection["CHECK-OUT"].day +
                  " " +
                  dateSelection["CHECK-OUT"].time,
              });
              setIsDateModalOpen(false);
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
        onClose={() => setIsRoomModalOpen(false)}
      >
        <RoomBottomSheet
          onClick={(rooms) => {
            setIsRoomModalOpen(false);

            saveRoomSelection({
              rooms: rooms.count,
              kids: rooms.kids,
              adults: rooms.adults,
            });
            /*  Router.push(
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
            ); */
          }}
          setIsRoomModalOpen={setIsDateModalOpen}
        ></RoomBottomSheet>
      </BottomSheet>
      <BottomSheet
        className={"bottom-sheet-3"}
        title="REGION"
        isOpen={isRegionModalOpen}
        onDismiss={() => setIsRegionModalOpen(false)}
        onClose={() => setIsRegionModalOpen(false)}
      >
        <SearchBottomSheet
          close={() => {
            setIsRegionModalOpen(false);
          }}
        />
      </BottomSheet>
    </>
  );
}

export default CheckDetail;
