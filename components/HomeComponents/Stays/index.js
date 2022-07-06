import HeaderTitle from "@/components/HeaderTitle";
import NoData from "@/components/NoData";
import Tabs from "@/components/Tabs";
import styles from "@/styles/Home.module.css";
import Router from "next/router";
import { useState } from "react";
import UpcomingCard from "../UpcomingCard";

function Stays({}) {
  const [selectedTab, setSelectedTab] = useState("Upcoming");
  const tabs = [
    {
      id: "Upcoming",
      data: [
        {
          img: "hotel1.jpg",
          date: "Jun 24 - Jun 27, 22 (3 nights)",
          hotelName: "The Ultra-Luxury Mansions",
          block: "Block A-21",
          status: "CHECK-IN AVAILABLE",
        },
      ],
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
  ];
  const currentTab = tabs.find((tab) => tab.id === selectedTab);
  return (
    <>
      <div className={styles.header}>
        <HeaderTitle>Stays</HeaderTitle>
      </div>

      <Tabs
        data={["Upcoming", "Past", "Cancelled"]}
        selected={selectedTab}
        setSelected={setSelectedTab}
      ></Tabs>
      <div className={styles.staysContainer}>
        {currentTab?.data.length === 0
          ? currentTab?.noData
          : currentTab?.data.map((item, index) => {
              return (
                <div
                  key={item + index}
                  onClick={() => {
                    Router.push("/hotel-detail");
                  }}
                >
                  <UpcomingCard
                    showFavorite
                    img={item.img}
                    status={item.status}
                    hotelName={item.hotelName}
                    date={item.date}
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
