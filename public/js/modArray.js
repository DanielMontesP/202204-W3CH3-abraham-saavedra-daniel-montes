import series from "./series/series.js";

const modArray = (arrayToMod, itemPos, propToMod, newValue) => {
  switch (arrayToMod) {
    case "series":
      arrayToMod = series;
      break;
    default:
  }
  switch (propToMod) {
    case "watched":
      arrayToMod.series[itemPos].watched = newValue;
      break;
    case "score":
      arrayToMod.series[itemPos].watched = newValue;
      break;
    default:
  }
};

export default modArray;
