import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
import Arrow from "@/components/icons/Arrow";
import Filter from "@/components/icons/Filter";
import Location from "@/components/icons/Location";
import Map from "@/components/Map";
import RecommendedCard from "@/components/RecommendedCard";
import Tabs from "@/components/Tabs";
import { RecommendedArray } from "data/data";
import React, { useState } from "react";
import styles from "./results.module.css";

// LIST VIEW ---- MAP VIEW
function Results() {
  const [selectedTab, setSelectedTab] = useState("LIST VIEW");
  return (
    <div className={styles.resultsContainer}>
      <Header>
        <Arrow style={{ marginRight: 24 }} rotate="left"></Arrow>
        <HeaderTitle>DETAILS</HeaderTitle>
      </Header>
      <div className={styles.selectedFiltersContainer}>
        <div className={styles.filterItem}>
          <Location />
          <p className={styles.filterText}>Trojena</p>
        </div>
        <div className={styles.filterItem}>
          <Location />
          <p className={styles.filterText}>Trojena</p>
        </div>
        <div className={styles.filterItem}>
          <Location />
          <p className={styles.filterText}>Troasdasdasdajena</p>
        </div>
        <div className={styles.filterItem}>
          <Location />
          <p className={styles.filterText}>Troasdasdasdajena</p>
        </div>
        <div className={styles.filterItem}>
          <Location />
          <p className={styles.filterText}>Troasdasdasdajena</p>
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
        <Filter />
      </div>
    </div>
  );
}

export default Results;
