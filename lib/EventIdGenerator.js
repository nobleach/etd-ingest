

exports.generateId = function(state, lat, lon, ig_date) {
  var pad = require('../lib/Pad.js');
  var dateParser = require('../lib/DateParser.js');
  lat = lat + "";
  lon = lon + "";
  lat_array = lat.split('.');
  lon_array = lon.split('.');
  return state + lat_array[0] + lat_array[1] + pad.padLeft(lon_array[0].replace("-",""), 3) + lon_array[1] + dateParser.parseWithNoDashes(ig_date);

}