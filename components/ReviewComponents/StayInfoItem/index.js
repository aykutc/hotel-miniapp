import React from "react";
import Arrow from "../../icons/Arrow";
const StayInfoItem = ({ icon, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingBottom: 14,
        borderBottom: "1px solid #E8E9E9",
        marginBottom: 14,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 14,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {icon}
        <p
          style={{
            fontFamily: "Outfit",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 16,
            color: "#1D1F22",
          }}
        >
          {title}
        </p>
      </div>
      <Arrow rotate="right" />
    </div>
  );
};

export default StayInfoItem;
