var http = require('http');

exports.getToken = function(callback) {
  var username = 'rsac';
  var password = 'LCs5a324MBC2';
  var options = {
    hostname: 'https://irwint.doi.gov',
    path: '/arcgis/rest/services/Irwin/MapServer/exts/Irwin',
    port: 80,
    method: 'POST',
    auth: username + ':' + password
  }
  http.request(options, function(res) {
    var token;
    res.on('data', function (data) {
      console.log('receiving data');
      token += data; 
    });
    res.on('end', function() {
      callback(token);      
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
};
