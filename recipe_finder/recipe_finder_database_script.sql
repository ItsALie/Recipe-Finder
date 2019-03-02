-- SQL statements to create recipe-finder databases and tables


-- Create the recipe-finder database.
CREATE DATABASE recipeFinderDatabase;
USE recipeFinderDatabase;

-- Create a table for the users.
CREATE TABLE users (
user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(40) UNIQUE NOT NULL,
password VARCHAR(40) NOT NULL
);

-- Create a table for the recipes.
CREATE TABLE recipes (
recipe_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT NOT NULL FOREIGN KEY,
serving_size DECIMAL(6, 1) NOT NULL,
name VARCHAR(40) NOT NULL
);

-- Create a table for the comments on recipes.
CREATE TABLE comments (
comments_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT NOT NULL FOREIGN KEY,
recipe_id INT NOT NULL FOREIGN KEY,
comments VARCHAR(240) NOT NULL
);

-- Create a table for ingredients.
CREATE TABLE ingredients (
ingredients_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(80) NOT NULL
);

-- Create a table for ingredients in a specific recipe.
CREATE TABLE recipe_ingredients (
recipe_ingredients_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
recipe_id INT NOT NULL FOREIGN KEY,
ingredients_id INT NOT NULL FOREIGN KEY,
quanitity DECIMAL(6, 1) NOT NULL
);

