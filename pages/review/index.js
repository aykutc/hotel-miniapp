import React, { useState, useEffect } from "react";

import Back from "@/components/icons/Back";
import HeaderTitle from "@/components/HeaderTitle";
import OptimizedImage from "@/components/OptimizedImage";
import Title from "@/components/Title";
import StayInfoItem from "@/components/ReviewComponents/StayInfoItem";
import Calendar from "@/components/icons/Calendar";
import Room from "@/components/icons/Room";
import Bed from "@/components/icons/Bed";
import Dropdown from "@/components/ReviewComponents/Dropdown";
import FloatingBottomButton from "@/components/FloatingBottomButton";
import {
  findTransaction,
  getDateSelection,
  getHotel,
  getRoomSelection,
  getSelectedRooms,
  getStays,
  saveHomeActiveTab,
  saveStays,
  startPayment,
} from "data/api";
import { safeParseFloat } from "../../utils";
import Header from "@/components/Header";
import { Page } from "framework7-react";
import F7Navbar from "@/components/F7Navbar";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Review = ({ f7router }) => {
  const [open, setOpen] = useState(true);
  const [hotelDetail, setHotelDetail] = useState(null);
  const [loading, setloading] = useState(false);
  const [transaction, setTransaction] = useState(null);
  useEffect(() => {
    const dateSelection = getDateSelection();
    const hotel = getHotel();
    const roomSelection = getRoomSelection();
    const selectedRooms = getSelectedRooms();
    const user = localStorage.getItem("userinfo");

    setHotelDetail({
      ...hotelDetail,
      selectedRooms: selectedRooms,
      ...dateSelection,
      ...roomSelection,
      ...hotel,
      ...JSON.parse(user),
    });
  }, []);

  const checkInDate = new Date(hotelDetail?.checkIn);
  const checkOutDate = new Date(hotelDetail?.checkOut);
  const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });

  let totalPrice = 0;
  if (hotelDetail) {
    totalPrice =
      hotelDetail.duration *
      hotelDetail?.selectedRooms.reduce(
        (a, b) => a + safeParseFloat(b.price),
        0
      );
    totalPrice = parseFloat(totalPrice).toFixed(2);
  }

  const startPay = async () => {
    setloading(true);
    try {
      const response = await startPayment({
        price: totalPrice,

        text: [
          {
            key:
              hotelDetail.duration +
              " nights, " +
              hotelDetail?.selectedRooms.map((item, index) => {
                if (index > 0) {
                  return " " + item.title;
                }
                return item.title;
              }),
            value: totalPrice,
          },
        ],
        email: hotelDetail.preferred_username,
      });
      console.log(response.result);
      setTransaction(response.result);
    } catch (error) {
      setloading(false);
    }

    /* setloading(false); */
  };
  console.log(transaction);

  useEffect(() => {
    let interval;
    const find = async () => {
      if (transaction) {
        if (transaction.status === "new") {
          interval = setInterval(async () => {
            const response = await findTransaction(transaction.transactionId);
            console.log(response.result);
            if (response.result.status !== "new") {
              setTransaction(response.result);
              setloading(false);
              clearInterval(interval);
            }
          }, 2000);
        } else if (transaction.status === "finished") {
          const dateSelection = getDateSelection();
          const hotel = getHotel();
          const stays = getStays();
          saveHomeActiveTab("Stays");
          saveStays([{ ...hotel, ...dateSelection }, ...stays]);
          f7router.navigate("/", { clearPreviousHistory: true });
        }
      }
    };

    find();
    console.log(interval);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [transaction]);

  return (
    <Page>
      <div
        style={{
          paddingLeft: 24,
          paddingRight: 24,

          paddingBottom: 70,
          display: "flex",
          flex: "1",
          flexDirection: "column",
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <F7Navbar>
          <Header>
            <Back
              style={{ marginRight: 32 }}
              onClick={() => {
                f7router.back();
              }}
            ></Back>

            <HeaderTitle>REVIEW</HeaderTitle>
          </Header>
        </F7Navbar>
        <div style={{ overflow: "scroll" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 14,
              marginBottom: 40,
            }}
          >
            {hotelDetail && (
              <OptimizedImage
                src={hotelDetail.imgRect}
                maxWidth={64}
                style={{ width: "64px", height: "64px", borderRadius: "4px" }}
              ></OptimizedImage>
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                marginLeft: 8,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "Outfit",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: 16,
                  letterSpacing: "0.01em",
                  lineHeight: "20px",
                  textTransform: "uppercase",
                  color: "#1d1f22",
                }}
              >
                {hotelDetail?.title}
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "Outfit",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: 13,
                  color: "#565759",
                  lineHeight: "18px",
                }}
              >
                {hotelDetail?.block}
              </p>
            </div>
          </div>
          <Title style={{ letterSpacing: "0.01em", lineHeight: "20px" }}>
            Stay Information
          </Title>
          <div style={{ marginTop: 8, marginBottom: 40 }}>
            {hotelDetail && (
              <StayInfoItem
                icon={<Calendar />}
                title={
                  monthFormatter.format(checkInDate) +
                  " " +
                  checkInDate.getDate() +
                  " - " +
                  monthFormatter.format(checkOutDate) +
                  " " +
                  checkOutDate.getDate() +
                  " (" +
                  hotelDetail.duration +
                  " nights)"
                }
              />
            )}

            <StayInfoItem
              icon={<Room />}
              title={
                hotelDetail?.selectedRooms.length +
                " Room, " +
                parseInt(
                  parseInt(hotelDetail?.kids) + parseInt(hotelDetail?.adults)
                ) +
                " Guests "
              }
            />
            <StayInfoItem
              icon={<Bed />}
              title={hotelDetail?.selectedRooms.map((item, index) => {
                if (index > 0) {
                  return ", " + item.title;
                }
                return item.title;
              })}
            />
          </div>
          <Title style={{ letterSpacing: "0.01em", lineHeight: "20px" }}>
            Charges Summary
          </Title>
          {hotelDetail && (
            <div style={{ marginTop: 16, marginBottom: 40 }}>
              <Dropdown
                data={[
                  {
                    name:
                      monthFormatter.format(checkInDate) +
                      " " +
                      checkInDate.getDate() +
                      " - " +
                      monthFormatter.format(checkOutDate) +
                      " " +
                      checkOutDate.getDate() +
                      " (" +
                      hotelDetail.duration +
                      " nights)",
                    price: totalPrice,
                  },
                  {
                    name: "Tax",
                    price: "0.00",
                  },
                ]}
                totalPrice={totalPrice}
                open={open}
                handleClick={() => setOpen(!open)}
              />
            </div>
          )}

          <Title style={{ letterSpacing: "0.01em", lineHeight: "20px" }}>
            Cancellation Policy
          </Title>
          <p
            style={{
              margin: 0,
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 14,
              color: "#565759",
              lineHeight: "21px",
              letterSpacing: "0.01em",
              marginBottom: 40,
              marginTop: 8,
            }}
          >
            Cancellation policies may vary depending on the rate or dates of
            your reservation. Please refer to your reservation confirmation to
            verify your cancellation policy. If you need further assistance,
            call the hotel directly or contact Customer Support.
            <br />
            <br />
            You can check the cancellation policy for your reservation and make
            the cancellations online or by contacting Customer Support.
            <br />
            <br />
            We are aware of a systems issue where pre-arrival emails are still
            sent for recently cancelled reservations. If this happens, check
            your app and / or account first to see if the reservation is still
            showing. If its not, disregard the check-in email.
          </p>
        </div>
        <FloatingBottomButton
          spinner={loading}
          onClick={() => {
            startPay();
          }}
        >
          BOOK NOW
        </FloatingBottomButton>
      </div>
    </Page>
  );
};

export default Review;
