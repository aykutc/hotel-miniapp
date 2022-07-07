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

const saveRegion = (value) => {
  saveItemSessionStorage("region", value);
};

const saveHomeActiveTab = (value) => {
  saveItemSessionStorage("homeActiveTab", value);
};
const getHomeActiveTab = (value) => {
  return getItemSessionStroage("homeActiveTab");
};

export { saveRegion, saveHomeActiveTab, getHomeActiveTab };
