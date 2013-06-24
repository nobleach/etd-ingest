
exports.getForestName = function(incident_id, callback) {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'rsacfod',
    password : 'rsacfodadmin',
    database : 'rsacfod'
  });
  connection.connect();
  var query = "SELECT unit_name, fregion FROM agencies WHERE st_unit_id = " + "'" + incident_id.substr(0, 6) + "'";
  connection.query(query, function(err, rows, fields) {
    if (err) throw err;
    var result = { forest: null, fregion: null };

    if(rows.length != 0) {
      result.forest = rows[0].unit_name;
      result.fregion = rows[0].fregion;
    }

    connection.end();
    callback(result);
  });

}