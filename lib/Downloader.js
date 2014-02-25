var needle = require('needle');
exports.getUpdates = function(url, callback) {
  console.log("\nDownloading from " + url);
  needle.get(url, function(err, resp, body) {
    callback(body);
  });
};
