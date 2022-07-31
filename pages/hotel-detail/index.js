import HeaderTitle from "@/components/HeaderTitle";
import React, { useState } from "react";
import FloatingBottomButton from "@/components/FloatingBottomButton";
import Back from "@/components/icons/Back";
import OptimizedImage from "@/components/OptimizedImage";

import Like from "@/components/icons/Like";
import Share from "@/components/icons/Share";
import Star from "@/components/icons/Star";
import RecommendedCard from "@/components/RecommendedCard";
import { RecommendedArray } from "data/data";
import Dining from "@/components/icons/Dining";
import Fitness from "@/components/icons/Fitness";
import Spa from "@/components/icons/Spa";
import Parking from "@/components/icons/Parking";
import Accessibility from "@/components/icons/Accessibility";
import SummaryCard from "@/components/HotelDetails/SummaryCard";
import Router from "next/router";
import RoomSummary from "@/components/RoomSummary";
import BottomSheet from "@/components/BottomSheet";
import RoomBottomSheet from "@/components/RoomBottomSheet";
import {
  getDateSelection,
  getFavorites,
  getHotel,
  getRegion,
  getRoomSelection,
  saveDateSelection,
  saveFavorites,
  saveRoomSelection,
} from "data/api";
import Calendar from "@/components/Calendar";
import { formattedDate } from "../../utils";
import { Page } from "framework7-react";
import { useRouterBack, useRouterPush } from "@/utils/hooks";

export async function getStaticProps() {
  return {
    props: {},
  };
}
function HotelDetail({ f7router }) {
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [dateSelection, setDateSelection] = useState(null);

  const amenities = [
    { icon: <Dining />, name: "Dining" },
    { icon: <Fitness />, name: "Fitness" },
    { icon: <Spa />, name: "Spa" },
    { icon: <Parking />, name: "Parking & Transit" },
    { icon: <Accessibility />, name: "Accessibility" },
  ];
  const [hotelDetail, setHotelDetail] = React.useState({});
  /*   React.useEffect(() => {
    // Prefetch the dashboard page
    setTimeout(() => {
      Router.prefetch("/room-select");
    }, 300);
  }, []); */
  React.useEffect(() => {
    const region = getRegion();
    let _dateSelection = getDateSelection();

    if (_dateSelection === null) {
      const date = new Date();
      date.setDate(date.getDate() + 1);
      _dateSelection = {
        checkIn: formattedDate(date),
        checkOut: formattedDate(date.setDate(date.getDate() + 1)),
        duration: 1,
      };
      saveDateSelection(_dateSelection);
      setDateSelection(_dateSelection);
    }
    const hotel = getHotel();

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

    setHotelDetail({
      ...hotelDetail,
      region: region ? region : "Trojena",
      ..._dateSelection,
      ...roomSelection,
      ...hotel,
    });
  }, [isDateModalOpen, isRoomModalOpen]);

  React.useEffect(() => {
    const favList = getFavorites();
    if (favList) {
      setFavorites(favList);
    }
  }, []);
  React.useEffect(() => {
    if (dateSelection && dateSelection.durationAmount) {
      const obj = {
        duration: dateSelection.durationAmount,
        checkIn: dateSelection.checkIn
          ? dateSelection.checkIn
          : dateSelection["CHECK-IN"].day +
            " " +
            dateSelection["CHECK-IN"].time,
        checkOut: dateSelection.checkOut
          ? dateSelection.checkOut
          : dateSelection["CHECK-OUT"].day +
            " " +
            dateSelection["CHECK-OUT"].time,
      };
      setDateSelection(obj);
      saveDateSelection(obj);
      setHotelDetail({ ...hotelDetail, ...obj });
    }
  }, [isDateModalOpen]);

  const isFavorite = favorites?.some((_item) => _item.id === hotelDetail.id);
  const push = useRouterPush();
  const back = useRouterBack();
  return (
    <Page>
      <div className={"container"}>
        <div className={"headerContainer"}>
          <div
            className={"circle"}
            onClick={() => {
              /*  console.log("called");
              Router.back(); */
              back(f7router);
            }}
          >
            <Back
              disableClick
              fill="white"
              style={{ paddingRight: 0 }}
              color="white"
            />
          </div>
          <div className={"headerRightSide"}>
            <div
              className={"circle"}
              onClick={() => {
                if (!isFavorite) {
                  saveFavorites([hotelDetail, ...favorites]);
                } else {
                  const newList = favorites.filter((i) => {
                    return i.id !== hotelDetail.id;
                  });
                  saveFavorites(newList);
                }
                const favList = getFavorites();
                if (favList) {
                  setFavorites(favList);
                }
              }}
            >
              <Like fill={isFavorite ? "white" : "transparent"} />
            </div>
          </div>
        </div>
        <div>
          {hotelDetail.imgRect && (
            <OptimizedImage
              style={{
                height: "294px",
                minWidth: "100%",
                zIndex: -100,
              }}
              loading="eager"
              src={hotelDetail.imgRect}
              type="jpg"
            />
          )}

          <div
            className={"detailContainer"}
            style={{
              transform: hotelDetail.confirmCode
                ? "translateY(-82px)"
                : "translateY(0)",
            }}
          >
            {!!hotelDetail.confirmCode ? (
              <SummaryCard
                style={{
                  /* marginTop: "-82px", */

                  marginBottom: "24px",
                  zIndex: 100,
                }}
                digitalKeyOnCkick={() => {}}
                messageOnClick={() => {}}
                checkInOnClick={() => {}}
                hotelName={hotelDetail.title}
                confirmCode={hotelDetail.confirmCode}
                totalDay={hotelDetail.duration}
                checkIn={hotelDetail.checkIn}
                checkOut={hotelDetail.checkOut}
              />
            ) : (
              <>
                {/* Detail Start  */}
                <div className={"tag"}>
                  <p className={"hotelName"}>{hotelDetail.region}</p>
                </div>
                <div className={"textArea"}>
                  <p className={"title"}>{hotelDetail.title}</p>
                  <p className={"description"}>{hotelDetail.block}</p>
                </div>
                <div className={"ratingArea"}>
                  <Star />
                  <p className={"rate"}>{hotelDetail.rate}</p>
                  <span className={"divider"} />
                  <p className={"reviews"}>{hotelDetail.reviews} reviews</p>
                </div>

                {/* Detail End  */}

                {/* Room Start  */}
                <div style={{ marginBottom: "24px", marginTop: "24px" }}>
                  <RoomSummary
                    checkIn={hotelDetail.checkIn}
                    checkOut={hotelDetail.checkOut}
                    duration={hotelDetail.duration}
                    rooms={hotelDetail.rooms}
                    kids={hotelDetail.kids}
                    adults={hotelDetail.adults}
                    onDateClick={() => {
                      setIsDateModalOpen(true);
                    }}
                    onRoomClick={() => {
                      setIsRoomModalOpen(true);
                    }}
                  />
                </div>
                {/* Room Start  */}
              </>
            )}

            {/* Map Detail Start  */}
            <div className={"mapDetailContainer"}>
              <OptimizedImage src={"map.jpg"} type="jpg" />
              <div className={"mapDetail"}>
                <p className={"locationText"}>
                  {hotelDetail.region} {hotelDetail.location}
                </p>
                <p className={"phoneText"}>{hotelDetail.phone}</p>
              </div>
            </div>
            {/* Map Detail End  */}

            {/* About Start  */}
            <div className={"aboutContainer"}>
              <div className={"title"}>About</div>
              <p
                className={"aboutText"}
                style={{
                  display: readMore ? "block" : "-webkit-box",
                }}
              >
                TROJENA will redefine mountain tourism for the world by creating
                a place based on the principles of ecotourism, highlighting our
                efforts to preserve nature and enhance the ....
              </p>
              <span
                className={"readMore"}
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "Read Less" : "Read More"}
              </span>
              <div className={"horizontalDivider"}></div>
            </div>
            {/* About End  */}

            {/* Amenities Start  */}
            <div className={"amentiensContainer"}>
              <div className={"title"}>Amenities</div>
              {amenities.map((amenity, index) => {
                return (
                  <>
                    <div className={"amenity"} key={amenity.name + index}>
                      <div>{amenity.icon}</div>
                      <div className={"amenityText"}>{amenity.name}</div>
                    </div>
                    <div className={"horizontalDivider"} />
                  </>
                );
              })}
            </div>
            {/* Amenities End  */}

            {/* Recommend Start  */}
            {!hotelDetail.confirmCode && (
              <>
                <div className={"title"}>You May Also Like</div>

                <div className={"recommendedContainer"}>
                  {RecommendedArray.map((item) => {
                    return (
                      <RecommendedCard
                        key={item.title}
                        hotel={item}
                        imageStyles={{
                          width: "100%",
                          height: 118,
                          display: "block",
                        }}
                      ></RecommendedCard>
                    );
                  })}
                </div>
              </>
            )}

            {/* Recommend End  */}
          </div>
        </div>
        {!hotelDetail.confirmCode && (
          <FloatingBottomButton
            onClick={() => {
              push("/room-select", f7router);
            }}
          >
            SEE AVAILABLE ROOMS
          </FloatingBottomButton>
        )}
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
                /* saveDateSelection({
                checkIn:
                  dateSelection["CHECK-IN"].day +
                  " " +
                  dateSelection["CHECK-IN"].time,
                checkOut:
                  dateSelection["CHECK-OUT"].day +
                  " " +
                  dateSelection["CHECK-OUT"].time,
              }); */
                setIsDateModalOpen(false);
              }}
            >
              {dateSelection
                ? dateSelection?.durationAmount
                  ? `CONTINUE - ${dateSelection?.durationAmount} NIGHTS`
                  : `SELECT ${
                      dateSelection["CHECK-IN"] === undefined
                        ? "CHECK IN"
                        : "CHECK OUT"
                    } DATE`
                : ""}
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
      </div>
      <style jsx>{`
        .container {
          /*  padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px; */
          /*   position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden; */
          position: relative;
        }

        .headerContainer {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 10;
          display: flex;
          padding: 18px 116px 23px 24px;
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        .headerRightSide {
          display: flex;
          gap: 12px;
        }

        .circle {
          background: rgba(0, 0, 0, 0.1);
          border: 0.5px solid rgba(255, 255, 255, 0.4);
          width: 36px;
          height: 36px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .detailContainer {
          padding: 24px;
        }

        .tag {
          width: min-content;
          background: #f3efe5;
          border-radius: 4px;

          padding: 1px 6px;
          margin-bottom: 12px;
        }

        .hotelName {
          margin: 0px;
          font-family: "Outfit";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;

          letter-spacing: 1px;
          text-transform: uppercase;

          color: #1d1f22;
        }

        .textArea {
          display: flex;
          flex-direction: column;
        }

        .title {
          margin: 0px;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22.68px;
          letter-spacing: 0.01em;

          color: #1d1f22;

          text-align: start;
        }

        .description {
          margin: 0;

          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: 16px;

          color: #565759;

          text-align: start;
          margin-bottom: 12px;
        }

        .ratingArea {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
        }

        .rate {
          margin: 0;

          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;

          letter-spacing: 0.01em;

          color: #1d1f22;
        }

        .reviews {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;

          color: #565759;
        }

        .divider {
          width: 8px;
          height: 0px;

          border: 1px solid #e8e9e9;
          transform: rotate(90deg);
        }

        .horizontalDivider {
          width: 100%;
          height: 0px;
          left: 24px;
          top: 1047px;

          /* Grayscale/Gray 40% */

          border: 1px solid #e8e9e966;

          margin: 14px 0px;
        }

        /* Recommend Start */
        .recommendedContainer {
          display: flex;
          flex-direction: row;
          overflow-x: scroll;
          -ms-overflow-style: none;
          /* IE and Edge */
          scrollbar-width: none;
          /* Firefox */
          margin-right: -24px;
          padding-right: 48px;
          margin-bottom: 100px;
        }

        .title {
          font-weight: 500;
          font-size: 18px;
          line-height: 23px;
          color: var(--primary-neom-dark);
          margin-bottom: 8px;
        }

        /* Recommend End */

        /* Amenities Start */

        .amentiensContainer {
          margin-bottom: 40px;
        }

        .amenity {
          display: flex;
          flex-direction: row;
        }

        .amenityText {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          margin-left: 8px;
          color: #1d1f22;
        }

        /* Amenities End */

        /* About Start */
        .aboutContainer {
          margin-bottom: 40px;
        }

        .aboutText {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #565759;
          margin-bottom: 8px;

          /* makes content 3 line clamp*/
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .readMore {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;

          text-decoration-line: underline;

          color: #8e8f90;
        }

        /* About End */

        /* Map Detail End */
        .mapDetailContainer {
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mapDetail {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .locationText {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;

          color: #1d1f22;
        }

        .phoneText {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
          text-decoration-line: underline;

          color: #8e8f90;
        }

        /* Map Detail End */

        /* Room End */

        .roomContainer {
          background: #ffffff;

          border: 1px solid #e8e9e9;
          border-radius: 4px;
          padding: 14px;
          margin: 24px 0px;

          display: flex;
          flex-direction: row;
          gap: 14px;
        }

        .roomContainerDivider {
          width: 1px;
          background-color: #e8e9e9;
        }

        .roomWrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 14px;
          flex: 0.4;
        }

        .dateWrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 14px;
          flex: 0.6;
        }

        .roomTextWrapper {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .roomTitle {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;

          color: #1d1f22;
        }

        .roomSubTitle {
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;

          color: #8e8f90;
        }

        /* Room End */
      `}</style>
    </Page>
  );
}

export default HotelDetail;
