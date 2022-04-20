import series from "./series/series.js";

const modArray = (arrayToMod, itemPos, propToMod, newValue) => {
  debugger;
  switch (arrayToMod) {
    case "series":
      let serieToMod = series;
      serieToMod.series[itemPos].watched = newValue;
      break;
    default:
  }
};

export default modArray;
