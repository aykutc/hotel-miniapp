const saveItemSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const getItemSessionStroage = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};
const saveItemLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItemLocalStroage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const getRegion = (value) => {
  return getItemSessionStroage("region");
};
const saveRegion = (value) => {
  saveItemSessionStorage("region", value);
};
const getRoomSelection = (value) => {
  return getItemSessionStroage("room");
};
const saveRoomSelection = (value) => {
  saveItemSessionStorage("room", value);
};
const getDateSelection = (value) => {
  return getItemSessionStroage("date");
};
const saveDateSelection = (value) => {
  saveItemSessionStorage("date", value);
};

const saveHotel = (value) => {
  saveItemSessionStorage("hotel", value);
};
const getHotel = (value) => {
  return getItemSessionStroage("hotel");
};
const saveFilter = (value) => {
  saveItemSessionStorage("filter", value);
};
const getFilter = (value) => {
  return getItemSessionStroage("filter");
};

const saveHomeActiveTab = (value) => {
  saveItemSessionStorage("homeActiveTab", value);
};
const getHomeActiveTab = (value) => {
  return getItemSessionStroage("homeActiveTab");
};

const saveFavorites = (value) => {
  saveItemLocalStorage("favorites", value);
};
const getFavorites = (value) => {
  return getItemLocalStroage("favorites");
};
const saveStays = (value) => {
  saveItemLocalStorage("stays", value);
};
const getStays = (value) => {
  const result = getItemLocalStroage("stays");
  if (!result) {
    return [
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
        confirmCode: 1323423,
        location: ", Neom, Saudi Arabia",
        phone: "+966 123 000 789",
        checkIn: "16 July 2022",
        checkOut: "25 July 2022",
        duration: 9,
      },

      {
        id: 1,
        title: "TEST",
        block: "Block B-12",
        discountPrice: "$143.99",
        price: "$132.90",
        img: "hotel3.jpg",
        imgRect: "hotel3-rect.jpg",
        distance: 90,
        rate: 4.2,
        reviews: "227",
        confirmCode: 13243423,
        location: ", Neom, Saudi Arabia",
        phone: "+966 123 000 789",
        checkIn: "1 June 2022",
        checkOut: "5 June 2022",
        duration: 4,
      },
    ];
  }
  return result;
};

export {
  saveRegion,
  saveHomeActiveTab,
  getHomeActiveTab,
  getRegion,
  saveDateSelection,
  getDateSelection,
  getRoomSelection,
  saveRoomSelection,
  saveHotel,
  getHotel,
  getFavorites,
  saveFavorites,
  saveFilter,
  getFilter,
  saveStays,
  getStays,
};
