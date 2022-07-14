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

export { replaceAll, getDate };
