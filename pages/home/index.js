import { ExploreArray, RecommendedArray } from "data/data";

import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import HomeMenu from "@/components/HomeMenu";
import Explore from "@/components/home/Explore";
import Favorites from "@/components/home/Favorites";
/* import dynamic from "next/dynamic";
const Favorites = dynamic(() => import("@/components/home/Favorites"), {});
const Explore = dynamic(() => import("@/components/home/Explore"), {}); */

/* import trojenaLogo from "../public/images/logos/trojena.jpg"; */
/* import trojenaBg from "../public/images/trojena-bg.jpg";
 */
/* import profilePic from "../public/images/hotel-5.png"; */
/* import { ExploreArray } from "data/data"; */

const url =
  "https://idp.kobilshift-app01-eotsr.shift.kobil.com/auth/realms/flutter/protocol/openid-connect/auth?client_id=test-openid&redirect_uri=https://neom-hotel.web.app/home&scope=openid&response_type=code&response_mode=fragment&nonce=o3w1vsredlp&prompt=none&display=popup";

export async function getStaticProps() {
  return {
    props: {
      exploreArray: ExploreArray,
      recommendedArray: RecommendedArray,
    },
  };
}
function Home({ exploreArray, recommendedArray }) {
  const [activeMenu, setActiveMenu] = React.useState("Explore");
  const [code, setCode] = React.useState(null);
  const [user, setUser] = React.useState(null);

  /*   React.useEffect(() => {
    setTimeout(() => {
      const location = document.getElementById("iframe").contentWindow.location;
      alert(JSON.stringify(location));
      console.log(location.href);
    }, 3000);
    return () => {};
  }, []); */
  React.useEffect(() => {
    const address =
      window.location.protocol + "//" + window.location.host + "/home";
    if (!code) {
      const urlParams = new URLSearchParams(window.location.href);
      const myParam = urlParams.get("code");

      if (myParam) {
        login(myParam, address);
      } else {
      }
    }
  }, []);

  const login = async (code, redirectUri) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    try {
      const response = await fetch("https://auth.hotel.westerops.com/login", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          code: code,
          redirectUrl: redirectUri,
        }),
      });
      if (!response.ok) {
        console.log("girdi");
        throw Error("a");
      }
      const result = await response.json();
      setUser(result.data);
    } catch (error) {
      console.log("girdi");
      console.log(error);
      window.location.assign(url);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      /* openidwindow = window.open(); */

      try {
        /*   openidwindow.location =
            "https://idp.kobilshift-app01-eotsr.shift.kobil.com/auth/realms/flutter/protocol/openid-connect/auth?client_id=test-openid&redirect_uri=http://test:3000/code&scope=openid&response_type=code&response_mode=query&nonce=o3w1vsredlp";
          */
        /*    openidwindow = window.open(
            "https://idp.kobilshift-app01-eotsr.shift.kobil.com/auth/realms/flutter/protocol/openid-connect/auth?client_id=test-openid&redirect_uri=http://test:3000/code&scope=openid&response_type=code&response_mode=query&nonce=o3w1vsredlp",
            "_blank",
            "toolbar=0,location=0,menubar=0"
          ); */
      } catch (error) {}

      /*      setTimeout(async () => {
          const urlParams = new URLSearchParams(openidwindow.location.href);

          const myParam = urlParams.get("code");
          if (user) {
            return;
          }
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          const response = await fetch(
            "https://auth.hotel.westerops.com/login",
            {
              method: "POST",
              headers: myHeaders,
              body: JSON.stringify({
                code: myParam,
                redirectUrl: "http://test:3000/code",
              }),
            }
          );
          const result = await response.json();
          setUser(result.data);
        }, 3000);

        openidwindow.addEventListener("load", async () => {
          const urlParams = new URLSearchParams(openidwindow.location.href);

          const myParam = urlParams.get("code");
          setCode(myParam);
          console.log(myParam);
          openidwindow.close();

          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          const response = await fetch(
            "https://auth.hotel.westerops.com/login",
            {
              method: "POST",
              headers: myHeaders,
              body: JSON.stringify({
                code: myParam,
                redirectUrl: "http://test:3000/code",
              }),
            }
          );
          const result = await response.json();
          setUser(result.data);
        }); */
    }, 1000);
  }, []);

  /*  React.useEffect(() => {
    const frame = document.getElementById("iframe");
    frame.src =
      "https://idp.kobilshift-app01-eotsr.shift.kobil.com/auth/realms/flutter/protocol/openid-connect/auth?client_id=test-openid&redirect_uri=http://test:3000/code&scope=openid&response_type=code&response_mode=query&nonce=o3w1vsredlp";
  }, []); */

  /* const handler = () => {
    console.log("girdi");
    if (!openidwindow) {
      openidwindow = window.open(
        "https://idp.kobilshift-app01-eotsr.shift.kobil.com/auth/realms/flutter/protocol/openid-connect/auth?client_id=test-openid&redirect_uri=http://test:3000/code&scope=openid&response_type=code&response_mode=query&nonce=o3w1vsredlp",
        "_blank",
        "toolbar=0,location=0,menubar=0"
      );
      console.log(openidwindow.location.href);
      if (openidwindow) {
        setTimeout(() => {
          const urlParams = new URLSearchParams(openidwindow.location.href);
          const myParam = urlParams.get("code");
          alert(myParam);
        }, 2000);
      } else {
        alert("açamadı");
      }
    }
  };
  React.useEffect(() => {
    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []); */
  const handler = () => {
    console.log("girdi");
    if (!openidwindow) {
      let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=1,left=-1000,top=-1000`;

      openidwindow = window.open(url, "_blank", params);
      openidwindow.focus();
      setTimeout(() => {
        openidwindow.close();
      }, 200);
      setTimeout(() => {
        openidwindow.close();

        alert(localStorage.getItem("code"));
      }, 2000);
      /*  if (openidwindow) {
        setTimeout(() => {
          console.log(openidwindow.location.href);

          const urlParams = new URLSearchParams(openidwindow.location.href);
          const myParam = urlParams.get("code");
          alert(myParam);
        }, 2000);
      } else {
        alert("açamadı");
      } */
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Neom Hotels</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      {activeMenu === "Explore" && (
        <Explore
          exploreArray={exploreArray}
          recommendedArray={recommendedArray}
          user={user}
        ></Explore>
      )}
      {activeMenu === "Favorites" && (
        <Favorites recommendedArray={recommendedArray} />
      )}
      <div style={{ height: 80 }}></div>
      <HomeMenu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      ></HomeMenu>
      {/* <button onClick={handler}>click</button> */}

      {/* <button
        id="frame"
        onClick={() => {
          openidwindow = window.open(
            "https://idp.kobilshift-app01-eotsr.shift.kobil.com/auth/realms/flutter/protocol/openid-connect/auth?client_id=test-openid&redirect_uri=http://test:3000/code&scope=openid&response_type=code&response_mode=query&nonce=o3w1vsredlp&prompt=none",
            "_blank",
            "toolbar=0,location=0,menubar=0"
          );
          alert(openidwindow);
          console.log(openidwindow);
        }}
      >
        aa
      </button> */}
    </div>
  );
}

export default Home;
