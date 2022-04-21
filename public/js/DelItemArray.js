import createCard from "./index.js";

const clsContent = () => {
  const listaSeries = document.getElementsByClassName("serie");
  while (listaSeries.length > 0) listaSeries[0].remove();
};

const DelItemArray = (arrayToMod, itemToMod, itemPos) => {
  arrayToMod.series[itemPos][itemToMod] = true;
  clsContent();
  createCard();
};

export default DelItemArray;
