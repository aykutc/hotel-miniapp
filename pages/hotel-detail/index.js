import HeaderTitle from "@/components/HeaderTitle";
import React, { useState } from "react";
import FloatingBottomButton from "@/components/FloatingBottomButton";
import Back from "@/components/icons/Back";
import OptimizedImage from "@/components/OptimizedImage";
import styles from "./hotel-detail.module.css";

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
import Router, { useRouter } from "next/router";
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

export async function getStaticProps() {
  return {
    props: {},
  };
}
function HotelDetail(props) {
  const router = useRouter();
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const [dateSelection, setDateSelection] = useState({});

  const amenities = [
    { icon: <Dining />, name: "Dining" },
    { icon: <Fitness />, name: "Fitness" },
    { icon: <Spa />, name: "Spa" },
    { icon: <Parking />, name: "Parking & Transit" },
    { icon: <Accessibility />, name: "Accessibility" },
  ];
  const [hotelDetail, setHotelDetail] = React.useState({});

  React.useEffect(() => {
    const region = getRegion();
    const dateSelection = getDateSelection();

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
      region,
      ...dateSelection,
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

  const isFavorite = favorites?.some((_item) => _item.id === hotelDetail.id);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.circle}>
          <Back fill="white" style={{ paddingRight: 0 }} color="white" />
        </div>
        <div className={styles.headerRightSide}>
          <div
            className={styles.circle}
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
          <div className={styles.circle}>
            <Share />
          </div>
        </div>
      </div>
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
        className={styles.detailContainer}
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
            totalDay={"3"}
            checkIn={{
              date: 24,
              day: "FRI",
              month: "JUN",
            }}
            checkOut={{
              date: 27,
              day: "MON",
              month: "JUN",
            }}
          />
        ) : (
          <>
            {/* Detail Start  */}
            <div className={styles.tag}>
              <p className={styles.hotelName}>{hotelDetail.region}</p>
            </div>
            <div className={styles.textArea}>
              <p className={styles.title}>{hotelDetail.title}</p>
              <p className={styles.description}>{hotelDetail.block}</p>
            </div>
            <div className={styles.ratingArea}>
              <Star />
              <p className={styles.rate}>{hotelDetail.rate}</p>
              <span className={styles.divider} />
              <p className={styles.reviews}>{hotelDetail.reviews} reviews</p>
            </div>

            {/* Detail End  */}

            {/* Room Start  */}
            <div style={{ marginBottom: "24px", marginTop: "24px" }}>
              <RoomSummary
                checkIn={hotelDetail.checkIn}
                checkOut={hotelDetail.checkOut}
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
        <div className={styles.mapDetailContainer}>
          <OptimizedImage src={"map.jpg"} type="jpg" />
          <div className={styles.mapDetail}>
            <p className={styles.locationText}>
              {hotelDetail.region} {hotelDetail.location}
            </p>
            <p className={styles.phoneText}>{hotelDetail.phone}</p>
          </div>
        </div>
        {/* Map Detail End  */}

        {/* About Start  */}
        <div className={styles.aboutContainer}>
          <div className={styles.title}>About</div>
          <p className={styles.aboutText}>
            TROJENA will redefine mountain tourism for the world by creating a
            place based on the principles of ecotourism, highlighting our
            efforts to preserve nature and enhance the ....
          </p>
          <span className={styles.readMore}>Read More</span>
          <div className={styles.horizontalDivider}></div>
        </div>
        {/* About End  */}

        {/* Amenities Start  */}
        <div className={styles.amentiensContainer}>
          <div className={styles.title}>Amenities</div>
          {amenities.map((amenity, index) => {
            return (
              <>
                <div className={styles.amenity} key={amenity.name + index}>
                  <div>{amenity.icon}</div>
                  <div className={styles.amenityText}>{amenity.name}</div>
                </div>
                <div className={styles.horizontalDivider} />
              </>
            );
          })}
        </div>
        {/* Amenities End  */}

        {/* Recommend Start  */}
        {!hotelDetail.confirmCode && (
          <>
            <div className={styles.title}>You May Also Like</div>

            <div className={styles.recommendedContainer}>
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
      {!hotelDetail.confirmCode && (
        <FloatingBottomButton
          onClick={() => {
            Router.push("/room-select");
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
    </div>
  );
}

export default HotelDetail;
