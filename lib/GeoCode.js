var http = require('http');
exports.getPathRowState = function(lat, lng, callback) {
  var url = 'http://localhost:4444/geocode/'+lat+'/'+lng;
  http.get(url, function(res) {
    var json = '';
    res.on('data', function (chunk) {
      json += chunk;
    });
    res.on('end', function() {
      locationObj = JSON.parse(json);
      var path = null,
          row = null,
          state_abbr = null;
      if(locationObj.status == "OK") {
        path = locationObj.path;
        row = locationObj.row;
        state_abbr = locationObj.state_abbr;
      }
      callback(locationObj);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });

}