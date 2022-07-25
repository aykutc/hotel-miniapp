import React, { useEffect, useState } from "react";

import { callendarHandler, dateFormatter } from "./dateHelpers";
import styles from "./calendar.module.css";
import FloatingBottomButton from "../FloatingBottomButton";
import DateBox from "./components/datebox";

const daysNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Calendar = ({ setSelection, datesChoice = {} }) => {
  let [monthChanger, setMonthChanger] = useState(new Date().getMonth());
  const [borderBottom, setBorderBottom] = useState("CHECK-IN");
  const [allDays, setAllDays] = useState([]);
  const [duration, setDuration] = useState({});
  console.log("datesChoice", datesChoice);
  useEffect(() => {
    if (monthChanger < 12) {
      const { time, days, prevDays, nextDays } = callendarHandler(monthChanger);
      const currentMonth = {
        month: monthChanger + 1,
        time,
        days,
        prevDays,
        nextDays,
      };
      setAllDays([...allDays, currentMonth]);
      setMonthChanger(monthChanger + 1);
    }
  }, [monthChanger, allDays]);

  useEffect(() => {
    const durationAmount =
      ("CHECK-IN" in duration || "CHECK-OUT" in duration) &&
      duration["CHECK-OUT"]?.day !== 0 &&
      duration["CHECK-IN"]?.day !== 0 &&
      (+new Date(
        duration["CHECK-OUT"]?.day + " " + duration["CHECK-OUT"]?.time
      ) -
        +new Date(
          duration["CHECK-IN"]?.day + " " + duration["CHECK-IN"]?.time
        )) /
        (1000 * 3600 * 24);
    setSelection({ ...duration, durationAmount });

    setBorderBottom(!duration["CHECK-IN"] ? "CHECK-IN" : "CHECK-OUT");
  }, [duration, setSelection]);

  return (
    <>
      <div className={styles.checkContainer}>
        {["CHECK-IN", "CHECK-OUT"].map((e) => (
          <React.Fragment key={e}>
            <div
              className={styles.checkInOut}
              style={
                [e].includes(borderBottom)
                  ? { borderBottom: "1px solid #1D1F22" }
                  : { border: " none" }
              }
              onClick={() => setBorderBottom(e)}
            >
              {e === "CHECK-IN" &&
              "CHECK-IN" in duration &&
              duration["CHECK-IN"]?.day
                ? dateFormatter(duration, "CHECK-IN")
                : e === "CHECK-OUT" &&
                  "CHECK-OUT" in duration &&
                  duration["CHECK-OUT"]?.day
                ? dateFormatter(duration, "CHECK-OUT")
                : e}
            </div>
          </React.Fragment>
        ))}
        <div className={styles.checkInOutBorderBottom}></div>
      </div>
      <div className={styles.daysContainer}>
        {daysNames.map((e) => (
          <React.Fragment key={e}>
            <div className={styles.daysNames}>{e}</div>
          </React.Fragment>
        ))}
      </div>
      <div className={styles.dateboxContainer}>
        <DateBox
          allDays={allDays}
          borderBottom={borderBottom}
          setDuration={setDuration}
          datesChoice={datesChoice}
        />
      </div>
    </>
  );
};

export default Calendar;
