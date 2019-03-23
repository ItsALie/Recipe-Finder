var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});


var updateComment = "";
var userId = "";
var recipeId = "";
con.connect(function(err) {
  if (err) throw err;
  con.query("UPDATE Comments set comment = "+updateComment+" WHERE user_id ="+userId+", recipe_id = "+recipeId, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});