const modArray = (arrayToMod, position, property, newvalue) => {
  // arrayToMod[position].(property) = newvalue};
  arrayToMod[position] = newvalue;
};

export default modArray;
