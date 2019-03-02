-- SQL statements to create recipe-finder databases and tables

-- Open up into the correct database.
USE recipeFinderDatabase;

-- Drop the tables so they can be recreated.
DROP TABLE recipe_ingredients;
DROP TABLE ingredients;
DROP TABLE comments;
DROP TABLE recipes;
DROP TABLE users;

-- Create a table for the users.
CREATE TABLE users (
user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(40) UNIQUE NOT NULL,
password VARCHAR(40) NOT NULL
);

-- Create a table for the recipes.
CREATE TABLE recipes (
recipe_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id),
serving_size VARCHAR(40) NOT NULL,
name VARCHAR(40) NOT NULL
);

-- Create a table for the comments on recipes.
CREATE TABLE comments (
comments_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id),
recipe_id INT NOT NULL,
FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id),
comments VARCHAR(240) NOT NULL
);

-- Create a table for ingredients.
CREATE TABLE ingredients (
ingredients_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
ingredient_name VARCHAR(80) NOT NULL
);

-- Create a table for ingredients in a specific recipe.
CREATE TABLE recipe_ingredients (
recipe_ingredients_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
recipe_id INT NOT NULL, 
FOREIGN KEY(recipe_id) REFERENCES recipes(recipe_id),
ingredients_id INT NOT NULL, 
FOREIGN KEY (ingredients_id) REFERENCES ingredients(ingredients_id),
quanitity VARCHAR(40) NOT NULL
);

