import createCard from "./index.js";
// import series from "./series/series.js";

const clsContent = () => {
  const listaSeries = document.getElementsByClassName("serie");
  while (listaSeries.length > 0) listaSeries[0].remove();
};

const DelItemArray = (arrayToMod, itemToMod, itemPos) => {
  //const arrayToMod = series;
  arrayToMod.series[itemPos][itemToMod] = true; // eslint-disable no-param-reassign
  clsContent();
  createCard();
};

export default DelItemArray;
