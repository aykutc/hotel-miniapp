import ExploreCard from "@/components/ExploreCard";
import HeaderTitle from "@/components/HeaderTitle";
import RecommendedCard from "@/components/RecommendedCard";
import React from "react";
import styles from "@/styles/Home.module.css";

function Explore({ exploreArray, recommendedArray }) {
  return (
    <>
      <div className={styles.header}>
        <HeaderTitle>HI EMILY,</HeaderTitle>
      </div>
      <div style={{ height: 24 }}></div>
      <div className={styles.title}>Explore by NEOM Region</div>
      <div className={styles.exploreContainer}>
        {exploreArray.map((item, index) => {
          return (
            <ExploreCard
              key={item.title}
              index={index}
              title={item.title}
              description={item.description}
              img={item.img}
              imgWebp={item.imgWebp}
              logo={item.logo}
            ></ExploreCard>
          );
        })}
      </div>
      <div style={{ height: 24 }}></div>
      <div className={styles.title}>Recommended For You</div>
      <div className={styles.recommendedContainer}>
        {recommendedArray.map((item) => {
          return (
            <RecommendedCard
              key={item.title}
              title={item.title}
              subTitle={item.subTitle}
              block={item.block}
              img={item.img}
              imgWebp={item.imgWebp}
              price={item.price}
              discountPrice={item.discountPrice}
              imageStyles={{ width: "100%", height: 118, display: "block" }}
            ></RecommendedCard>
          );
        })}
      </div>
    </>
  );
}

export default Explore;
