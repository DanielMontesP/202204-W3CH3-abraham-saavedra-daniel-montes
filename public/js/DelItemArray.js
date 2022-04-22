import createCard from "./index.js";

const clsContent = () => {
  const listaSeries = document.getElementsByClassName("serie");
  while (listaSeries.length > 0) listaSeries[0].remove();
};

const DelItemArray = (arrayToMod, itemToMod, itemPos) => {
  debugger;
  arrayToMod.series[itemPos][itemToMod] = true; // eslint-disable no-param-reassign
  clsContent();
  createCard();
};

export default DelItemArray;
