var http = require('http');
var querystring = require('querystring');

exports.getToken = function(callback) {
  var username = 'rsac';
  var password = 'LCs5a324MBC2';
  var post_data = querystring.stringify({
    'password':password,
    'username':username,
    'f': 'json',
    'client':'referer',
    'referer':'http://svinetfc6.fs.fed.us/rsacfod',
    'expiration': '60',
    'encrypted': false
  });
  var options = {
    host: 'irwint.doi.gov',
    path: '/arcgis/tokens/generateToken',
    port: 443,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(post_data)
    }
  };

  console.log('Contacting server ' + options.host);
  // console.log(options);
  var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('Response: ' + chunk);
    });
  });

    // post the data
  req.write(post_data);
  req.end();
};
