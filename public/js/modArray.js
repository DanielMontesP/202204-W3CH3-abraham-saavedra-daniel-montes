import series from "./series/series.js";

const modArray = (arrayToMod, itemPos, newValue) => {
  switch (arrayToMod) {
    case "watched":
      series.series[itemPos].watched = newValue;
      break;
    case "series":
      series.series[itemPos].watched = newValue;
      break;
    default:
  }
};

export default modArray;
