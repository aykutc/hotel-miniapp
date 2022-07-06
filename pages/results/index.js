import RecommendedCard from "@/components/RecommendedCard";
import { RecommendedArray } from "data/data";
import React from "react";
import styles from "./results.module.css";

function Results() {
  return (
    <div className={styles.resultsContainer}>
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
    </div>
  );
}

export default Results;
