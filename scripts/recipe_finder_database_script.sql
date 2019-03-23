-- SQL statements to create recipe-finder databases and tables

-- Open up into the correct database.
USE recipeFinderDatabase;

-- Drop the tables so they can be recreated.
DROP TABLE recipe_ingredients;
DROP TABLE ingredient;
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

-- Create a table for ingredient.
CREATE TABLE ingredient (
ingredients_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
ingredient_name VARCHAR(80) NOT NULL
);

-- Create a table for ingredient in a specific recipe.
CREATE TABLE recipe_ingredients (
recipe_ingredients_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
recipe_id INT NOT NULL, 
FOREIGN KEY(recipe_id) REFERENCES recipes(recipe_id),
ingredients_id INT NOT NULL, 
FOREIGN KEY (ingredients_id) REFERENCES ingredient(ingredients_id),
quanitity VARCHAR(40) NOT NULL
);



INSERT INTO users (user_id, username, password) VALUES (1, 'christian26', '39e4c255a2890a88c7f9092e6c8a861e6514b62e');


INSERT INTO recipes (recipe_id, user_id, serving_size, name) VALUES (1, 1, "2 servings", "Lasagna");

INSERT INTO comments (comments_id, user_id, recipe_id, comments) VALUES (1, 1, 1, "That lasagna looks delicious!");


INSERT INTO  ingredient(ingredient_name) VALUES ("noodles");
INSERT INTO  ingredient(ingredient_name) VALUES ("eggs");
INSERT INTO  ingredient(ingredient_name) VALUES ("pepper");
INSERT INTO  ingredient(ingredient_name) VALUES ("cheese");
INSERT INTO  ingredient(ingredient_name) VALUES ("noodles");
INSERT INTO  ingredient(ingredient_name) VALUES ("olive oil");

