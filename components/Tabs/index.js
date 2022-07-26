import React, { useEffect, useRef, useState } from "react";

const Tabs = ({ data, selected, setSelected, backgroundColor }) => {
  const ref = useRef();
  const [width, setWidth] = useState(null);
  useEffect(() => {
    if (ref.current) {
      setWidth(ref?.current?.clientWidth);
    }
  }, [ref, selected]);

  const index = data.findIndex((val) => {
    return val === selected;
  });

  return (
    <>
      <div style={{ backgroundColor }} className={"container"}>
        {data.map((item, index) => (
          <a
            ref={ref}
            className={"item"}
            onClick={() => setSelected(item)}
            style={{
              flexBasis: "0px",
              flexGrow: 1,
              flexShrink: 0,

              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              /* backgroundColor: item === selected ? "#1D1F22" : "transparent", */
              color: item === selected ? "#FFF" : "#8E8F90",
              zIndex: 200,
            }}
            key={index}
          >
            {item}
          </a>
        ))}
        {width && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "#1D1F22",
              width,
              height: "100%",
              borderRadius: 100,
              transition: "transform .3s",
              transform: "translateX(" + index * width + "px)",
            }}
          ></div>
        )}
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          background-color: #f6f6f6;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          position: relative;
        }
        .item {
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 22px;
          padding-right: 22px;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
        }
      `}</style>
    </>
  );
};

export default Tabs;
