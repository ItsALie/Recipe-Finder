USE recipeFinderDatabase;


UPDATE recipe_ingredients AS ingre
INNER JOIN recipes AS reci ON reci.recipe_id = ingre.recipe_id
SET ingre.ingredients_id=1,
ingre.quantity = "2 kg"
WHERE reci.user_id=2 AND ingre.recipe_id=2 AND ingre.ingredients_id=2;