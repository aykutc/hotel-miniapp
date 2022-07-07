import { useState } from "react";
import HeaderTitle from "@/components/HeaderTitle";
import RecommendedCard from "@/components/RecommendedCard";
import Back from "@/components/icons/Back";
import styles from "@/styles/Home.module.css";
import newStyles from "../../components/RecommendedCard/Recommended.module.css";
import { RoomSelectionArray } from "data/data";

const RoomSelect = ({
  accomodationInfo = "Jun24 - Jun 27 (3 Nights)",
  roomAmount = 2,
}) => {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const updateSelectedRooms = (id) => {
    const isInclude = selectedRooms.find((item) => item.id === id);
    if (isInclude || selectedRooms.length < roomAmount) {
      const index = RoomSelectionArray.findIndex((item) => item.id === id);
      const selectedRoom = RoomSelectionArray[index];
      RoomSelectionArray.splice(index, 1, {
        ...selectedRoom,
        selected: !selectedRoom.selected,
      });
      setSelectedRooms(RoomSelectionArray.filter((e) => e.selected === true));
    }
  };

  return (
    <div style={{ marginLeft: 24 }}>
      <div className={styles.header}>
        <Back style={{ marginRight: 32 }}></Back>
        <HeaderTitle>Rooms</HeaderTitle>
      </div>
      <div style={{ height: 16 }}></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {RoomSelectionArray.map((item) => {
          return (
            <div
              style={{ paddingRight: 24, marginBottom: 16 }}
              key={item.title}
            >
              <RecommendedCard
                roomSelect
                updateSelectedRooms={updateSelectedRooms}
                item={item}
                title={item.title}
                info={item.info}
                img={item.img}
                price={item.price}
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
            onClick={() => console.log(selectedRooms)}
          >
            BOOK
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomSelect;
