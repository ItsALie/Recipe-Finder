SELECT user_id from users WHERE user_id = 1 AND password = '39e4c255a2890a88c7f9092e6c8a861e6514b62e' ;
UPDATE comments set comments = 'testComment' WHERE comments_id = 1 AND user_id ='1' AND recipe_id = 1 ;
SELECT * from comments; 
DELETE FROM comments WHERE user_id =1;
DELETE FROM recipes WHERE user_id =1;
DELETE FROM users WHERE user_id =1;
SELECT * from users;