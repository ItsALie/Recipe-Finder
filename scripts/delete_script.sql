-- Deleting comments based on user 
DELETE FROM comments WHERE comments_id="" AND user_id="";

-- Delete user
DELETE FROM recipe_ingredients WHERE user_id = ;
DELETE FROM ingredient WHERE user_id = ;
DELETE FROM comments WHERE user_id =;
DELETE FROM recipes WHERE user_id =;
DELETE FROM users WHERE user_id = ;

/* Deletes corresponding recipe_ingredient table rows that have a matching recipe_ id */

DELETE FROM recipe_ingredients WHERE recipe_id = 1;
