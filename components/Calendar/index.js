import React, { useEffect, useState } from "react";

import { callendarHandler, dateFormatter } from "./dateHelpers";
import DateBox from "./components/datebox";

const daysNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Calendar = ({ setSelection, datesChoice = {} }) => {
  let [monthChanger, setMonthChanger] = useState(new Date().getMonth());
  const [borderBottom, setBorderBottom] = useState("CHECK-IN");
  const [allDays, setAllDays] = useState([]);
  const [duration, setDuration] = useState({});

  useEffect(() => {
    const lastMonthOfCalendar = new Date().getMonth() + 6
    if (monthChanger < lastMonthOfCalendar) {
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
      <div className={"checkContainer"}>
        {["CHECK-IN", "CHECK-OUT"].map((e) => (
          <React.Fragment key={e}>
            <div
              className={"checkInOut"}
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
        <div className={"checkInOutBorderBottom"}></div>
      </div>
      <div className={"daysContainer"}>
        {daysNames.map((e) => (
          <React.Fragment key={e}>
            <div className={"daysNames"}>{e}</div>
          </React.Fragment>
        ))}
      </div>
      <div className={"dateboxContainer"}>
        <DateBox
          allDays={allDays}
          borderBottom={borderBottom}
          setDuration={setDuration}
          datesChoice={datesChoice}
        />
      </div>
      <style jsx>{`
        .back {
          position: absolute;
          top: 22px;
          left: 24.5px;
        }

        .checkContainer {
          height: 52px;
          margin-top: 17px;
          display: flex;
          position: relative;
          left: -24px;
          width: calc(100% + 48px);
          border-bottom: 1px solid #e8e9e9;
        }

        .checkInOut {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
        }

        .daysContainer {
          height: 46px;
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          justify-items: center;
          align-items: center;
          margin-top: 24px;
        }

        .daysNames {
          font-size: 13px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #8e8f90;
        }

        .dateboxContainer {
          height: 80vh;
          overflow-y: scroll;
          overflow-x: hidden;
          margin-top: 24px;
        }
      `}</style>
    </>
  );
};

export default Calendar;
