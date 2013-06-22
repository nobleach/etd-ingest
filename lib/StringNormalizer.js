exports.replaceCarriageReturns = function(str) {
  var regxp = /\r\n/g
  str = str.replace(regxp, " ");
  return str;
}

exports.replaceNewlines = function(str) {
  return str.replace(/[\n]/g, '^^');
}

exports.removeStringEnd = function(str) {
  return str.substring(0, str.length - 2)
}