var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login Form' });
});

router.get('/search', function(req, res, next) {
  res.render('search', { title: 'Recipe Finder' });
});

router.get('/recipes', function(req, res, next) {
  res.render('recipes', { title: 'Recipes' });
});

router.get('/recipe_details', function(req, res, next) {
  res.render('recipe_details', { title: 'Recipe Information' });
});

module.exports = router;
