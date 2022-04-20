const delItemArray = (arrayToMod, position) => {
  // arrayToMod[position].(property) = newvalue};
  arrayToMod[position].borrado = true;
};

export default delItemArray;
