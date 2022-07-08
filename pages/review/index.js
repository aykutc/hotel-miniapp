import React, { useState } from "react";
import styles from "@/styles/DateSelection.module.css";
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

export async function getStaticProps() {
  return {
    props: {},
  };
}
const dropdownData = [
  {
    name: "Jun 24 - Jun 27 (3 nights)",
    price: "1,271.97",
  },
  {
    name: "Tax",
    price: "0.00",
  },
];
const Review = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      style={{
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 18,
        paddingBottom: 70,
        display: "flex",
        flex: "1",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        overflowY: "scroll",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 33,
          height: 58,
        }}
      >
        <Back style={{ marginRight: 32 }}></Back>
        <HeaderTitle>REVIEW</HeaderTitle>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 14,
          marginBottom: 40,
        }}
      >
        <OptimizedImage
          src="hotel1.jpg"
          maxWidth={64}
          style={{ width: "64px", height: "64px", borderRadius: "4px" }}
        ></OptimizedImage>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 4,
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
            The Ultra-Luxury Mansions
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
            Block A-21
          </p>
        </div>
      </div>
      <Title style={{ letterSpacing: "0.01em", lineHeight: "20px" }}>
        Stay Information
      </Title>
      <div style={{ marginTop: 8, marginBottom: 40 }}>
        <StayInfoItem icon={<Calendar />} title="Jun 24 - Jun 27 (3 nights)" />
        <StayInfoItem icon={<Room />} title="1 Room, 2 Guests " />
        <StayInfoItem icon={<Bed />} title="Superior King Room" />
      </div>
      <Title style={{ letterSpacing: "0.01em", lineHeight: "20px" }}>
        Charges Summary
      </Title>
      <div style={{ marginTop: 16, marginBottom: 40 }}>
        <Dropdown
          data={dropdownData}
          totalPrice="1,271.97"
          open={open}
          handleClick={() => setOpen(!open)}
        />
      </div>
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
        Cancellation policies may vary depending on the rate or dates of your
        reservation. Please refer to your reservation confirmation to verify
        your cancellation policy. If you need further assistance, call the hotel
        directly or contact Customer Support.
        <br />
        <br />
        You can check the cancellation policy for your reservation and make the
        cancellations online or by contacting Customer Support.
        <br />
        <br />
        We are aware of a systems issue where pre-arrival emails are still sent
        for recently cancelled reservations. If this happens, check your app and
        / or account first to see if the reservation is still showing. If its
        not, disregard the check-in email.
      </p>
      <FloatingBottomButton onClick={() => {}}>BOOK NOW</FloatingBottomButton>
    </div>
  );
};

export default Review;
