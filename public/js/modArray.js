import series from "./series/series.js";

const modArray = (itemPos, propToMod, newValue) => {
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
