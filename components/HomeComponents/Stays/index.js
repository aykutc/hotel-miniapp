import HeaderTitle from "@/components/HeaderTitle";
import NoData from "@/components/NoData";
import Tabs from "@/components/Tabs";
import { useRouterPush } from "@/utils/hooks";

import {
  getFavorites,
  getStays,
  getStaysTab,
  saveFavorites,
  saveHotel,
  saveStaysTab,
} from "data/api";
import Router from "next/router";
import { useState, useEffect } from "react";
import UpcomingCard from "../UpcomingCard";

function Stays({ f7router }) {
  const [selectedTab, setSelectedTab] = useState("Upcoming");
  const [favorites, setFavorites] = useState([]);
  const push = useRouterPush();
  const [tabs, setTabs] = useState([
    {
      id: "Upcoming",
      data: [],
      noData: (
        <NoData
          title={"NO UPCOMING STAYS"}
          subTitle={"Once you book a stay, it will appear here."}
        />
      ),
    },
    {
      id: "Past",
      data: [],
      noData: (
        <NoData
          title={"NO PAST STAYS"}
          subTitle={"Once a stay is over, it will appear here."}
        />
      ),
    },
    {
      id: "Cancelled",
      data: [],
      noData: (
        <NoData
          title={"NO CANCELLED STAYS"}
          subTitle={"Once you cancel a stay, it will appear here."}
        />
      ),
    },
  ]);
  useEffect(() => {
    const favList = getFavorites();
    if (favList) {
      setFavorites(favList);
    }
  }, []);
  useEffect(() => {
    const _stays = getStays();
    const _tab = getStaysTab();

    if (_tab) {
      setSelectedTab(_tab);
    }
    const _tabs = [...tabs];
    _stays.forEach((item) => {
      if (new Date(item.checkIn).getTime() > new Date().getTime()) {
        _tabs[0].data = [..._tabs[0].data, item];
      } else {
        _tabs[1].data = [..._tabs[1].data, item];
      }
    });

    setTabs(_tabs);
  }, []);
  const currentTab = tabs.find((tab) => tab.id === selectedTab);
  return (
    <>
      <div className={"header"}>
        <HeaderTitle>Stays</HeaderTitle>
      </div>
      <div style={{ paddingRight: "24px" }}>
        <Tabs
          data={["Upcoming", "Past", "Cancelled"]}
          selected={selectedTab}
          setSelected={(val) => {
            saveStaysTab(val);
            setSelectedTab(val);
          }}
        />
      </div>
      <div className={"staysContainer"}>
        {currentTab?.data.length === 0
          ? currentTab?.noData
          : currentTab?.data.map((item, index) => {
              const isFavorite = favorites.some(
                (_item) => _item.id === item.id
              );

              return (
                <div
                  style={{ width: "100%" }}
                  key={item + index}
                  onClick={() => {
                    if (currentTab.id === "Upcoming") {
                      saveHotel({
                        ...item,
                        confirmCode: new Date().getTime(),
                      });
                    } else {
                      saveHotel({
                        ...item,
                      });
                    }

                    push("/hotel-detail", f7router);

                    /*   Router.push({
                      pathname: "/hotel-detail",
                    }); */
                  }}
                >
                  <UpcomingCard
                    showFavorite
                    img={item.img}
                    status={
                      currentTab.id === "Upcoming" && "CHECK IN AVAILABLE"
                    }
                    favoriteOnClick={() => {
                      if (!isFavorite) {
                        saveFavorites([item, ...favorites]);
                        setFavorites([item, ...favorites]);
                      } else {
                        const newList = favorites.filter((i) => {
                          return i.id !== item.id;
                        });
                        saveFavorites(newList);
                        setFavorites(newList);
                      }
                    }}
                    isFavorite={isFavorite}
                    hotelName={item.title}
                    date={item.checkIn + " - " + item.checkOut}
                    block={item.block}
                  />
                </div>
              );
            })}
      </div>
      <style jsx>{`
        .header {
          height: 58px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .staysContainer {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
          width: 100%;
          padding-top: 24px;
          padding-right: 24px;
          overflow: auto;
          padding-bottom: 120px;
        }
      `}</style>
    </>
  );
}

export default Stays;
