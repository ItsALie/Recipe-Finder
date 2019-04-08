-- Update comments based on recipe and user
UPDATE comments set comments = 'testComment' WHERE comments_id = 1 AND user_id ='1' AND recipe_id = 1 ;

-- Update Receipt ingredients
UPDATE recipe_ingredients AS ingre
INNER JOIN recipes AS reci ON reci.recipe_id = ingre.recipe_id
SET ingre.ingredients_id=1,
ingre.quantity = "2 kg"
WHERE reci.user_id=2 AND ingre.recipe_id=2 AND ingre.ingredients_id=2;

-- Update script to modify recipe names
-- Modify should only work if the logged in user matches the recipe user
UPDATE recipes SET name='noodles' WHERE recipe_id = 1 AND user_id = 1;
