const ModArray = (arrayToMod, itemPos, itemToMod, newValue) => {
  switch (itemToMod) {
    case "watched":
      arrayToMod.series[itemPos][itemToMod] = newValue;
      break;
    case "score":
      arrayToMod.series[itemPos][itemToMod] += 1;
      break;
    default:
  }
};
export default ModArray;
