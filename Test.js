console.log("here");
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "G0W/The_Fl0w",
  database: "monkeytypedb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);

  });
/*
var sql = 'INSERT INTO sentences(number, sentence) VALUES (1,"The quick brown fox jumped over the lazy dog")'
con.query(sql, function (err, result, fields){
  if (err) throw err;
  console.log(result);
});
*/
con.query("SELECT * FROM sentences", function (err, result, fields){
  if (err) throw err;
  console.log(result);
});
var name = "Anthony";
var sql1 = "SELECT * FROM users WHERE usernames = " + mysql.escape(name);
con.query(sql1, function(err, result, fields){
  if (err) throw err;
  console.log(result[0].passwords);
});
});
