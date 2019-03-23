/* recipe table */
USE recipeFinderDatabase;

CREATE TABLE recipes (
recipe_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT NOT NULL,
serving_size VARCHAR(40) NOT NULL,
name VARCHAR(40) NOT NULL
);


/* Inseting the dummy data to sql table*/
INSERT INTO recipes (recipe_id, user_id, serving_size, name) VALUES (1, 1, "1.1", "fire rice");

/* Update script to modify recipe names*/
/* Modify should only work if the logged in user matches the recipe user*/
UPDATE recipes SET name = 'noodles' WHERE recipe_id = 1 AND user_id = 1;

/* Delete Recipe from the Recipe table */
DELETE FROM recipes WHERE recipe_id = 1 AND user_id = 1;
