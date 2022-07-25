import { useState, useEffect } from "react";
import HeaderTitle from "@/components/HeaderTitle";
import RecommendedCard from "@/components/RecommendedCard";
import Back from "@/components/icons/Back";
import newStyles from "../../components/RecommendedCard/Recommended.module.css";
import { RoomSelectionArray } from "data/data";
import Router from "next/router";
import {
  getDateSelection,
  getHotel,
  getRoomSelection,
  saveSelectedRooms,
} from "data/api";
import Header from "@/components/Header";
export async function getStaticProps() {
  return {
    props: { RoomSelectionArray: RoomSelectionArray },
  };
}
const RoomSelect = ({ RoomSelectionArray }) => {
  const [rooms, setRooms] = useState(
    RoomSelectionArray.map((item) => {
      return { ...item, selected: false };
    })
  );
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [hotelDetail, setHotelDetail] = useState({
    checkIn: "",
    checkOut: "",
  });
  const { rooms: roomAmount, checkIn, checkOut } = hotelDetail;
  const accomodationInfo =
    checkIn?.split(" ")[1] +
    " " +
    checkIn?.split(" ")[0] +
    " - " +
    checkOut?.split(" ")[1] +
    " " +
    checkOut?.split(" ")[0];

  const updateSelectedRooms = (id) => {
    const _rooms = rooms.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      } else {
        return { ...item };
      }
    });
    setRooms(_rooms);
    setSelectedRooms(
      _rooms.filter((item) => {
        return item.selected;
      })
    );
    /*  const isInclude = selectedRooms.find((item) => item.id === id);
    if (isInclude || selectedRooms.length < roomAmount) {
      const index = rooms.findIndex((item) => item.id === id);
      const selectedRoom = rooms[index];
      rooms.splice(index, 1, {
        ...selectedRoom,
        selected: !selectedRoom.selected,
      });
      setSelectedRooms(rooms.filter((e) => e.selected === true));
    } */
  };

  useEffect(() => {
    const dateSelection = getDateSelection();
    const roomSelection = getRoomSelection();
    const hotel = getHotel();

    setHotelDetail({
      ...hotelDetail,

      ...dateSelection,
      ...roomSelection,
      ...hotel,
    });
  }, []);
  useEffect(() => {
    // Prefetch the dashboard page
    setTimeout(() => {
      Router.prefetch("/review");
    }, 300);
  }, []);
  return (
    <div
      style={{
        marginLeft: 24,
        display: "flex",
        flex: "1",
        flexDirection: "column",
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        overscrollBehavior: "none",
      }}
    >
      <Header>
        <Back style={{ marginRight: 32 }}></Back>
        <HeaderTitle>Rooms</HeaderTitle>
      </Header>

      <div style={{ height: 16 }}></div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: 120,
          width: "100%",
          overflow: "scroll",
        }}
      >
        {rooms.map((item) => {
          return (
            <div
              style={{ paddingRight: 24, marginBottom: 16 }}
              key={item.title}
            >
              <RecommendedCard
                roomSelect
                updateSelectedRooms={updateSelectedRooms}
                item={item}
                hotel={item}
                imageStyles={{ height: 120, width: "100%", display: "block" }}
                style={{
                  width: "100%",
                  minWidth: "100%",
                }}
              />
            </div>
          );
        })}
      </div>

      {selectedRooms.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "108px",
            zIndex: "999",
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 24px 40px",
            boxShadow: "inset 0px 1px 0px #E8E9E9",
            background: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className={newStyles.priceArea}>
              <p className={newStyles.discountedPrice}>
                $
                {selectedRooms.reduce((total, e) => {
                  return total + +e.price.slice(1);
                }, 0)}
                <span>/night</span>
              </p>
            </div>
            <p
              className={newStyles.recommendDescription}
              style={{
                marginTop: "4px",
                marginBottom: 0,
                fontWeight: 400,
              }}
            >
              {accomodationInfo}
            </p>
          </div>
          <button
            style={{
              backgroundColor: "#1D1F22",
              borderRadius: "104px",
              padding: "16px 56px",
              color: "#fff",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "20px",
            }}
            onClick={() => {
              saveSelectedRooms(selectedRooms);
              Router.push("/review");
            }}
          >
            BOOK
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomSelect;
