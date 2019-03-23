var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});


var userId = "";
con.connect(function(err) {
  if (err) throw err;
  con.query("DELETE FROM recipe_ingredients WHERE user_id ="+userId+";\n"+
            "DELETE FROM ingredient WHERE user_id ="+userId+";\n"+
            "DELETE FROM comments WHERE user_id ="+userId+";\n"+
            "DELETE FROM recipes WHERE user_id ="+userId+";\n"+
            "DELETE FROM users WHERE user_id ="+userId+";\n", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


