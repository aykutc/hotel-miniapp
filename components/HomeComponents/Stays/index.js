import HeaderTitle from "@/components/HeaderTitle";
import NoData from "@/components/NoData";
import Tabs from "@/components/Tabs";
import styles from "@/styles/Home.module.css";

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

function Stays({}) {
  const [selectedTab, setSelectedTab] = useState("Upcoming");
  const [favorites, setFavorites] = useState([]);

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
      <div className={styles.header}>
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
      <div className={styles.staysContainer}>
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
                    saveHotel({
                      ...item,
                    });
                    Router.push({
                      pathname: "/hotel-detail",
                    });
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
    </>
  );
}

export default Stays;
