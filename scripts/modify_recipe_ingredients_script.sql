USE recipeFinderDatabase;

UPDATE recipes, recipe_ingredients, 
INNER JOIN recipes ON recipes.recipe_id = recipe_ingredients.recipe_id
SET ingredients_id="" AND quantity="" WHERE user_id="" AND recipe_id="" AND ingredients_id="";