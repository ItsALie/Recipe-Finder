
-- Select user
SELECT user_id from users WHERE user_id = 1 AND password = '39e4c255a2890a88c7f9092e6c8a861e6514b62e' ;

-- Select all recipe
SELECT * FROM recipes WHERE recipe_id="";

-- Joining two tables and selecting name of the ingredient and quanitity from two tables where the ingredient id is equal
-- creating script to get recipe ingredients and steps from recipe id

SELECT I.name FROM ingredients AS I INNER JOIN recipe_ingredients AS RI ON I.ingredients_id = RI.ingredients_id
