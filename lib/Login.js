var needle = require('needle');
var querystring = require('querystring');

exports.getToken = function(callback) {

  var username = 'rsac';
  var password = 'LCs5a324MBC2';
  var url = 'https://irwint.doi.gov/arcgis/tokens/generateToken';

  var post_data = querystring.stringify({
    'password':password,
    'username':username,
    'f': 'json',
    'expiration': '60'
  });

  needle.post(url, post_data, function(err, resp, body) {
    callback(body);
  });
};
