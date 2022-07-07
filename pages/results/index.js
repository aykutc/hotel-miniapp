import BottomSheet from "@/components/BottomSheet";
import FilterBottomSheet from "@/components/FilterBottomSheet";
import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
import Arrow from "@/components/icons/Arrow";
import Back from "@/components/icons/Back";
import Filter from "@/components/icons/Filter";
import Location from "@/components/icons/Location";
import Map from "@/components/Map";
import RecommendedCard from "@/components/RecommendedCard";
import Tabs from "@/components/Tabs";
import { getDateSelection, getRegion, getRoomSelection } from "data/api";
import { RecommendedArray } from "data/data";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./results.module.css";
export async function getStaticProps() {
  return {
    props: {},
  };
}
// LIST VIEW ---- MAP VIEW
function Results() {
  const [selectedTab, setSelectedTab] = useState("LIST VIEW");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const [checkState, setCheckState] = useState({});
  const { rooms, checkIn, checkOut, kids, adults, region } = checkState;

  const router = useRouter();

  React.useEffect(() => {
    const region = getRegion();
    const dateSelection = getDateSelection();
    const roomSelection = getRoomSelection();

    setCheckState({
      region,
      ...dateSelection,
      ...roomSelection,
    });
  }, []);

  return (
    <>
      <div className={styles.resultsContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 24px",
          }}
        >
          <Header>
            <Back style={{ marginRight: 32 }}></Back>

            <HeaderTitle>RESULTS</HeaderTitle>
          </Header>
          <div className={styles.selectedFiltersContainer}>
            <div className={styles.filterItem}>
              <Location />
              <p className={styles.filterText}>{region}</p>
            </div>
            <div className={styles.filterItem}>
              <Location />
              <p className={styles.filterText}>
                {checkIn?.split(" ")[1] +
                  " " +
                  checkIn?.split(" ")[0] +
                  " - " +
                  checkOut?.split(" ")[1] +
                  " " +
                  checkOut?.split(" ")[0]}
              </p>
            </div>
            <div className={styles.filterItem}>
              <Location />
              <p className={styles.filterText}>
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
              {RecommendedArray.map((item) => {
                return (
                  <div style={{ marginBottom: 16 }} key={item.title}>
                    <RecommendedCard
                      showFavorite
                      key={item.title}
                      title={item.title}
                      subTitle={item.subTitle}
                      block={item.block}
                      img={item.img}
                      price={item.price}
                      discountPrice={item.discountPrice}
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
            <Map />
          </div>
        )}
        <div className={styles.bottomContainer}>
          <Tabs
            data={["LIST VIEW", "MAP VIEW"]}
            selected={selectedTab}
            setSelected={setSelectedTab}
          />
          <Filter
            onClick={() => {
              setIsFilterModalOpen(true);
            }}
          />
        </div>
      </div>
      <BottomSheet
        className={"bottom-sheet-filter"}
        title="REGION"
        isOpen={isFilterModalOpen}
        onDismiss={() => setIsFilterModalOpen(false)}
        onClose={() => setIsFilterModalOpen(false)}
        leftComponent={<p className={styles.resetButton}>Reset</p>}
      >
        <FilterBottomSheet />
      </BottomSheet>
    </>
  );
}

export default Results;
