

exports.generateId = function(state, lat, lon, ig_date) {
  var pad = require('../lib/Pad.js');
  var dateParser = require('../lib/DateParser.js')
  // lat = lat.toFixed(3);
  // lat = lat+"";
  // var latArray = lat.split(".");
  // // var latDecimalAsString = latArray[1].substring(0,3);
  // var latDecimalAsString = latArray[1];
  // lon = Math.abs(lon);
  // lon = lon.toFixed(3);
  // lon = lon+"";
  // var lonArray = lon.split(".");
  // // var lonDecimalAsString = lonArray[1].substring(0,3);
  // var lonDecimalAsString = lonArray[1];
  lat = lat.toFixed(3).replace(".", "");
  lon = Math.abs(lon);
  lon = lon.toFixed(3).replace(".", "");
  console.log("****** longitude: "+ pad.padLeft(lon));
  return state + lat + pad.padLeft(lon, 3) + dateParser.parseWithNoDashes(ig_date);

}