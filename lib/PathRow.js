exports.fromLatLng = function(lat, lng, callback) {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'rsacfod',
    password : 'rsacfodadmin',
    database : 'rsacfod'
  });
  connection.connect();
  var result = {};
  // return {path1: 29, path2: 28, row1: 36, row2: 36};
  var query = "SELECT path, row FROM pathrows WHERE WITHIN(GeomFromText('POINT("+lng+" "+lat+")'), the_geom)"
  connection.query(query, function(err, rows, fields) {
    if (err) throw err;

    var paths = {};
    paths.path1 = rows[0].path;
    paths.row1 = rows[0].row;
    if(rows.length > 1) {
      paths.path2 = rows[1].path;
      paths.row2 = rows[1].row;
    } else {
      paths.path2 = null;
      paths.row2 = null;
    }
    connection.end();
    callback(paths);
  });

}