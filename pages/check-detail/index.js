import BottomSheet from "@/components/BottomSheet";
import Calendar from "@/components/Calendar";

import FloatingBottomButton from "@/components/FloatingBottomButton";
import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
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

  React.useEffect(() => {
    const region = getRegion();
    const dateSelection = getDateSelection();
    let roomSelection = getRoomSelection();
    if (roomSelection === null) {
      saveRoomSelection({
        rooms: 1,
        kids: 0,
        adults: 1,
      });
      roomSelection = {
        rooms: 1,
        kids: 0,
        adults: 1,
      };
    }

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
          <Back style={{ marginRight: 32 }}></Back>

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
        contentStyle={{ overflow: "hidden" }}
      >
        <div
          style={{
            padding: "0px 24px",

            /* height: "calc(100vh - 170px)", */
          }}
        >
          <Calendar setSelection={setDateSelection} />
          <FloatingBottomButton
            style={{ position: "absolute" }}
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
        contentStyle={{ position: "initial" }}
      >
        <RoomBottomSheet
          onClick={(rooms) => {
            setIsRoomModalOpen(false);

            saveRoomSelection({
              rooms: rooms.count,
              kids: rooms.kids,
              adults: rooms.adults,
            });
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
