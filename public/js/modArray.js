const modArray = (arrayToMod, itemPos, propToMod, newValue) => {
  switch (propToMod) {
    case "watched":
      arrayToMod[itemPos].propToMod = newValue;
      break;
    case "score":
      arrayToMod[itemPos].propToMod += 1;
      break;
    default:
  }
};

export default modArray;
