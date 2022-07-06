import HeaderTitle from "@/components/HeaderTitle";
import styles from "@/styles/Home.module.css";
import newStyles from "../../components/RecommendedCard/Recommended.module.css";
import RecommendedCard from "@/components/RecommendedCard";
import { RoomSelectionArray } from "data/data";
import Back from "@/components/icons/Back";
import { useState } from "react";

const RoomSelect = ({ accomodationInfo = "Jun24 - Jun 27 (3 Nights)", roomAmount = 1 }) => {
    const [selectedRoom, setSelectedRoom] = useState([]);
    console.log(selectedRoom);
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
                                setSelectedRoom={setSelectedRoom}
                                roomAmount={roomAmount}
                                selectedRoom={selectedRoom}
                                item={item}
                                roomSelect
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
            </div >
            {selectedRoom.length === roomAmount &&
                <div style={{
                    position: "absolute", bottom: 0, left: 0,
                    width: "100%", height: "108px",
                    zIndex: "999",
                    border: "1px solid red",
                    padding: "16px 24px 40px",
                }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column"
                        }}>

                        <div className={newStyles.priceArea}>
                            <p className={newStyles.discountedPrice}>
                                {selectedRoom[0].price}
                                <span>/night</span>
                            </p>

                        </div>
                        <p className={newStyles.recommendDescription} style={{ marginTop: "4px", marginBottom: 0 }} >
                            {accomodationInfo}</p>
                    </div>
                </div>}
        </div >
    );
};

export default RoomSelect;