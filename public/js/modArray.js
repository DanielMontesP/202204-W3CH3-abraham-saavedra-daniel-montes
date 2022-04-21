//const modArray = (arrayToMod, itemPos, newValue) => {
const ModArray = (arrayToMod, itemPos, itemToMod, newValue) => {
  debugger;
  switch (itemToMod) {
    case "watched":
      arrayToMod.series[itemPos][itemToMod] = newValue;
      break;
    case "score":
      arrayToMod.series[itemPos][score] += 1;
      break;
    default:
  }
};
export default ModArray;
