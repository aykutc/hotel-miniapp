import Callendar from "@/components/Calendar";
import HeaderTitle from "@/components/HeaderTitle";
import React from "react";
import FloatingBottomButton from "@/components/FloatingBottomButton";
import Back from "@/components/icons/Back";
import OptimizedImage from "@/components/OptimizedImage";
import { ExploreArray } from "data/data";
import styles from "./hotel-detail.module.css";
import Arrow from "@/components/icons/Arrow";
import Like from "@/components/icons/Like";
import Share from "@/components/icons/Share";

export async function getStaticProps() {
  return {
    props: {},
  };
}
function HotelDetail(props) {
  const [dateSelection, setDateSelection] = React.useState({});
  /*   React.useEffect(() => {
    console.log("aa", sessionStorage.getItem("aa"));
  }, []);
 */
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={styles.headerContainer}>
          <div className={styles.circle}>
            <Arrow rotate="left" color="white" />
          </div>
          <div className={styles.circle}>
            <Like />
          </div>
          <div className={styles.circle}>
            <Share />
          </div>
        </div>
        <OptimizedImage
          style={{
            height: "294px",
            width: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 5,
          }}
          src={ExploreArray[0].img}
          type="jpg"
        />
      </div>
    </div>
  );
}

export default HotelDetail;
