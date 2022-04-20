export default const modArray = (arrayToMod, position, property, newvalue) => {
  arrayToMod[position].(property) = newvalue;
};
