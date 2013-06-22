
exports.padLeft = function(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

exports.padRight = function(num, size) {
  var s = num+"";
  while (s.length < size) s = s + "0";
  return s;
}