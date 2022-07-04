import ExploreCard from "@/components/HomeComponents/ExploreCard";
import HeaderTitle from "@/components/HeaderTitle";
import RecommendedCard from "@/components/RecommendedCard";
import styles from "@/styles/Home.module.css";
import Router from "next/router";

function Explore({ exploreArray, recommendedArray, user }) {
  return (
    <>
      <div className={styles.header}>
        <HeaderTitle>
          <div style={{ marginRight: 6 }}>HI</div>
          {user ? (
            user.name + ","
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="shine"
                style={{ width: 100, height: 16, marginLeft: 4 }}
              ></div>
            </div>
          )}
        </HeaderTitle>
      </div>
      <div style={{ height: 24 }}></div>
      <div className={styles.title}>Explore by NEOM Region,</div>
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
              logoWebp={item.logoWebp}
              onClick={() => {
                Router.push("/date-selection");
              }}
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
