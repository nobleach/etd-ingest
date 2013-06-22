var http = require('http');
exports.getLocation = function(lat, lng, callback) {
  var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=false';
  http.get(url, function(res) {
    var json = '';
    res.on('data', function (chunk) {
      json += chunk;
    });
    res.on('end', function() {
      locationObj = JSON.parse(json);
      var city = locationObj.results[1].address_components[1].short_name;
      var state = locationObj.results[1].address_components[2].short_name;
      callback({city: city, state: state});
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });

}