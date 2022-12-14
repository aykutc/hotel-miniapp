import BottomSheet from "@/components/BottomSheet";
import Calendar from "@/components/Calendar";
import F7Navbar from "@/components/F7Navbar";

import FloatingBottomButton from "@/components/FloatingBottomButton";
import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
import Back from "@/components/icons/Back";
import Location from "@/components/icons/Location";
import RoomBottomSheet from "@/components/RoomBottomSheet";
import RoomSummary from "@/components/RoomSummary";
import SearchBottomSheet from "@/components/SearchBottomSheet";
import { useRouterPush } from "@/utils/hooks";
import {
  getDateSelection,
  getRegion,
  getRoomSelection,
  saveDateSelection,
  saveRoomSelection,
} from "data/api";
import { Page } from "framework7-react";

import Router from "next/router";
import React, { useState } from "react";

export async function getStaticProps() {
  return {
    props: {},
  };
}
function CheckDetail({ f7router }) {
  const push = useRouterPush();
  const [checkState, setCheckState] = useState({});
  const [addBottomSheet, setaddBottomSheet] = useState(false);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [dateSelection, setDateSelection] = useState({});

  React.useEffect(() => {
    setTimeout(() => {
      Router.prefetch("/results");
    }, 300);
  }, []);

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
    <Page>
      <div className={"checkDetailContainer"}>
        <F7Navbar>
          <Header>
            <Back
              style={{ marginRight: 32 }}
              onClick={() => {
                f7router.back();
              }}
            ></Back>

            <HeaderTitle>DETAILS</HeaderTitle>
          </Header>
        </F7Navbar>
        <div
          className={"regionContainer"}
          onClick={() => {
            setaddBottomSheet(true);
            setTimeout(() => {
              setIsRegionModalOpen(true);
            }, 10);
          }}
        >
          <Location />
          <p className={"regionText"}>{checkState.region}</p>
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
            push("/results", f7router);
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
          contentStyle={{ overflow: "hidden", marginTop: -17 }}
        >
          <div
            style={{
              padding: "0px 24px",
            }}
          >
            <Calendar setSelection={setDateSelection} />
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
                      ? "CHECK-IN"
                      : "CHECK-OUT"
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
      <style jsx>{`
        .header {
          height: 58px;
          display: flex;
          align-items: center;
        }

        .checkDetailContainer {
          padding: 0px 24px 24px 24px;
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: hidden;
        }

        .regionContainer {
          background: #ffffff;
          padding: 14px;
          border: 1px solid #e8e9e9;
          border-radius: 4px;
          display: flex;
          flex-direction: row;
          margin-bottom: 12px;
        }

        .regionText {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          margin-left: 14px;
          color: #1d1f22;
          gap: 8px;
        }

        .search {
          display: flex;
          width: 100%;
          margin-bottom: 16px;
        }
      `}</style>
    </Page>
  );
}

export default CheckDetail;
