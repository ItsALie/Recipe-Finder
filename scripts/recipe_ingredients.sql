***recipe_ingredients TABLE***

CREATE TABLE recipe_ingredients (
recipe_ingredients_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
recipe_id INT NOT NULL,
FOREIGN KEY(recipe_id) REFERENCES recipes(recipe_id),
ingredients_id INT NOT NULL,
FOREIGN KEY (ingredients_id) REFERENCES ingredients(ingredients_id),
quantity VARCHAR(40) NOT NULL
);

INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (1, 1, 1, "1 cup");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (2, 2, 2, "1 kg");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (3, 3, 3, "1 pang");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (4, 4, 4, "1 grain");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (5, 5, 5, "1 gram");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (6, 6, 6, "1 miliigram");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (7, 7, 7, "2 cup");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (8, 1, 8, "3 cup");


/* Joining two tables and selecting name of the ingredient and quanitity from two tables where the ingredient id is equal*/
/*creating script to get recipe ingredients and steps from recipe id*/

SELECT I.name FROM ingredients AS I INNER JOIN recipe_ingredients AS RI ON I.ingredients_id = RI.ingredients_id;

/* Deletes corresponding recipe_ingredient table rows that have a matching recipe_ id */

DELETE FROM recipe_ingredients WHERE recipe_id = 1;


