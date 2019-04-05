
INSERT INTO users (user_id, username, password) VALUES (1, 'christian26', '39e4c255a2890a88c7f9092e6c8a861e6514b62e');


INSERT INTO recipes (recipe_id, user_id, serving_size, name) VALUES (1, 1, "2 servings", "Lasagna");

INSERT INTO comments (comments_id, user_id, recipe_id, comments) VALUES (1, 1, 1, "That lasagna looks delicious!");


INSERT INTO  ingredient(ingredient_name) VALUES ("noodles");
INSERT INTO  ingredient(ingredient_name) VALUES ("eggs");
INSERT INTO  ingredient(ingredient_name) VALUES ("pepper");
INSERT INTO  ingredient(ingredient_name) VALUES ("cheese");
INSERT INTO  ingredient(ingredient_name) VALUES ("noodles");
INSERT INTO  ingredient(ingredient_name) VALUES ("olive oil");


INSERT INTO recipes (`recipe_id`, `user_id`, `serving_size`, 'name') VALUES (1, 1, 1.1, "fire rice");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (1, 1, 1, "1 cup");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (2, 1, 1, "1 kg");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (3, 1, 1, "1 pang");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (4, 1, 1, "1 grain");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (5, 1, 1, "1 gram");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (6, 1, 1, "1 miliigram");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (7, 1, 1, "2 cup");
INSERT INTO recipe_ingredients (recipe_ingredients_id, recipe_id, ingredients_id, quanitity) VALUES (8, 1, 1, "3 cup");

INSERT INTO recipes (`recipe_id`, `user_id`, `serving_size`, 'name') VALUES (1, 1, 1.1, "fire rice");




