import HeaderTitle from "@/components/HeaderTitle";
import styles from "@/styles/Home.module.css";
import newStyles from "../../components/RecommendedCard/Recommended.module.css";
import RecommendedCard from "@/components/RecommendedCard";
import { RoomSelectionArray } from "data/data";
import Back from "@/components/icons/Back";
import { useEffect, useState } from "react";

const RoomSelect = ({ accomodationInfo = "Jun24 - Jun 27 (3 Nights)", roomAmount = 1 }) => {
    const [selectedRooms, setSelectedRooms] = useState([])
    const [myRooms, setmyRooms] = useState([])
    console.log(myRooms)

    useEffect(() => {
        setSelectedRooms(RoomSelectionArray)
    }, [])
    
    const updateSelectedRooms = (id) => {
        const index = RoomSelectionArray.findIndex(item => item.id === id);
        const selectedRoom = RoomSelectionArray[index];
        RoomSelectionArray.splice(index, 1, { ...selectedRoom, selected: !selectedRoom.selected });
        setSelectedRooms(RoomSelectionArray)
        setmyRooms(RoomSelectionArray.filter(e => e.selected === true))
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
                                setSelectedRoom={updateSelectedRooms}
                                selectedRoom={item.selected}
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
            {/* {selectedRoom.length <= roomAmount && selectedRoom.length === 0 && */}
                <div style={{
                    position: "absolute", bottom: 0, left: 0,
                    width: "100%", height: "108px",
                    zIndex: "999",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "16px 24px 40px",
                    boxShadow: "inset 0px 1px 0px #E8E9E9"
                }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }}>

                        <div className={newStyles.priceArea}>
                            <p className={newStyles.discountedPrice}>
                                {/* {selectedRoom[0].price} */}
                                $998.99
                                <span>/night</span>
                            </p>

                        </div>
                        <p className={newStyles.recommendDescription}
                            style={{
                                marginTop: "4px",
                                marginBottom: 0,
                                fontWeight: 400
                            }} >
                            {accomodationInfo}</p>
                    </div>
                    <button style={{
                        backgroundColor: "#1D1F22",
                        borderRadius: "104px",
                        padding: "16px 56px",
                        color: "#fff",
                        fontWeight: 400, fontSize: "16px",
                        lineHeight: "20px"
                    }}
                        onClick={() => console.log(selectedRooms)}
                    >BOOK</button>
                </div>
                {/* } */}
        </div >
    );
};

export default RoomSelect;