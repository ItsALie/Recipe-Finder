var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const bodyParser = require('body-parser');
router.use( bodyParser.json() );  
router.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PASSWORD123",
  database : "recipeFinderDatabase"
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

router.post('/edit_recipe', updateRecipe, findPostRecipe, findPostIngredients, findPostComments, renderPostRecipeDetailsPage);

router.post('/delete_recipe', deleteRecipe, renderMainPage);

router.post('/add_account', addUser, renderLogInPage);

router.post('/edit_account', editUserNamePassword, renderMainPage);

router.post('/delete_account', deleteUser, renderLogInPage);

router.post('/add_comment', addComment, findPostRecipe, findPostIngredients, findPostComments, renderPostRecipeDetailsPage);

router.post('/edit_comment', updateComment, findPostRecipe, findPostIngredients, findPostComments, renderPostRecipeDetailsPage);

router.post('/delete_comment', deleteComment, findPostRecipe, findPostIngredients, findPostComments, renderPostRecipeDetailsPage);

function addUser(req, res, next)
{
    con.query(("INSERT INTO users (username, password) VALUES ('" + req.body.username + "', '" + req.body.password + "');"), function (err, rows, fields) {
      if (err) throw err
    });
    
    return next();
}

function updateRecipe(req, res, next)
{
    if (req.body.user_id == req.body.recipe_user_id)
    {
        con.query(("UPDATE recipes SET serving_size = '" + req.body.serving_size + "', name = '" + req.body.recipe_name + "' WHERE recipe_id = " + req.body.recipe_id + ";"), function (err, rows, fields) {
          if (err) throw err
        });
    }
    else
    {
        req.body.recipe_name = req.body.old_recipe_name;
    }
    return next();
}

function findUser(req, res, next)
{
    req.users = null;
    con.query(("SELECT * FROM USERS WHERE USERNAME = '" + req.query.username + "' AND PASSWORD = '" + req.query.password + "';"), function (err, rows, fields) {
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

function deleteUser(req, res, next) {
    
    // Delete all comments written by the user    
    con.query(("SELECT * FROM comments wHERE user_id = " + req.body.user_id + ";"), function (err, rows, fields) {
      if (err) throw err
      if (rows != 0)
      {
        for (let i = 0; i < rows.length; i++)
        {
            con.query(("DELETE FROM comments WHERE comments_id = " + rows[i].comments_id + ";"), function (e, r, f) {
                if (err) throw err
            });
        }
      }
    });
    
    con.query(("DELETE ri FROM recipe_ingredients ri JOIN recipes r ON ri.recipe_id = r.recipe_id WHERE r.user_id = " + req.body.user_id + ";"), function (err, rows, fields) {
      if (err) throw err
    });
    
    //Delete all recipes, links to ingredients and comments on recipes owned by the user
    con.query(("SELECT * FROM recipes wHERE user_id = " + req.body.user_id + ";"), function (err, rows, fields) {
      if (err) throw err
      if (rows != 0)
      {
        for (let i = 0; i < rows.length; i++)
        {
          console.log("row:" + rows[i].recipe_id );
            con.query(("DELETE FROM comments WHERE recipe_id = " + rows[i].recipe_id + ";"), function (e, r, f) {
                if (err) throw err
            });
        }
      }
    });
    
    con.query(("DELETE FROM comments WHERE user_id = " + req.body.user_id + ";"), function (err, rows, fields) {
        if (err) throw err
    });
    
    con.query(("DELETE FROM recipes WHERE user_id = " + req.body.user_id + ";"), function (err, rows, fields) {
        if (err) throw err
    });
    
    con.query(("DELETE FROM users WHERE user_id = " + req.body.user_id + ";"), function (err, rows, fields) {
        if (err) throw err
    });

    return next();
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
    con.query(("INSERT INTO recipes (user_id, serving_size, name) VALUES (" + req.body.user_id + ", '" + req.body.serving_size + "', '" + req.body.recipe_name + "');"), function (err, rows, fields) {
      if (err) throw err
    });
    
    return next();
}

function deleteRecipe(req, res, next)
{
    if (req.body.user_id == req.body.recipe_user_id)
    {
        con.query(("DELETE FROM comments WHERE recipe_id ="+req.body.recipe_id+";"), function (err, rows, fields) {
          if (err) throw err
        });
        
        con.query(("DELETE FROM recipe_ingredients WHERE recipe_id ="+req.body.recipe_id+";"), function (err, rows, fields) {
          if (err) throw err
        });

        con.query(("DELETE FROM Recipes WHERE recipe_id ="+req.body.recipe_id+";"), function (err, rows, fields) {
          if (err) throw err
        });
    }
    return next();
}


function addComment(req, res, next)
{
    con.query(("INSERT INTO comments (user_id, recipe_id, comments) VALUES (" + req.body.user_id + ", " + req.body.recipe_id + ", '" + req.body.comment + "');"), function (err, rows, fields) {
      if (err) throw err
    });
    
    return next();
}

function updateComment(req, res, next)
{
    if (req.body.user_id == req.body.comment_user_id)
    {
        con.query(("UPDATE comments SET comments = '" + req.body.comment + "' WHERE comments_id = " + req.body.comment_id + ";"), function (err, rows, fields) {
          if (err) throw err
        });
    }
    return next();
}

function deleteComment(req, res, next)
{
    if (req.body.user_id == req.body.comment_user_id)
    {
        con.query(("DELETE FROM comments WHERE comments_id = " + req.body.comment_id + ";"), function (err, rows, fields) {
          if (err) throw err
        });
    }
    return next();
}

function findPostRecipe(req, res, next)
{
    con.query(("SELECT * FROM recipes r WHERE r.recipe_id = " + req.body.recipe_id + ";"), function (err, rows, fields) {
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

function findPostIngredients(req, res, next)
{
    con.query(("SELECT * FROM INGREDIENT i JOIN recipe_ingredients ri ON i.ingredients_id = ri.ingredients_id WHERE ri.recipe_id = " + req.body.recipe_id + ";"), function (err, rows, fields) {
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

function findPostComments(req, res, next)
{
    con.query(("SELECT * FROM comments c WHERE c.recipe_id = " + req.body.recipe_id + ";"), function (err, rows, fields) {
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


function renderPostRecipeDetailsPage(req, res) {
    res.render('recipe_details', { title: req.body.recipe_name, users: req.body.user_id, recipes: req.recipes, ingredients: req.ingredients, comments: req.comments });
}

function renderMainPage(req, res) {
    req.users = null;
    con.query(("SELECT * FROM USERS WHERE USER_ID = " + req.body.user_id + ";"), function (err, rows, fields) {
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
    con.query(("SELECT * FROM RECIPES WHERE NAME LIKE '%" + req.query.search + "%';"), function (err, rows, fields) {
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

function renderRecipesPage(req, res) {
    res.render('recipes', { title: 'Recipes', recipes: req.recipes, users: req.query.user_id});
}

function findRecipeDetails(req, res, next) {
    con.query(("SELECT * FROM recipes r WHERE r.name = '" + req.query.recipe_name + "';"), function (err, rows, fields) {
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
    con.query(("SELECT * FROM INGREDIENT i JOIN recipe_ingredients ri ON i.ingredients_id = ri.ingredients_id WHERE ri.recipe_id = " + req.recipes[0].recipe_id + ";"), function (err, rows, fields) {
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
    con.query(("SELECT * FROM comments c WHERE c.recipe_id = " + req.recipes[0].recipe_id + ";"), function (err, rows, fields) {
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

function editUserNamePassword (req, res, next){
    con.query(("UPDATE users set username ='"+req.body.username+"',password ='"+req.body.password+"' WHERE user_id ="+req.body.user_id+";"),function (err, rows, fields){
        if (err) throw err
    }); 
    
    return next();
}
    

module.exports = router;
