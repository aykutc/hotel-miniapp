import React, { useState, useEffect, useRef } from "react";
import BottomSheet from "../BottomSheet";

function QRBottomSheet({ show, setShow }) {
  const videoRef = useRef(null);
  useEffect(() => {
    if (!show || !videoRef.current) {
      return;
    }
    const constraints = {
      audio: false,
      video: {
        facingMode: { exact: "environment" },
        /*   width: { min: 327 },
        height: { min: 540 }, */
      },
    };

    function handleSuccess(stream) {
      console.log(stream);
      console.log(videoRef);
      if (videoRef.current) {
        /*         window.stream = stream; // make stream available to browser console */
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = function (e) {
          videoRef.current.play();
          /* alert("play called"); */
        };
      }
      /* video.srcObject = stream; */
    }

    function handleError(error) {
      /* alert("navigator.MediaDevices.getUserMedia error: ") ; */
      console.log(
        "navigator.MediaDevices.getUserMedia error: ",
        error.message,
        error.name
      );
    }
    window.navigator.mediaDevices
      .getUserMedia(constraints)
      .then(handleSuccess)
      .catch(handleError);

    return () => {};
  }, [videoRef, show]);

  return (
    <>
      <BottomSheet
        isOpen={show}
        onClose={() => {
          setShow(false);
        }}
        title={"SCAN QR CODE"}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            padding: 24,
            paddingTop: 0,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              background: "#C4C4C4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: 6,
              position: "relative",
            }}
          >
            {/* background: "#1D1F22", */}
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "#1D1F22",
                position: "absolute",
                borderRadius: 6,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "30%",
                  position: "absolute",
                  background: "#1D1F22",
                  opacity: 0.5,

                  borderTopRightRadius: 6,
                  borderTopLeftRadius: 6,
                }}
              ></div>
              <div
                style={{
                  width: "100%",
                  height: "30%",
                  position: "absolute",
                  background: "#1D1F22",
                  opacity: 0.5,
                  bottom: 0,
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                }}
              ></div>
              <div
                style={{
                  width: "25%",
                  height: "40%",
                  position: "absolute",
                  background: "#1D1F22",
                  opacity: 0.5,
                  bottom: "30%",
                  top: "30%",
                }}
              ></div>
              <div
                style={{
                  width: "25%",
                  height: "40%",
                  position: "absolute",
                  background: "#1D1F22",
                  opacity: 0.5,
                  bottom: "30%",
                  top: "30%",
                  right: 0,
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "25%",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: 24,
                  color: "white",
                }}
              >
                Align QR code within frame
              </div>
              <video
                ref={videoRef}
                style={{
                  height: "100%",
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: 6,
                }}
                autoPlay
                playsInline
                controls={false}
              ></video>
            </div>
          </div>
        </div>
        {/* <style jsx>{`
          .container {
            height: 300px;
            width: 500px;
            backgroundcolor: red;
          }
        `}</style> */}
      </BottomSheet>
    </>
  );
}

export default QRBottomSheet;
