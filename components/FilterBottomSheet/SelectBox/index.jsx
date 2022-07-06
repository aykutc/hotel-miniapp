import React from "react";
import Filter from "../../icons/Filter";

const SelectBox = ({ title, data, selected, setSelected, ...props }) => {
  return (
    <div {...props}>
      {title && (
        <p
          style={{
            padding: 0,
            margin: 0,
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 16,
            color: "#1D1F22",
            paddingBottom: 2,
          }}
        >
          {title}
        </p>
      )}
      {data.map((item, index) => {
        return (
          <div
            onClick={() => setSelected(item)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #E8E9E9",
            }}
            key={index}
          >
            <p
              style={{
                padding: 0,
                margin: 0,
                paddingTop: 14,
                paddingBottom: 14,
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: 16,
                letterSpacing: "0.01em",
                color: "#1D1F22",
              }}
            >
              {item}
            </p>
            {selected === item && <Filter />}
          </div>
        );
      })}
    </div>
  );
};

export default SelectBox;
/*
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.01em;


color: #1D1F22;

*/
