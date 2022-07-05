import React, { useEffect, useState } from "react";
import { isLaterFromToday, isBetweenTwoDates } from "../dateHelpers";
import styles from "./datebox.module.css";

const DateBox = ({ allDays, borderBottom, setDuration }) => {
  const [selected, setSelected] = useState({});

  useEffect(() => {
    setDuration(selected);
  }, [selected, setDuration]);
  const selectDay = (day, item) => {
    const { time } = item;
    setSelected(
      (selected[`${borderBottom}`]?.day === day &&
        selected[`${borderBottom}`]?.time === item.time) ||
        (selected[`${borderBottom}`]?.day === day &&
          selected[`${borderBottom}`]?.time === item.time)
        ? {
            ...selected,
            [`${borderBottom}`]: {
              ...selected[`${borderBottom}`],
              time: "",
              day: 0,
            },
          }
        : borderBottom === "CHECK-OUT"
        ? new Date(day + time) >
            (selected["CHECK-IN"]?.day
              ? new Date(selected["CHECK-IN"]?.day + selected["CHECK-IN"]?.time)
              : 0) &&
          isLaterFromToday(new Date(day + time), new Date(), borderBottom)
          ? {
              ...selected,
              [`${borderBottom}`]: {
                ...selected[`${borderBottom}`],
                time,
                day,
              },
            }
          : selected
        : borderBottom === "CHECK-IN"
        ? new Date(day + time) <
            (selected["CHECK-OUT"]?.day
              ? new Date(
                  selected["CHECK-OUT"]?.day + selected["CHECK-OUT"]?.time
                )
              : Infinity) &&
          isLaterFromToday(new Date(day + time), new Date(), borderBottom)
          ? {
              ...selected,
              [`${borderBottom}`]: {
                ...selected[`${borderBottom}`],
                time,
                day,
              },
            }
          : selected
        : {
            ...selected,
            [`${borderBottom}`]: { ...selected[`${borderBottom}`], time, day },
          }
    );
  };
  return (
    <>
      {allDays.map((item) => (
        <React.Fragment key={item.time}>
          <div className={styles.dateBoxTitle}>{item.time}</div>
          <div
            className={styles.allDaysContainer}
            style={{
              gridTemplateRows:
                [...item.prevDays, ...item.days, ...item.nextDays].length < 36
                  ? "repeat(5, 56px)"
                  : "repeat(6, 56px)",
            }}
          >
            {item.prevDays.map((prevDay, index) => (
              <div
                key={item.time + "-prevDay-" + index}
                className={styles.prevDays}
              >
                {prevDay}
              </div>
            ))}
            {item.days.map((day, index) => (
              <React.Fragment key={item.time + "-currentDay-" + index}>
                <div
                  className={styles.gridContainer}
                  style={{
                    background:
                      selected["CHECK-IN"]?.day && selected["CHECK-OUT"]?.day
                        ? selected["CHECK-IN"]?.day === day &&
                          selected["CHECK-IN"]?.time === item.time
                          ? "linear-gradient(90deg, #fff 50%, #F3EFE5 50%)"
                          : selected["CHECK-OUT"]?.day === day &&
                            selected["CHECK-OUT"]?.time === item.time
                          ? "linear-gradient(90deg, #F3EFE5 50%, #fff 50%)"
                          : "null"
                        : "transparent",
                  }}
                >
                  <div
                    className={
                      (selected["CHECK-IN"]?.day === day &&
                        selected["CHECK-IN"]?.time === item.time) ||
                      (selected["CHECK-OUT"]?.day === day &&
                        selected["CHECK-OUT"]?.time === item.time)
                        ? styles.selectedCurrentDays
                        : styles.currentDays
                    }
                    style={{
                      color: isLaterFromToday(
                        new Date(day + item.time),
                        new Date(),
                        "CHECK-IN"
                      )
                        ? (selected["CHECK-IN"]?.day === day &&
                            selected["CHECK-IN"]?.time === item.time) ||
                          (selected["CHECK-OUT"]?.day === day &&
                            selected["CHECK-OUT"]?.time === item.time)
                          ? "#fff"
                          : isBetweenTwoDates(
                              new Date(day + item.time),
                              selected["CHECK-IN"]?.day
                                ? new Date(
                                    selected["CHECK-IN"]?.day +
                                      selected["CHECK-IN"]?.time
                                  )
                                : false,
                              "CHECK-IN"
                            ) &&
                            isBetweenTwoDates(
                              new Date(day + item.time),
                              new Date(
                                selected["CHECK-OUT"]?.day +
                                  selected["CHECK-OUT"]?.time
                              ),
                              "CHECK-OUT"
                            )
                          ? "#B89535"
                          : "#1D1F22"
                        : "##8E8F90",
                      backgroundColor:
                        isBetweenTwoDates(
                          new Date(day + item.time),
                          selected["CHECK-IN"]?.day
                            ? new Date(
                                selected["CHECK-IN"]?.day +
                                  selected["CHECK-IN"]?.time
                              )
                            : false,
                          "CHECK-IN"
                        ) &&
                        isBetweenTwoDates(
                          new Date(day + item.time),
                          new Date(
                            selected["CHECK-OUT"]?.day +
                              selected["CHECK-OUT"]?.time
                          ),
                          "CHECK-OUT"
                        )
                          ? "#F3EFE5"
                          : (selected["CHECK-IN"]?.day === day &&
                              selected["CHECK-IN"]?.time === item.time) ||
                            (selected["CHECK-OUT"]?.day === day &&
                              selected["CHECK-OUT"]?.time === item.time)
                          ? "#B89535"
                          : "transparent",
                      padding:
                        isBetweenTwoDates(
                          new Date(day + item.time),
                          new Date(
                            selected["CHECK-IN"]?.day +
                              selected["CHECK-IN"]?.time
                          ),
                          "CHECK-IN"
                        ) &&
                        isBetweenTwoDates(
                          new Date(day + item.time),
                          new Date(
                            selected["CHECK-OUT"]?.day +
                              selected["CHECK-OUT"]?.time
                          ),
                          "CHECK-OUT"
                        )
                          ? "10px calc(((100%)/2) - 16px)"
                          : (selected["CHECK-IN"]?.day === day &&
                              selected["CHECK-IN"]?.time === item.time) ||
                            (selected["CHECK-OUT"]?.day === day &&
                              selected["CHECK-OUT"]?.time === item.time)
                          ? "10px"
                          : "null",
                    }}
                    onClick={() => selectDay(day, item)}
                  >
                    {day}
                  </div>
                </div>
              </React.Fragment>
            ))}
            {item.nextDays.map((nextDay, index) => (
              <div
                key={item.time + "-nextDay-" + index}
                className={styles.nextDays}
              >
                {nextDay}
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default DateBox;
