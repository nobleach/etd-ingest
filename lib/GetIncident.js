exports.incidentExists = function(incident_name, event_id, callback) {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'rsacfod',
    password : 'rsacfodadmin',
    database : 'rsacfod'
  });
  connection.connect();
  var query = "SELECT * FROM fires WHERE incident_name = '"+incident_name+"' AND event_id = '"+event_id+"'";
  connection.query(query, function(err, rows, fields) {
    if (err) throw err;
    var result = rows.length != 0;

    connection.end();
    callback(result);
  });

}