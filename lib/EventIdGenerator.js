

exports.generateId = function(state, lat, lon, ig_date) {
  // var pad = new Pad();
  var pad = require('../lib/Pad.js');
  var dateParser = require('../lib/DateParser.js')
  lat = lat+"";
  var latArray = lat.split(".");
  var latDecimalAsString = latArray[1].substring(0,3);
  lon = Math.abs(lon);
  lon = lon+"";
  var lonArray = lon.split(".");
  var lonDecimalAsString = lonArray[1].substring(0,3);
  return state + latArray[0] + pad.padRight(latDecimalAsString, 3) + pad.padLeft(lonArray[0], 3) + pad.padRight(lonDecimalAsString, 3) + dateParser.parseWithNoDashes(ig_date);
}