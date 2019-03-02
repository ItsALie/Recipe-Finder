***recipe_ingredients TABLE***

CREATE TABLE recipe_ingredients (
recipe_ingredients_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
recipe_id INT NOT NULL,
FOREIGN KEY(recipe_id) REFERENCES recipes(recipe_id),
ingredients_id INT NOT NULL,
FOREIGN KEY (ingredients_id) REFERENCES ingredients(ingredients_id),
quantity VARCHAR(40) NOT NULL
);

INSERT INTO recipes (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (1, 1, 1, "1 cup");
