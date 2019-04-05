-- Deleting comments based on user 
DELETE FROM comments WHERE comments_id="" AND user_id="";

-- Delete user
DELETE FROM recipe_ingredients WHERE user_id = 1;
DELETE FROM ingredient WHERE user_id = 1;
DELETE FROM comments WHERE user_id =1;
DELETE FROM recipes WHERE user_id =1;
DELETE FROM users