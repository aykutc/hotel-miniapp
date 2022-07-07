import Callendar from "@/components/Calendar";
import HeaderTitle from "@/components/HeaderTitle";
import React from "react";
import styles from "@/styles/DateSelection.module.css";
import FloatingBottomButton from "@/components/FloatingBottomButton";
import Back from "@/components/icons/Back";
import Router from "next/router";
import { saveDateSelection } from "data/api";

export async function getStaticProps() {
  return {
    props: {},
  };
}
function Dates(props) {
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
        <Back style={{ marginRight: 32 }}></Back>
        <HeaderTitle>Dates</HeaderTitle>
      </div>

      <Callendar setSelection={setDateSelection}></Callendar>
      <FloatingBottomButton
        onClick={() => {
          saveDateSelection({
            checkIn:
              dateSelection["CHECK-IN"].day +
              " " +
              dateSelection["CHECK-IN"].time,
            checkOut:
              dateSelection["CHECK-OUT"].day +
              " " +
              dateSelection["CHECK-OUT"].time,
          });
          Router.push({
            pathname: "/check-detail",
          });
        }}
      >
        {dateSelection.durationAmount
          ? `CONTINUE - ${dateSelection.durationAmount} NIGHTS`
          : `SELECT ${
              dateSelection["CHECK-IN"] === undefined ? "CHECK IN" : "CHECK OUT"
            } DATE`}
      </FloatingBottomButton>
    </div>
  );
}

export default Dates;
