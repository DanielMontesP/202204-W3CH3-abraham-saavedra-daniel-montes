import series from "./series/series.js";

const modArray = (arrayToMod, itemPos, propToMod, newValue) => {
  switch (arrayToMod) {
    case "series":
      series.series[itemPos].watched = newValue;
      break;
    default:
  }
};

export default modArray;
