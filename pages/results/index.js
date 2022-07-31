import BottomSheet from "@/components/BottomSheet";
import FilterBottomSheet from "@/components/FilterBottomSheet";
import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";

import dynamic from "next/dynamic";
/*  import Map from "@/components/Map";
 */
import { Suspense } from "react";
const Map = dynamic(() => import("@/components/Map"), {});
import Back from "@/components/icons/Back";
import Filter from "@/components/icons/Filter";
import Location from "@/components/icons/Location";
import RecommendedCard from "@/components/RecommendedCard";
import Tabs from "@/components/Tabs";
import {
  getDateSelection,
  getFavorites,
  getFilter,
  getRegion,
  getResultTab,
  getRoomSelection,
  saveDateSelection,
  saveFavorites,
  saveFilter,
  saveResultTab,
  saveRoomSelection,
} from "data/api";
import { HotelsArray } from "data/data";

import React, { useState } from "react";
import RoomBottomSheet from "@/components/RoomBottomSheet";
import SearchBottomSheet from "@/components/SearchBottomSheet";
import Calendar from "@/components/Calendar";
import FloatingBottomButton from "@/components/FloatingBottomButton";
import { Page } from "framework7-react";
import { useRouterPush } from "@/utils/hooks";
export async function getStaticProps() {
  return {
    props: { HotelsArray: HotelsArray },
  };
}

function safeParseFloat(val) {
  return parseFloat(isNaN(val) ? val.replace(/[^\d\.]+/g, "") : val);
}

// LIST VIEW ---- MAP VIEW
function Results({ f7router }) {
  const push = useRouterPush();
  const [favorites, setFavorites] = useState([]);
  const [selectedTab, setSelectedTab] = useState("LIST VIEW");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [dateSelection, setDateSelection] = useState({});

  const [resetFilter, setResetFilter] = useState(false);
  const [filters, setFilters] = useState({});

  const [checkState, setCheckState] = useState({});
  const { rooms, checkIn, checkOut, kids, adults, region } = checkState;

  React.useEffect(() => {
    const region = getRegion();
    const dateSelection = getDateSelection();
    const roomSelection = getRoomSelection();

    setCheckState({
      region,
      ...dateSelection,
      ...roomSelection,
    });
  }, [isDateModalOpen, isRegionModalOpen, isRoomModalOpen, isFilterModalOpen]);

  React.useEffect(() => {
    const favList = getFavorites();
    if (favList) {
      setFavorites(favList);
    }
  }, []);
  React.useEffect(() => {
    const resultTab = getResultTab();
    if (resultTab) {
      setSelectedTab(resultTab);
    }
  }, []);
  React.useEffect(() => {
    const _filters = getFilter();
    if (_filters) {
      setFilters(_filters);
    }
  }, [isFilterModalOpen]);

  let filteredArray = HotelsArray.filter((item) => {
    let filtered = true;
    if (filters.distance) {
      if (item.distance > filters.distance) {
        filtered = false;
      }
    }
    const itemPrice = safeParseFloat(item.price);
    if (filters.priceRange && filtered) {
      if (
        itemPrice > filters.priceRange[0] &&
        itemPrice < filters.priceRange[1]
      ) {
        filtered = true;
      } else {
        filtered = false;
      }
    }
    return filtered;
  });

  if (filters.sortBy) {
    if (filters.sortBy === "Distance") {
      filteredArray = filteredArray.sort((a, b) => a.distance - b.distance);
    }
    if (filters.sortBy === "Rating") {
      filteredArray = filteredArray.sort((a, b) => a.rate - b.rate);
    }
    if (filters.sortBy === "Price Range") {
      filteredArray = filteredArray.sort(
        (a, b) => safeParseFloat(a.price) - safeParseFloat(b.price)
      );
    }
  } else {
    filteredArray = filteredArray.sort((a, b) => a.distance - b.distance);
  }
  return (
    <Page>
      <div className={"resultsContainer"}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 24px",
            flexShrink: 0,
          }}
        >
          <Header>
            <Back style={{ marginRight: 32 }}></Back>

            <HeaderTitle>RESULTS</HeaderTitle>
          </Header>
          <div className={"selectedFiltersContainer"}>
            <div
              className={"filterItem"}
              onClick={() => {
                setIsRegionModalOpen(true);
              }}
            >
              <Location />
              <p className={"filterText"}>{region}</p>
            </div>
            <div
              className={"filterItem"}
              onClick={() => {
                setIsDateModalOpen(true);
              }}
            >
              <Location />
              <p className={"filterText"}>
                {checkIn?.split(" ")[1] +
                  " " +
                  checkIn?.split(" ")[0] +
                  " - " +
                  checkOut?.split(" ")[1] +
                  " " +
                  checkOut?.split(" ")[0]}
              </p>
            </div>
            <div
              className={"filterItem"}
              onClick={() => {
                setIsRoomModalOpen(true);
              }}
            >
              <Location />
              <p className={"filterText"}>
                {rooms == 1 ? rooms + " Room" : rooms + " Rooms"}{" "}
                {Number(kids) + Number(adults) == 1
                  ? Number(kids) + Number(adults) + " Guest"
                  : Number(kids) + Number(adults) > 1
                  ? Number(kids) + Number(adults) + " Guests"
                  : ""}
              </p>
            </div>
          </div>
        </div>
        {selectedTab === "LIST VIEW" ? (
          <div
            style={{ overflow: "scroll", flex: "1 1 auto", padding: "0 24px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "scroll",
              }}
            >
              {filteredArray.map((item) => {
                const isFavorite = favorites.some(
                  (_item) => _item.id === item.id
                );
                return (
                  <div style={{ marginBottom: 16 }} key={item.id}>
                    <RecommendedCard
                      f7router={f7router}
                      subTitle={region}
                      favoriteOnClick={() => {
                        if (!isFavorite) {
                          saveFavorites([item, ...favorites]);
                          setFavorites([item, ...favorites]);
                        } else {
                          const newList = favorites.filter((i) => {
                            return i.id !== item.id;
                          });
                          saveFavorites(newList);
                          setFavorites(newList);
                        }
                      }}
                      isFavorite={isFavorite}
                      showFavorite
                      hotel={item}
                      imageStyles={{
                        height: 120,
                        width: "100%",
                        display: "block",
                      }}
                      style={{
                        width: "100%",
                        minWidth: "100%",
                      }}
                    ></RecommendedCard>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div
            style={{
              overflow: "scroll",
              flex: "1 1 auto",
            }}
          >
            <Suspense
              fallback={<div style={{ width: "100%", height: "100%" }}></div>}
            >
              <Map />
            </Suspense>
          </div>
        )}
        <div style={{ height: 120 }}></div>
        <div className={"bottomContainer"}>
          <Tabs
            data={["LIST VIEW", "MAP VIEW"]}
            selected={selectedTab}
            setSelected={(item) => {
              setSelectedTab(item);
              saveResultTab(item);
            }}
          />
          <Filter
            style={{ marginLeft: 4 }}
            onClick={() => {
              setIsFilterModalOpen(true);
            }}
          />
        </div>
      </div>
      <BottomSheet
        className={"bottom-sheet-filter"}
        title="Filter"
        isOpen={isFilterModalOpen}
        onDismiss={() => setIsFilterModalOpen(false)}
        onClose={() => setIsFilterModalOpen(false)}
        leftComponent={
          <p
            className={"resetButton"}
            onClick={() => {
              setResetFilter(true);
              saveFilter({
                distance: 100,
                priceRange: [100, 2000],
                sortBy: "Distance",
              });
            }}
          >
            Reset
          </p>
        }
      >
        <FilterBottomSheet
          onClose={() => setIsFilterModalOpen(false)}
          reset={resetFilter}
        />
      </BottomSheet>
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

      <style jsx>{`
        .resultsContainer {
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: hidden;
        }

        .bottomContainer {
          padding: 14px 24px 20px 24px;
          position: fixed;
          width: 100%;
          bottom: 0;
          left: 0;
          display: flex;

          flex-direction: row;

          background: #ffffff;
          box-shadow: inset 0px 1px 0px #e8e9e9;
        }

        .selectedFiltersContainer {
          padding-right: 24px;
          width: 100vw;
          display: flex;
          flex-direction: row;
          margin-bottom: 24px;
          height: 46px;
          align-items: center;
          overflow-x: scroll;
          flex-shrink: 0;
        }

        .filterItem {
          display: flex;
          margin: 0px 4px;
          padding: 6px 12px;
          background: #ffffff;

          border: 1px solid #e8e9e9;
          border-radius: 100px;
          width: auto;
          flex: none;
        }

        .filterText {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #8e8f90;
        }

        .resetButton {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          text-align: right;
          color: #8e8f90;
        }
      `}</style>
    </Page>
  );
}

export default Results;
