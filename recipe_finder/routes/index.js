var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const bodyParser = require('body-parser');
router.use( bodyParser.json() );  
router.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login Form' });
});

router.get('/new_account', function(req, res, next) {
  res.render('new_account', { title: 'Register' });
});

router.get('/search', function(req, res, next) {
  res.render('search', { title: 'Recipe Finder' });
});

router.get('/sign_in', findUser, renderPageAfterSignIn);

router.get('/recipes', findRecipes,  renderRecipesPage);  

router.get('/recipe_details', findRecipeDetails, findIngredients, findComments, renderRecipeDetailsPage);  

router.post('/add_recipe', addRecipe, renderMainPage);  

router.post('/add_account', renderLogInPage);

router.post('/edit_account', renderMainPage);

router.post('/delete_account', renderLogInPage);

function findUser(req, res, next)
{
    req.users = null;
    con.query(("SELECT * FROM recipefinderdatabase.USERS WHERE USERNAME = '" + req.query.username + "' AND PASSWORD = '" + req.query.password + "';"), function (err, rows, fields) {
      if (err) throw err
        if(rows.length !== 0) {
            req.users = rows;
            return next();
        }
        else
        {
            req.users = null;
            return next();
        }
    });
}

function renderPageAfterSignIn(req, res)
{
    if (req.users == null)
    {
        res.render('index', { title: 'Login Form' });
    }
    else
    {
        res.render('search', { title: 'Recipe Finder', users: req.users});
    }
}

function addRecipe(req, res, next) {    
    con.query(("INSERT INTO recipefinderdatabase.recipes (user_id, serving_size, name) VALUES (" + req.body.user_id + ", '" + req.body.serving_size + "', '" + req.body.recipe_name + "');"), function (err, rows, fields) {
      if (err) throw err
    });
    
    return next();
}


function renderMainPage(req, res) {
    req.users = null;
    con.query(("SELECT * FROM recipefinderdatabase.USERS WHERE USER_ID = " + req.body.user_id + ";"), function (err, rows, fields) {
      if (err) throw err
        if(rows.length !== 0) {
            req.users = rows;
            res.render('search', { title: 'Recipe Finder', users: req.users });
        }
        else
        {
            req.users = null;
        }
    });
    
    //res.render('search', { title: 'Recipe Finder', users: req.users });
}

function renderLogInPage(req, res) {
    res.render('index', { title: 'Login Form' });
}

function findRecipes(req, res, next) {
    con.query(("SELECT * FROM recipefinderdatabase.RECIPES WHERE NAME LIKE '%" + req.query.search + "%';"), function (err, rows, fields) {
      if (err) throw err
        if(rows.length !== 0) {
            req.recipes = rows;
            return next();
        }
    });
}

function renderRecipesPage(req, res) {
    res.render('recipes', { title: 'Recipes', recipes: req.recipes, users: req.query.user_id});
}

function findRecipeDetails(req, res, next) {
    con.query(("SELECT * FROM recipefinderdatabase.recipes r WHERE r.name = '" + req.query.recipe_name + "';"), function (err, rows, fields) {
      if (err) throw err
        if(rows.length !== 0) {
            req.recipes = rows;
            return next();
        }
        else
        {
            req.recipes = {};
            return next();
        }
    });
}

function findIngredients(req, res, next) {
    con.query(("SELECT * FROM recipefinderdatabase.INGREDIENT i JOIN recipefinderdatabase.recipe_ingredients ri ON i.ingredients_id = ri.ingredients_id WHERE ri.recipe_id = " + req.recipes[0].recipe_id + ";"), function (err, rows, fields) {
      if (err) throw err
        if(rows.length !== 0) {
            req.ingredients = rows;
            return next();
        }
        else
        {
            req.ingredients = {};
            return next();
        }

    });
}

function findComments(req, res, next) {
    con.query(("SELECT * FROM recipefinderdatabase.comments c WHERE c.recipe_id = " + req.recipes[0].recipe_id + ";"), function (err, rows, fields) {
      if (err) throw err
        if(rows.length !== 0) {
            req.comments = rows;
            return next();
        }
        else
        {
            req.comments = {};
            return next();
        }
    });
}

function renderRecipeDetailsPage(req, res) {
    res.render('recipe_details', { title: req.query.recipe_name, users: req.query.user_id, recipes: req.recipes, ingredients: req.ingredients, comments: req.comments });
}

module.exports = router;
