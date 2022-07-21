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

  const [addBottomSheet, setaddBottomSheet] = useState(false);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);

  const [dateSelection, setDateSelection] = useState({});

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
    setDateSelection(dateSelection);
  }, [isDateModalOpen, isRegionModalOpen, isRoomModalOpen]);

  const removeBottomSheet = (fun) => {
    fun(false);
    setTimeout(() => {
      setaddBottomSheet(false);
    }, 100);
  };

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
            setaddBottomSheet(true);
            setTimeout(() => {
              setIsRegionModalOpen(true);
            }, 10);
          }}
        >
          <Location />
          <p className={styles.regionText}>{checkState.region}</p>
        </div>
        <RoomSummary
          checkIn={checkState.checkIn}
          checkOut={checkState.checkOut}
          duration={checkState.duration}
          rooms={checkState.rooms}
          kids={checkState.kids}
          adults={checkState.adults}
          onDateClick={() => {
            setaddBottomSheet(true);
            setTimeout(() => {
              setIsDateModalOpen(true);
            }, 10);
          }}
          onRoomClick={() => {
            setaddBottomSheet(true);
            setTimeout(() => {
              setIsRoomModalOpen(true);
            }, 10);
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
      {addBottomSheet && (
        <BottomSheet
          key={"bottom-sheet-2"}
          title="DATES"
          isOpen={isDateModalOpen}
          onClose={() => {
            removeBottomSheet(setIsDateModalOpen);
          }}
          contentStyle={{ overflow: "hidden" }}
        >
          <div
            style={{
              padding: "0px 24px",

              /* height: "calc(100vh - 170px)", */
            }}
          >
            <Calendar
              setSelection={setDateSelection}
              datesChoice={{ ...dateSelection }}
            />
            <FloatingBottomButton
              style={{ position: "absolute" }}
              onClick={async () => {
                saveDateSelection({
                  duration: dateSelection.durationAmount,
                  checkIn:
                    dateSelection["CHECK-IN"].day +
                    " " +
                    dateSelection["CHECK-IN"].time,
                  checkOut:
                    dateSelection["CHECK-OUT"].day +
                    " " +
                    dateSelection["CHECK-OUT"].time,
                });
                removeBottomSheet(setIsDateModalOpen);
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
      )}
      {addBottomSheet && (
        <BottomSheet
          key={"bottom-sheet-1"}
          title="ROOMS & GUESTS"
          isOpen={isRoomModalOpen}
          onClose={() => {
            removeBottomSheet(setIsRoomModalOpen);
          }}
          contentStyle={{ position: "initial" }}
        >
          <RoomBottomSheet
            onClick={(rooms) => {
              removeBottomSheet(setIsRoomModalOpen);

              saveRoomSelection({
                rooms: rooms.count,
                kids: rooms.kids,
                adults: rooms.adults,
              });
            }}
          ></RoomBottomSheet>
        </BottomSheet>
      )}
      {addBottomSheet && (
        <BottomSheet
          key={"bottom-sheet-3"}
          title="REGION"
          isOpen={isRegionModalOpen}
          onClose={() => {
            removeBottomSheet(setIsRegionModalOpen);
          }}
        >
          <SearchBottomSheet
            close={() => {
              removeBottomSheet(setIsRegionModalOpen);
            }}
          />
        </BottomSheet>
      )}
    </>
  );
}

export default CheckDetail;
