var http = require('http');
exports.downloadString = function(str, callback) {
  console.log("\nDownloading from " + str);
  http.get(str, function(res) {
    var data = [];
    // console.log("Got response: " + res.statusCode);
    res.on('data', function (chunk) {
      data.push(chunk);
    });
    res.on('end', function() {
      callback(data.join(''));
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
};