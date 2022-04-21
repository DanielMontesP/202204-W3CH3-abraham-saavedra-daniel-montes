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
      series.series[itemPos].watched = newValue;
      break;
    case "score":
      series.series[itemPos].watched = newValue;
      break;
    default:
  }
};

export default modArray;
