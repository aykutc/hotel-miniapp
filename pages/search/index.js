import HeaderTitle from "@/components/HeaderTitle";
import Back from "@/components/icons/Back";
import OptimizedImage from "@/components/OptimizedImage";
import SearchBar from "@/components/SearchBar";
import Title from "@/components/Title";
import { SearchRegionArray } from "data/data";
import Head from "next/head";
import React from "react";
export async function getStaticProps() {
  return {
    props: {
      searchData: SearchRegionArray,
    },
  };
}
function Search({ searchData }) {
  const inputRef = React.useRef();
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const result =
    searchTerm.length > 2
      ? searchData.filter((item) => {
          return (
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) === true
          );
        })
      : searchData;

  return (
    <>
      <div className="container">
        <Head>
          <title>Search</title>
          <meta name="description" content="Region Search" />
        </Head>
        <div className="header">
          <HeaderTitle>Hi Emily,</HeaderTitle>
        </div>

        <div className="searchContainer">
          <Back></Back>
          <SearchBar
            inputRef={inputRef}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          ></SearchBar>
        </div>
        <div className="content">
          <Title>Search by NEOM Region</Title>
          <div style={{ height: 16 }}></div>
          <div className="resultContainer">
            {result.map((item) => {
              return (
                <>
                  <div className="item">
                    <OptimizedImage
                      src={item.logo}
                      style={{ width: "100%", height: "unset" }}
                    ></OptimizedImage>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding-top: 18px;
          padding-left: 24px;
        }
        .searchContainer {
          width: 100%;
          margin-top: 41px;
          display: flex;
          flex: 1;
          padding-right: 24px;
        }
        .content {
          margin-top: 40px;
        }
        .resultContainer {
          display: flex;
          padding: 12px;
          padding-left: 0px;
          gap: 12px;
        }
        .item {
          width: 100px;
          height: 100px;
          padding: 4px;
          transition: all 0.5s;
        }
        .item:active {
          border-radius: 4px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        }
      `}</style>
    </>
  );
}

export default Search;
