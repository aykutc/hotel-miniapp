import HeaderTitle from "@/components/HeaderTitle";
import React from "react";
import styles from "@/styles/Home.module.css";
import RecommendedCard from "@/components/RecommendedCard";

function Favorites({ recommendedArray }) {
  return (
    <>
      <div className={styles.header}>
        <HeaderTitle>Favorites</HeaderTitle>
      </div>
      <div style={{ height: 16 }}></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {recommendedArray.map((item) => {
          return (
            <div
              style={{ paddingRight: 24, marginBottom: 16 }}
              key={item.title}
            >
              <RecommendedCard
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
    </>
  );
}

export default Favorites;
