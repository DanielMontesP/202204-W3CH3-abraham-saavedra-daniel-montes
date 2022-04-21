const modArray = (arrayToMod, itemPos, propToMod, newValue) => {
  switch (propToMod) {
    case "watched":
      arrayToMod.series[itemPos].watched = newValue;
      break;
    case "score":
      arrayToMod.series[itemPos].watched = newValue;
      break;
    default:
  }
};

export default modArray;
