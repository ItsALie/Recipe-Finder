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
