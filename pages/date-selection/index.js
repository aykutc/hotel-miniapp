import HeaderTitle from "@/components/HeaderTitle";
import React from "react";
import FloatingBottomButton from "@/components/FloatingBottomButton";
import Back from "@/components/icons/Back";
import Router from "next/router";
import { saveDateSelection } from "data/api";
import Calendar from "@/components/Calendar";
import { Page } from "framework7-react";
import { useRouterPush } from "@/utils/hooks";
import F7Navbar from "@/components/F7Navbar";
import Header from "@/components/Header";

export async function getStaticProps() {
  return {
    props: {},
  };
}
function Dates({ f7router }) {
  const [dateSelection, setDateSelection] = React.useState({});

  React.useEffect(() => {
    setTimeout(() => {
      Router.prefetch("/check-detail");
    }, 300);
  }, []);
  const push = useRouterPush();
  return (
    <Page>
      <div className={"container"}>
        <F7Navbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexShrink: 0,
            position: "relative",
            top: 7,
          }}
        >
          <Header>
            <Back
              style={{ marginRight: 32 }}
              onClick={() => {
                f7router.back();
              }}
            ></Back>

            <HeaderTitle>Dates</HeaderTitle>
          </Header>
        </F7Navbar>

        <Calendar setSelection={setDateSelection}></Calendar>
        <FloatingBottomButton
          onClick={() => {
            if (!dateSelection.durationAmount) {
              return;
            }

            saveDateSelection({
              duration: dateSelection.durationAmount,
              checkIn:
                dateSelection["CHECK-IN"].day +
                " " +
                dateSelection["CHECK-IN"].time,
              checkOut:
                dateSelection["CHECK-OUT"].day +
                " " +
                dateSelection["CHECK-OUT"].time,
            });
            push("/check-detail", f7router);
          }}
        >
          {dateSelection.durationAmount
            ? `CONTINUE - ${dateSelection.durationAmount} NIGHTS`
            : `SELECT ${
                dateSelection["CHECK-IN"] === undefined
                  ? "CHECK-IN"
                  : "CHECK-OUT"
              } DATE`}
        </FloatingBottomButton>
      </div>
      <style jsx>{`
        .container {
          padding-left: 24px;
          padding-right: 24px;

          height: 100vh;
          overflow: hidden;

          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .checkContainer {
          height: 52px;
          margin-top: 17px;
          display: flex;
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
      `}</style>
    </Page>
  );
}

export default Dates;
