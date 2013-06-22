var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'rsacfod',
  password : 'rsacfodadmin',
  database : 'rsacfod'
});

connection.connect();
var query = "SELECT * FROM imports WHERE id = 1029";
console.log(query);
connection.query(query, function(err, rows, fields) {
  if (err) throw err;

  connection.end();
  console.log(rows);
});