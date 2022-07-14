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
};
