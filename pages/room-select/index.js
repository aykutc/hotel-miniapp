import { useState, useEffect } from "react";
import HeaderTitle from "@/components/HeaderTitle";
import RecommendedCard from "@/components/RecommendedCard";
import Back from "@/components/icons/Back";
import styles from "@/styles/Home.module.css";
import newStyles from "../../components/RecommendedCard/Recommended.module.css";
import { RoomSelectionArray } from "data/data";
import Router from "next/router";
import { getDateSelection, getHotel, getRoomSelection } from "data/api";
export async function getStaticProps() {
  return {
    props: { RoomSelectionArray: RoomSelectionArray },
  };
}
const RoomSelect = ({ RoomSelectionArray }) => {
  const [rooms, setRooms] = useState(RoomSelectionArray);
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
    const isInclude = selectedRooms.find((item) => item.id === id);
    if (isInclude || selectedRooms.length < roomAmount) {
      const index = rooms.findIndex((item) => item.id === id);
      const selectedRoom = rooms[index];
      rooms.splice(index, 1, {
        ...selectedRoom,
        selected: !selectedRoom.selected,
      });
      setSelectedRooms(rooms.filter((e) => e.selected === true));
    }
  };
  useEffect(() => {
    const dateSelection = getDateSelection();
    const roomSelection = getRoomSelection();
    const hotel = getHotel();

    setSelectedRooms([]);
    setHotelDetail({
      ...hotelDetail,

      ...dateSelection,
      ...roomSelection,
      ...hotel,
    });
  }, []);

  return (
    <div style={{ marginLeft: 24, height: "100vh" }}>
      <div className={styles.header}>
        <Back style={{ marginRight: 32 }}></Back>
        <HeaderTitle>Rooms</HeaderTitle>
      </div>
      <div style={{ height: 16 }}></div>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          paddingBottom: 120,
        }}
      >
        <div
          style={{
            overflow: "scroll",
            width: "100%",
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
      </div>
      {selectedRooms.length > 0 && selectedRooms.length <= roomAmount && (
        <div
          style={{
            position: "absolute",
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
