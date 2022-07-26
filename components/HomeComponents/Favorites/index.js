import HeaderTitle from "@/components/HeaderTitle";

import RecommendedCard from "@/components/RecommendedCard";
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";

import { useState, useEffect } from "react";
import { getFavorites, saveFavorites } from "data/api";
import NoData from "@/components/NoData";

function Favorites() {
  const [favoriteArray, setFavoriteArray] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const favorites = getFavorites();
    if (favorites) {
      setFavoriteArray(favorites);
    }
    setIsloading(false);
  }, []);

  return (
    <>
      <div className={"header"}>
        <HeaderTitle>Favorites</HeaderTitle>
      </div>
      <div style={{ height: 16 }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          paddingBottom: 120,
        }}
      >
        {favoriteArray?.length === 0 && !isLoading && (
          <div
            style={{
              height: "calc(100vh - 200px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NoData
              title={"NO FAVORITE PLACE"}
              subTitle={"Once you favorite a place, it will appear here."}
            ></NoData>
          </div>
        )}
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            {favoriteArray?.map((item) => {
              return (
                <m.div
                  key={item.id}
                  style={{ paddingRight: 24, marginBottom: 16 }}
                  /*     initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }} */
                  initial={{ opacity: 0, y: -100 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{ opacity: 0 }}
                >
                  <RecommendedCard
                    showFavorite
                    isFavorite={true}
                    favoriteOnClick={() => {
                      const newList = favoriteArray.filter((i) => {
                        return i.id !== item.id;
                      });
                      setFavoriteArray(newList);
                      saveFavorites(newList);
                    }}
                    hotel={item}
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
                </m.div>
              );
            })}
          </AnimatePresence>
        </LazyMotion>
      </div>
      <style jsx>{`
        .header {
          height: 58px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
}

export default Favorites;
