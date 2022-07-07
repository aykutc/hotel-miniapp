import Callendar from "@/components/Calendar";
import HeaderTitle from "@/components/HeaderTitle";
import React from "react";
import styles from "@/styles/DateSelection.module.css";
import FloatingBottomButton from "@/components/FloatingBottomButton";
import Back from "@/components/icons/Back";
import Router, { useRouter } from "next/router";

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
  const router = useRouter();
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
          Router.push({
            pathname: "/check-detail",
            query: {
              title: router.query.title,
              checkIn:
                dateSelection["CHECK-IN"].day +
                " " +
                dateSelection["CHECK-IN"].time,
              checkOut:
                dateSelection["CHECK-OUT"].day +
                " " +
                dateSelection["CHECK-OUT"].time,
              rooms: 1,
              adults: 1,
              kids: 0,
            },
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
