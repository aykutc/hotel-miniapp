/* import oxagonLogoWebp from "../public/images/logos/oxagon.png?webp";
import lineLogoWebp from "../public/images/logos/line.png?webp";
import trojenaLogoWebp from "../public/images/logos/trojena.png?webp"; */
/* import oxagonBg from "./public/images/trojena-bg.jpg";
import lineLogo from "./public/images/logos/trojena.jpg";
import lineBg from "./public/images/trojena-bg.jpg"; */
/* import oxagonBgWebp from "../public/images/oxagon-bg.jpg?webp";
import lineBgWebp from "../public/images/line-bg.jpg?webp";
import trojenaBgWebp from "../public/images/trojena-bg.jpg?webp";
import hotel1Webp from "../public/images/hotel1.jpg?webp";
import hotel2Webp from "../public/images/hotel2.jpg?webp";
import hotel3Webp from "../public/images/hotel3.jpg?webp"; */

const ExploreArray = [
  {
    title: "Trojena",
    description: "The mountains of NEOM",
    logo: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAADAFBMVEUAAAD/////////////////////////////////////////////////////////////////////////////////tmwdGD7+xIj++vn/vXj/sF///PuvXHb/s2X0mVz/qlP/oUj69PX/yJD/wH67aHX/p04hHUdtwtH/unG3bob+wIUzQW+xWGvVeV7/rVrzlFElIk9nvM+/fpO8d4yyY30oKlf9m0RzyNKYz7OpzZ+/dIIvOWaeOVj57ek+XYi2aH36u3f7snH5tm0rMV+qSl7gglfhdT/5/Pz47+95ytBeqMOR0Lz1wKD+zJjUh3rgi2mjRWP9qVi1Ulf9+fP+8OVgr8iL0cLLl6nDh5z8uH43T3v4smb4o2D+olL3mlLBWEj/ljr76d59zc2Cz8mGz8VLg6iizaZKfKHMjpZEapTIgor7vX/7tXc1SXSpUGu2XGn4pmbmj2XMZ1HcbDn/jizCQyJktctYob9VmrnPlJuuy5iyypNAZo/0s4k6WIK/am/Ldmz6q2vWgGn5rV33n1ntik7qgkW3SUT2iTjqeTXcZCrv9/f/9e305+n838bqw7xRkrRPiq3ot6nUn6b+0aNFcpi3yo7ZlYq6yoninIXGx3vJe3irVXDrmGz2kEWwNi/13NTlytL00sT30b7asr3TpbHdnpHopovCyH+/X1radU7jfUrug0D19utUj69Gd57PiYi+yYa/yILYkIE/UHvfkXfonnRoXXT+rmjHal7nilKsQ02XK0y9SDTf8fDn6emx2tvt1NXAws7hvsX/3btbnbrdr7Kf0KzlrJvxpXb3q3Xwn2rsk1/95tDqysev1rbg37Sczaz2xqn1vZqCYl3MXj/6hy/C4evX3OHs2d+O1NaX07r5zbCIkqvM1KCTgo2tdITNyoC+kXCkfGRKRmNrVV1hTVM0MVI3KkSVHDfrbh/fXhqY1eCWucrU5MiOrcdYf51wdJPvuoHUmmZCPmbGi12aMFJBMk6hKzjLUivZ4bucoK9hh6ZzfZqtiWfAgU8yxISlAAAAFHRSTlMA32AQcCDvv0CQr88wn7BfoI9Qb5LizAQAAAmhSURBVGjexZplXFNRGMbdUBQ7zlggMDZQnAzMWaiAjGEgCBhI2AmCYKIiJSogqBiIgIoI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",
    img: "trojena-bg.jpg",
  },
  {
    title: "Oxagon",
    description: "A blueprint for advanced & clean industries",
    logo: " data:image/png;base64,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",
    img: "oxagon-bg.jpg",
  },
  {
    title: "The Line",
    description: "A Revolution in Urban Living",
    logo: " data:image/png;base64,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",
    img: "line-bg.jpg",
  },
];
const RecommendedArray = [
  {
    id: 1,
    title: "The Ultra-Luxury Mansions",
    block: "Block A-21",
    discountPrice: "$174.43",
    price: "$164.99",

    distance: 60,
    rate: 4.9,
    reviews: "124",
    location: ", Neom, Saudi Arabia",
    phone: "+966 123 444 789",

    subTitle: "TROJENA",

    img: "recommended1.jpg",
    imgRect: "hotel1-rect.jpg",
  },
  {
    id: 2,
    title: "The Vault",
    block: "Block B-12",
    discountPrice: "$143.99",
    price: "$132.90",
    distance: 90,
    rate: 4.2,
    reviews: "227",
    location: ", Neom, Saudi Arabia",
    phone: "+966 123 000 789",
    subTitle: "TROJENA",
    block: "Block B-12",
    img: "recommended2.jpg",
    imgRect: "hotel3-rect.jpg",
  },
  {
    id: 3,
    title: "Ski Village",
    block: "Block A-42",
    discountPrice: "$243.99",
    price: "$234.43",

    rate: 4.4,
    distance: 120,
    reviews: "15",
    location: ", Neom, Saudi Arabia",
    phone: "+966 123 040 789",

    subTitle: "TROJENA",

    img: "recommended3.jpg",
    imgRect: "hotel2-rect.jpg",
  },
];
const HotelsArray = [
  {
    id: 1,
    title: "The Ultra-Luxury Mansions",
    block: "Block A-21",
    discountPrice: "$174.43",
    price: "$164.99",
    img: "hotel1.jpg",
    imgRect: "hotel1-rect.jpg",
    distance: 60,
    rate: 4.9,
    reviews: "124",
    location: ", Neom, Saudi Arabia",
    phone: "+966 123 444 789",

    type: "Feature",
    properties: {
      message: "164.99/night",
    },
    geometry: {
      type: "Point",
      coordinates: [35.4931741, 27.799901],
    },
  },
  {
    id: 2,
    title: "The Vault",
    block: "Block B-12",
    discountPrice: "$143.99",
    price: "$132.90",
    img: "hotel3.jpg",
    imgRect: "hotel3-rect.jpg",
    distance: 90,
    rate: 4.2,
    reviews: "227",
    location: ", Neom, Saudi Arabia",
    phone: "+966 123 000 789",

    type: "Feature",
    properties: {
      message: "132.90/night",
    },
    geometry: {
      type: "Point",
      coordinates: [35.1931741, 28.799901],
    },
  },
  {
    id: 3,
    title: "Ski Village",
    block: "Block A-42",
    discountPrice: "$243.99",
    price: "$234.43",
    img: "hotel2.jpg",
    imgRect: "hotel2-rect.jpg",
    rate: 4.4,
    distance: 120,
    reviews: "15",
    location: ", Neom, Saudi Arabia",
    phone: "+966 123 040 789",

    type: "Feature",
    properties: {
      message: "234.43/night",
    },
    geometry: {
      type: "Point",
      coordinates: [35.7931741, 29.799901],
    },
  },
];

const SearchRegionArray = [
  {
    title: "Trojena",
    logo: "region-trojena.jpg",
  },
  {
    title: "Oxagon",
    logo: "region-oxagon.jpg",
  },
  {
    title: "Line",
    logo: "region-line.jpg",
  },
];

const RoomSelectionArray = [
  {
    id: 1,
    title: "Superior King Room",
    info: "2 Guests | 1 King | 310 to 550 ft²",
    price: "$967.99",
    img: "room1.jpg",
  },
  {
    id: 2,
    title: "Deluxe King Room",
    info: "2 Guests | 1 King | 450 to 690 ft²",
    price: "$998.99",
    img: "room2.jpg",
  },
  {
    id: 3,
    title: "Terrace King Room",
    info: "2 Guests | 1 King | 450 to 550 ft²",
    price: "$1220",
    img: "room3.jpg",
  },
];
export {
  ExploreArray,
  RecommendedArray,
  SearchRegionArray,
  RoomSelectionArray,
  HotelsArray,
};

/* 
import oxagonLogoWebp from "../public/images/logos/oxagon.png";
import lineLogoWebp from "../public/images/logos/line.png";
import trojenaLogoWebp from "../public/images/logos/trojena.png";
 
import oxagonBgWebp from "../public/images/oxagon-bg.jpg";
import lineBgWebp from "../public/images/line-bg.jpg";
import trojenaBgWebp from "../public/images/trojena-bg.jpg";
import hotel1Webp from "../public/images/hotel1.jpg";
import hotel2Webp from "../public/images/hotel2.jpg";
import hotel3Webp from "../public/images/hotel3.jpg";
const ExploreArray = [
  {
    title: "TROJENA",
    description: "The mountains of NEOM",
    logo: trojenaLogoWebp,
    logoWebp: trojenaLogoWebp,
    img: trojenaBgWebp,
    imgWebp: trojenaBgWebp,
  },
  {
    title: "OXAGON",
    description: "A blueprint for advanced & clean industries",
    logo: oxagonLogoWebp,
    logoWebp: oxagonLogoWebp,
    img: oxagonBgWebp,
    imgWebp: oxagonBgWebp,
  },
  {
    title: "THE LINE",
    description: "A Revolution in Urban Living",
    logo: lineLogoWebp,
    logoWebp: lineLogoWebp,
    img: lineBgWebp,
    imgWebp: lineBgWebp,
  },
];
const RecommendedArray = [
  {
    subTitle: "TROJENA",
    title: "The Ultra-Luxury Mansions",
    block: "Block A-21",
    discountPrice: "$114.99",
    price: "$124.43",
    img: hotel1Webp,
    imgWebp: hotel1Webp,
  },
  {
    subTitle: "TROJENA",
    title: "The Vault",
    block: "Block B-12",
    discountPrice: "$123.99",
    price: "$132.90",
    img: hotel2Webp,
    imgWebp: hotel2Webp,
  },
  {
    subTitle: "TROJENA",
    title: "Ski Village",
    block: "Block A-42",
    discountPrice: "$123.99",
    price: "$134.43",
    img: hotel3Webp,
    imgWebp: hotel3Webp,
  },
];
export { ExploreArray, RecommendedArray };
 */
