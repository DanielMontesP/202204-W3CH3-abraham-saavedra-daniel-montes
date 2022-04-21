const modArray = (arrayToMod, itemPos, propToMod, newValue) => {
  switch (propToMod) {
    case "watched":
      arrayToMod[itemPos].watched = newValue;
      break;
    case "score":
      arrayToMod[itemPos].watched += 1;
      break;
    default:
  }
};

export default modArray;
