import series from "./series/series.js";

const modArray = (arrayToMod, itemPos, propToMod, newValue) => {
  switch (arrayToMod) {
    case "series":
      const serieToMod = series;
      serieToMod.series[itemPos].watched = newValue;
      break;
    default:
  }
};

export default modArray;
