var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login Form' });
});

router.get('/search', function(req, res, next) {
  res.render('search', { title: 'Recipe Finder' });
});

router.get('/recipes', findRecipes,  renderRecipesPage);  

router.get('/recipe_details', findRecipeDetails, findIngredients, findComments, renderRecipeDetailsPage);  


function findRecipes(req, res, next) {
    var con = mysql.createConnection({
      host: "localhost",
      user: "admin",
      password: "admin"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

    con.query(("SELECT * FROM recipefinderdatabase.RECIPES WHERE NAME LIKE '%" + req.query.search + "%';"), function (err, rows, fields) {
      if (err) throw err
        if(rows.length !== 0) {
            req.recipes = rows;
            return next();
        }
    });
}

function renderRecipesPage(req, res) {
    res.render('recipes', { title: 'Recipes', recipes: req.recipes});
}

function findRecipeDetails(req, res, next) {
    var con = mysql.createConnection({
      host: "localhost",
      user: "admin",
      password: "admin"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

    con.query(("SELECT * FROM recipefinderdatabase.recipes r WHERE r.name = '" + req.query.recipe_name + "';"), function (err, rows, fields) {
      if (err) throw err
        if(rows.length !== 0) {
            req.recipes = rows;
            return next();
        }
    });
}

function findIngredients(req, res, next) {
    var con = mysql.createConnection({
      host: "localhost",
      user: "admin",
      password: "admin"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

    con.query(("SELECT * FROM recipefinderdatabase.INGREDIENT i JOIN recipefinderdatabase.recipe_ingredients ri ON i.ingredients_id = ri.ingredients_id WHERE ri.recipe_id = " + req.recipes[0].recipe_id + ";"), function (err, rows, fields) {
      if (err) throw err
        if(rows.length !== 0) {
            req.ingredients = rows;
            return next();
        }
    });
}

function findComments(req, res, next) {
    var con = mysql.createConnection({
      host: "localhost",
      user: "admin",
      password: "admin"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

    con.query(("SELECT * FROM recipefinderdatabase.comments c WHERE c.recipe_id = " + req.recipes[0].recipe_id + ";"), function (err, rows, fields) {
      if (err) throw err
        if(rows.length !== 0) {
            req.comments = rows;
            return next();
        }
    });
}

function renderRecipeDetailsPage(req, res) {
    res.render('recipe_details', { title: req.query.recipe_name, recipes: req.recipes, ingredients: req.ingredients, comments: req.comments });
}

module.exports = router;
