const saveItem = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};

const saveRegion = (value) => {
  saveItem("region", value);
};
