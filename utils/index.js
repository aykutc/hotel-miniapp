function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
function getDate(str) {
  const parts = str.split("/");
  const dt = new Date(
    parseInt(parts[2], 10),
    parseInt(parts[1], 10) - 1,
    parseInt(parts[0], 10)
  );

  return dt;
}

const formattedDate = (date) => {
  if (!date) {
    return "";
  }
  return new Date(date)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, " ");
};

function safeParseFloat(val) {
  return parseFloat(isNaN(val) ? val.replace(/[^\d\.]+/g, "") : val);
}
export { replaceAll, getDate, safeParseFloat, formattedDate };
