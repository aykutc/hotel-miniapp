import FloatingBottomButton from "@/components/FloatingBottomButton";
import OptimizedImage from "@/components/OptimizedImage";
import { Page } from "framework7-react";
import React from "react";

function PaymentComplete({ f7router }) {
  return (
    <>
      <Page>
        <div className="pageContainer">
          <div className={"title"}>YOUR STAY IS CONFIRMED!</div>
          <div className={"subtitle"}>
            Your confirmation number and invoice will be send via NEOM Chat.
          </div>
          <FloatingBottomButton
            onClick={() => {
              f7router.navigate("/", { clearPreviousHistory: true });
            }}
          >
            Done
          </FloatingBottomButton>
        </div>
      </Page>{" "}
      <style jsx>{`
        .image {
          width: 200px;
          height: 200px;
        }
        .pageContainer {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
          top: -50px;
          padding: 24px;
        }
        .title {
          font-weight: 500;
          font-size: 18px;
          line-height: 23px;
          /* identical to box height */

          text-align: center;

          /* Primary / NEOM Dark */

          color: #1d1f22;
        }
        .subtitle {
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          text-align: center;

          /* Grayscale/Gray 60% */

          color: #8e8f90;
        }
      `}</style>
    </>
  );
}

export default PaymentComplete;
