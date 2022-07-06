import BottomSheet from "@/components/BottomSheet";
import FilterBottomSheet from "@/components/FilterBottomSheet";
import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
import Arrow from "@/components/icons/Arrow";
import Filter from "@/components/icons/Filter";
import Location from "@/components/icons/Location";
import Map from "@/components/Map";
import RecommendedCard from "@/components/RecommendedCard";
import Tabs from "@/components/Tabs";
import { RecommendedArray } from "data/data";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./results.module.css";

// LIST VIEW ---- MAP VIEW
function Results() {
  const [selectedTab, setSelectedTab] = useState("LIST VIEW");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const router = useRouter();
  const { checkIn, checkOut, title, rooms, kids, adults } = router.query;
  return (
    <div className={styles.resultsContainer}>
      <BottomSheet
        className={"bottom-sheet-filter"}
        title="REGION"
        isOpen={isFilterModalOpen}
        onDismiss={() => setIsFilterModalOpen(false)}
        leftComponent={<p className={styles.resetButton}>Reset</p>}
      >
        <FilterBottomSheet />
      </BottomSheet>

      <Header>
        <Arrow
          style={{ marginRight: 24 }}
          onClick={() => {
            Router.back();
          }}
          rotate="left"
        ></Arrow>
        <HeaderTitle>RESULTS</HeaderTitle>
      </Header>
      <div className={styles.selectedFiltersContainer}>
        <div className={styles.filterItem}>
          <Location />
          <p className={styles.filterText}>{title}</p>
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
      {selectedTab === "LIST VIEW" ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
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
                  imageStyles={{ height: 120, width: "100%", display: "block" }}
                  style={{
                    width: "100%",
                    minWidth: "100%",
                  }}
                ></RecommendedCard>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ width: "100vw", transform: "translateX(-24px)" }}>
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
  );
}

export default Results;
