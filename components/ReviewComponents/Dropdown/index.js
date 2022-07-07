import React, { useState } from "react";
import Arrow from "../../icons/Arrow";
const arr = [
  {
    name: "Jun 24 - Jun 27 (3 nights)",
    price: "1,271.97",
  },
  {
    name: "Tax",
    price: "0.00",
  },
];
const Dropdown = ({ data, totalPrice, handleClick, open }) => {
  return (
    <>
      <div
        onClick={handleClick}
        style={{
          display: "flex",
          flex: 1,
          backgroundColor: "#F6F6F6",
          borderRadius: 4,
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 9,
          paddingBottom: 8,
        }}
      >
        <p
          style={{
            margin: 0,
            flex: 1,
            textAlign: "left",
            fontFamily: "Outfit",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 18,
            color: "#1D1F22",
            lineHeight: "23px",
          }}
        >
          Total
        </p>
        <div
          style={{
            flex: "auto",
            display: "flex",
            justifyContent: "flex-end",
            gap: 14,
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              textAlign: "right",
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 18,
              color: "#1D1F22",
              lineHeight: "23px",
            }}
          >
            ${totalPrice}
          </p>
          {open ? <Arrow rotate="up" /> : <Arrow rotate="down" />}
        </div>
      </div>
      {open && (
        <div style={{}}>
          {data.map((item, index) => (
            <div
              style={{
                display: "flex",
                flex: 1,
                marginTop: 14,
                marginBottom: 14,
                justifyContent: "space-between",
                paddingBottom: 14,
                borderBottom: "1px solid #E8E9E9 ",
              }}
              key={index}
            >
              <p
                style={{
                  flex: 2,
                  fontFamily: "Outfit",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: 16,
                  color: "#1D1F22",
                  lineHeight: "20px",
                  letterSpacing: "0.01em",
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  flex: 1,
                  textAlign: "right",
                  fontFamily: "Outfit",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: 16,
                  color: "#8E8F90",
                  lineHeight: "20px",
                  letterSpacing: "0.01em",
                }}
              >
                ${item.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
