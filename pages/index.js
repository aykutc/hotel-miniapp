import { ExploreArray, RecommendedArray, SearchRegionArray } from "data/data";

import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import HomeMenu from "@/components/HomeComponents/HomeMenu";
import Explore from "@/components/HomeComponents/Explore";
/* import Favorites from "@/components/HomeComponents/Favorites";
 */ import HeaderTitle from "@/components/HeaderTitle";
import Stays from "@/components/HomeComponents/Stays";
import SearchBar from "@/components/SearchBar";
import Back from "@/components/icons/Back";
import SearchContent from "@/components/HomeComponents/SearchContent";
import { getHomeActiveTab, saveRegion } from "data/api";
import Router from "next/router";
import dynamic from "next/dynamic";
const Favorites = dynamic(
  () => import("@/components/HomeComponents/Favorites"),
  {}
);

export async function getStaticProps() {
  return {
    props: {
      exploreArray: ExploreArray,
      recommendedArray: RecommendedArray,
      searchData: SearchRegionArray,
    },
  };
}
function Home({ exploreArray, recommendedArray, searchData }) {
  const [activeMenu, setActiveMenu] = React.useState("Explore");
  const [focusedSearch, setFocusedSearch] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (activeMenu) {
      window.document?.getElementById("exploreContainer")?.scroll(0, 105);
    }
  }, [activeMenu]);

  React.useEffect(() => {
    setActiveMenu(getHomeActiveTab() || "Explore");
  }, []);
  const generateUrl = (redirectUri) => {
    const url =
      "https://idp.kobilshift-app01-eotsr.shift.kobil.com/auth/realms/flutter/protocol/openid-connect/auth?client_id=test-openid&redirect_uri=" +
      redirectUri +
      "&scope=openid&response_type=code&response_mode=query&nonce=o3w1vsredlp";
    return url;
  };

  React.useEffect(() => {
    const _login = async () => {
      const address = window.location.protocol + "//" + window.location.host;
      const user = await checkLogin();
      if (user) {
        setUser(user);
        return;
      }
      const urlParams = new URLSearchParams(window.location.href);
      const myParam = urlParams.get("code");
      console.log(myParam);
      if (myParam) {
        login(myParam, address, generateUrl(address));
      } else {
        window.location.assign(generateUrl(address));
      }
    };
    _login();
  }, []);

  const checkLogin = async () => {
    const user = localStorage.getItem("user");

    if (user) {
      const userObj = JSON.parse(user);
      if (userObj.expire > new Date().getTime()) {
        userObj.name = userObj.name + " local";

        return userObj;
      }
    }
  };
  const login = async (code, redirectUri, authAddress) => {
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
      console.log(response);
      if (!response.ok) {
        console.log("girdi");
        throw Error("a");
      }

      const result = await response.json();
      const userObj = result.data;
      userObj.expire = new Date().getTime() + 60 * 60 * 1000;
      localStorage.setItem("user", JSON.stringify(userObj));
      setUser(result.data);
    } catch (error) {
      console.log("error", error);
      window.location.assign(authAddress);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Neom Hotels</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      {(activeMenu === "Explore" || focusedSearch) && (
        <div className="header">
          <HeaderTitle>
            <div style={{ marginRight: 6 }}>HI</div>
            {user ? (
              user.name + ","
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="shine"
                  style={{ width: 100, height: 16, marginLeft: 4 }}
                ></div>
              </div>
            )}
          </HeaderTitle>
        </div>
      )}
      {/* <BottomSheet></BottomSheet> */}
      {activeMenu === "Explore" && (
        <>
          <div className="exploreContainer" id="exploreContainer">
            <div className="searchContainer">
              <div className="search">
                {focusedSearch && (
                  <Back
                    onClick={() => {
                      setFocusedSearch(false);
                      setSearchTerm("");
                    }}
                  ></Back>
                )}
                <SearchBar
                  value={searchTerm}
                  onFocus={() => {
                    setFocusedSearch(true);
                  }}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                ></SearchBar>
              </div>
              {focusedSearch ? (
                <SearchContent
                  searchTerm={searchTerm}
                  searchData={searchData}
                  onClick={(value) => {
                    saveRegion(value);

                    Router.push({
                      pathname: "/date-selection",
                    });
                  }}
                ></SearchContent>
              ) : (
                <Explore
                  exploreArray={exploreArray}
                  recommendedArray={recommendedArray}
                  user={user}
                ></Explore>
              )}
            </div>
            {!focusedSearch && <div className="any"></div>}
          </div>
        </>
      )}

      {activeMenu === "Favorites" && (
        <Favorites recommendedArray={recommendedArray} />
      )}
      {activeMenu === "Stays" && <Stays />}
      <div style={{ height: 100 }}></div>
      {!focusedSearch && (
        <HomeMenu
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        ></HomeMenu>
      )}

      <style jsx>{`
        .search {
          padding-right: 24px;
          width: 100%;
          margin-top: 41px;
          margin-bottom: 16px;
          display: flex;
          flex: 1;
        }

        .exploreContainer {
          position: relative;
          overflow: scroll;
          height: ${focusedSearch ? "unset" : "95vh"};

          /* transform: translateY(-200px); */
        }
        .searchContainer {
          /* background-color: yellow; */
        }
        .header {
          height: 58px;
          display: flex;
          align-items: center;
        }
        .any {
          height: 200px;
        }
      `}</style>
    </div>
  );
}

export default Home;
