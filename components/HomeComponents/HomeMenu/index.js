import React from "react";
import Favorites from "../../icons/Favorites";
import Stays from "../../icons/Stays";
import Explore from "../../icons/Explore";
import { saveHomeActiveTab } from "data/api";

function HomeMenu({ activeMenu, setActiveMenu }) {
  const onClick = (val) => {
    setActiveMenu(val);
    saveHomeActiveTab(val);
  };
  return (
    <>
      <div className={"container"}>
        <button
          key={"explore"}
          className={"item"}
          onClick={() => {
            onClick("Explore");
          }}
        >
          <Explore
            stroke={activeMenu === "Explore" ? "#fff" : "#8e8f90"}
          ></Explore>
          <span className={activeMenu === "Explore" && "active"}>Explore</span>
        </button>
        <button
          key={"favorites"}
          className={"item"}
          onClick={() => {
            onClick("Favorites");
          }}
        >
          <Favorites
            stroke={activeMenu === "Favorites" ? "#fff" : "#8e8f90"}
          ></Favorites>
          <span className={activeMenu === "Favorites" && "active"}>
            Favorites
          </span>
        </button>
        <button
          key={"stays"}
          className={"item"}
          onClick={() => {
            onClick("Stays");
          }}
        >
          <Stays stroke={activeMenu === "Stays" ? "#fff" : "#8e8f90"}></Stays>
          <span className={activeMenu === "Stays" && "active"}>Stays</span>
        </button>
      </div>
      <style jsx>{`
        .container {
          height: 64px;
          width: 260px;
          position: fixed;
          bottom: 18px;
          left: 50%;
          transform: translate(-50%);
          background-color: #1d1f22;
          border-radius: 100px;
          padding: 0 24px;

          display: flex;
          flex-direction: row;
        }

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;

          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          text-align: center;

          /* Grayscale/Gray 60% */
          /* transition: all 1s; */

          color: #8e8f90;
        }

        .item > span {
          margin-top: 5px;
        }
        .active {
          /* transition: all 1s; */

          color: white;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default HomeMenu;
