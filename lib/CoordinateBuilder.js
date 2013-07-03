exports.roundAndPadFloat = function(coordinate) {
  // coordinate = coordinate + "";
  // var coordArray = coordinate.split(".");
  // return parseFloat(coordArray[0] + '.' + coordArray[1].substring(0,3)).toFixed(3);
  // coordinate = Math.abs(coordinate);
  // coordinate *= 1000;
  // coordinate = Math.round(coordinate);
  // coordinate /= 1000;
  // return coordinate;
  return coordinate.toFixed(3);
}