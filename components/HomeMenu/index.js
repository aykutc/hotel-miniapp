import React from "react";
import styles from "./HomeMenu.module.css";
import Favorites from "../icons/Favorites";
import Stays from "../icons/Stays";
import Explore from "../icons/Explore";

function HomeMenu({ activeMenu, setActiveMenu }) {
  const onClick = (val) => {
    setActiveMenu(val);
  };
  return (
    <div className={styles.container}>
      <button
        className={[styles.item]}
        onClick={() => {
          onClick("Explore");
        }}
      >
        <Explore
          stroke={activeMenu === "Explore" ? "#fff" : "#8e8f90"}
        ></Explore>
        <span className={activeMenu === "Explore" && styles.active}>
          Explore
        </span>
      </button>
      <button
        className={styles.item}
        onClick={() => {
          onClick("Favorites");
        }}
      >
        <Favorites
          stroke={activeMenu === "Favorites" ? "#fff" : "#8e8f90"}
        ></Favorites>
        <span className={activeMenu === "Favorites" && styles.active}>
          Favorites
        </span>
      </button>
      <button
        className={styles.item}
        onClick={() => {
          onClick("Stays");
        }}
      >
        <Stays stroke={activeMenu === "Stays" ? "#fff" : "#8e8f90"}></Stays>
        <span className={activeMenu === "Stays" && styles.active}>Stays</span>
      </button>
    </div>
  );
}

export default HomeMenu;
