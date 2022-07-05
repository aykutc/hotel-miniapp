import Callendar from "@/components/Calendar";
import HeaderTitle from "@/components/HeaderTitle";
import React from "react";
import FloatingBottomButton from "@/components/FloatingBottomButton";
import Back from "@/components/icons/Back";
import OptimizedImage from "@/components/OptimizedImage";
import styles from "./hotel-detail.module.css";
import Arrow from "@/components/icons/Arrow";
import Like from "@/components/icons/Like";
import Share from "@/components/icons/Share";
import Star from "@/components/icons/Star";
import RecommendedCard from "@/components/RecommendedCard";
import { RecommendedArray } from "data/data";
import Dining from "@/components/icons/Dining";
import Fitness from "@/components/icons/Fitness";
import Spa from "@/components/icons/Spa";
import Parking from "@/components/icons/Parking";
import Accessibility from "@/components/icons/Accessibility";
import Calendar from "@/components/icons/Calendar";
import Bed from "@/components/icons/Bed";
import SummaryCard from "@/components/HotelDetails/SummaryCard";

export async function getStaticProps() {
  return {
    props: {},
  };
}
function HotelDetail(props) {
  const [hotelDetail, setHotelDetail] = React.useState({
    subTitle: "TROJENA",
    title: "The Ultra-Luxury Mansions",
    block: "Block A-21",
    discountPrice: "$114.99",
    price: "$124.43",
    img: "hotel1.jpg",
    rate: "4.9",
    reviews: "227",
    location: "Trojena, Neom, Saudi Arabia",
    phone: "+966 123 456 789",
    amenities: [
      { icon: <Dining />, name: "Dining" },
      { icon: <Fitness />, name: "Fitness" },
      { icon: <Spa />, name: "Spa" },
      { icon: <Parking />, name: "Parking & Transit" },
      { icon: <Accessibility />, name: "Accessibility" },
    ],
    booking: {
      calander: {
        date: "Jun 24 - Jun 27",
        time: "3",
      },
      room: {
        count: 1,
        adult: 1,
        child: 0,
      },
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.circle}>
          <Arrow rotate="left" color="white" />
        </div>
        <div className={styles.headerRightSide}>
          <div className={styles.circle}>
            <Like />
          </div>
          <div className={styles.circle}>
            <Share />
          </div>
        </div>
      </div>
      <OptimizedImage
        style={{
          height: "294px",
          width: "100%",
        }}
        src={hotelDetail.img}
        type="jpg"
      />

      <div className={styles.detailContainer}>
        {true ? (
          <SummaryCard
            style={{
              marginTop: "-82px",
              marginBottom: "24px",
            }}
            hotelName="The Ultra-Luxury Mansions"
            digitalKeyOnCkick={() => {}}
            messageOnClick={() => {}}
            checkInOnClick={() => {}}
            confirmCode={"Confirmation #0099123456"}
            totalDay="3"
            checkIn={{
              date: 24,
              day: "FRI",
              month: "JUN",
            }}
            checkOut={{
              date: 27,
              day: "MON",
              month: "JUN",
            }}
          />
        ) : (
          <>
            {/* Detail Start  */}
            <div className={styles.tag}>
              <p className={styles.hotelName}>{hotelDetail.subTitle}</p>
            </div>
            <div className={styles.textArea}>
              <p className={styles.title}>{hotelDetail.title}</p>
              <p className={styles.description}>{hotelDetail.block}</p>
            </div>
            <div className={styles.ratingArea}>
              <Star />
              <p className={styles.rate}>{hotelDetail.rate}</p>
              <span className={styles.divider} />
              <p className={styles.reviews}>{hotelDetail.reviews} reviews</p>
            </div>

            {/* Detail End  */}

            {/* Room Start  */}
            <div className={styles.roomContainer}>
              <div className={styles.dateWrapper}>
                <Calendar />
                <div className={styles.roomTextWrapper}>
                  <p className={styles.roomTitle}>
                    {hotelDetail.booking.calander.date}
                  </p>
                  <p className={styles.roomSubTitle}>
                    {hotelDetail.booking.calander.time} Nights
                  </p>
                </div>
              </div>
              <div className={styles.roomContainerDivider} />
              <div className={styles.roomWrapper}>
                <Bed />
                <div className={styles.roomTextWrapper}>
                  <p className={styles.roomTitle}>
                    {hotelDetail.booking.room.count} Room
                  </p>
                  <p className={styles.roomSubTitle}>
                    {hotelDetail.booking.room.adult} Adult
                  </p>
                </div>
              </div>
            </div>
            {/* Room Start  */}
          </>
        )}

        {/* Map Detail Start  */}
        <div className={styles.mapDetailContainer}>
          <OptimizedImage src={"map.jpg"} type="jpg" />
          <div className={styles.mapDetail}>
            <p className={styles.locationText}>{hotelDetail.location}</p>
            <p className={styles.phoneText}>{hotelDetail.phone}</p>
          </div>
        </div>
        {/* Map Detail End  */}

        {/* About Start  */}
        <div className={styles.aboutContainer}>
          <div className={styles.title}>About</div>
          <p className={styles.aboutText}>
            TROJENA will redefine mountain tourism for the world by creating a
            place based on the principles of ecotourism, highlighting our
            efforts to preserve nature and enhance the ....
          </p>
          <span className={styles.readMore}>Read More</span>
          <div className={styles.horizontalDivider}></div>
        </div>
        {/* About End  */}

        {/* Amenities Start  */}
        <div className={styles.amentiensContainer}>
          <div className={styles.title}>Amenities</div>
          {hotelDetail.amenities.map((amenity, index) => {
            return (
              <>
                <div className={styles.amenity} key={amenity.name + index}>
                  <div>{amenity.icon}</div>
                  <div className={styles.amenityText}>{amenity.name}</div>
                </div>
                <div className={styles.horizontalDivider} />
              </>
            );
          })}
        </div>
        {/* Amenities End  */}

        {/* Recommend Start  */}
        <div className={styles.title}>You May Also Like</div>
        <div className={styles.recommendedContainer}>
          {RecommendedArray.map((item) => {
            return (
              <RecommendedCard
                key={item.title}
                title={item.title}
                subTitle={item.subTitle}
                block={item.block}
                img={item.img}
                imgWebp={item.imgWebp}
                price={item.price}
                discountPrice={item.discountPrice}
                imageStyles={{ width: "100%", height: 118, display: "block" }}
              ></RecommendedCard>
            );
          })}
        </div>
        {/* Recommend End  */}
      </div>
    </div>
  );
}

export default HotelDetail;