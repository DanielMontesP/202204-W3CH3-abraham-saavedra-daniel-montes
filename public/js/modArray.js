const ModArray = (arrayToMod, itemPos, itemToMod, newValue) => {
  switch (itemToMod) {
    case "watched":
      arrayToMod.series[itemPos][itemToMod] =
        newValue; /* eslint-disable no-param-reassign */
      break;
    case "score":
      arrayToMod.series[itemPos][
        itemToMod
      ] += 1; /* eslint-disable no-param-reassign */
      break;
    default:
  }
};

export default ModArray;
