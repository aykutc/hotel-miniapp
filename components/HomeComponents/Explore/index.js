import ExploreCard from "@/components/HomeComponents/ExploreCard";

import RecommendedCard from "@/components/RecommendedCard";
import { useRouter } from "next/router";
import { saveRegion } from "data/api";
import { useRouterPush } from "@/utils/hooks";

function Explore({ exploreArray, recommendedArray, user }) {
  /* const router = useRouter(); */
  const push = useRouterPush();

  return (
    <>
      <div>
        <div style={{ height: 24 }}></div>
        <div className={"title"}>Explore by NEOM Region,</div>
        <div className={"exploreContainer"}>
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
                  /* window.location.assign("/date-selection"); */
                  /*  window.history.pushState(
                    { urlPath: "/date-selection" },
                    "",
                    "/date-selection"
                  ); */
                  saveRegion(item.title);
                  push("/date-selection");
                  /*   router.push({
                    pathname: "/date-selection",
                  }); */
                }}
              ></ExploreCard>
            );
          })}
        </div>
        <div style={{ height: 24 }}></div>
        <div className={"title"}>Recommended For You</div>
        <div className={"recommendedContainer"}>
          {recommendedArray.map((item) => {
            return (
              <RecommendedCard
                key={item.title}
                hotel={item}
                imageStyles={{ width: "100%", height: 118, display: "block" }}
              ></RecommendedCard>
            );
          })}
        </div>
        <div style={{ height: 80 }}></div>
      </div>
      <style jsx>{`
        .title {
          font-weight: 500;
          font-size: 18px;
          line-height: 23px;
          color: var(--primary-neom-dark);
          margin-bottom: 8px;
        }

        .exploreContainer {
          display: flex;
          flex-direction: row;
          overflow-x: scroll;
          padding: 12px 0px;
          -ms-overflow-style: none;

          /* IE and Edge */
          scrollbar-width: none;
          /* Firefox */
        }
        .recommendedContainer {
          display: flex;
          flex-direction: row;
          overflow-x: scroll;
          padding: 12px 0px;
          -ms-overflow-style: none;
          /* IE and Edge */
          scrollbar-width: none;
          /* Firefox */
        }

        .exploreContainer::-webkit-scrollbar {
          display: none;
        }

        .recommendedContainer::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}

export default Explore;
