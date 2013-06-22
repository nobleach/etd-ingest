exports.truncateFloat = function(coordinate) {
  coordinate = coordinate + "";
  var coordArray = coordinate.split(".");
  return parseFloat(coordArray[0] + '.' + coordArray[1].substring(0,3));
}