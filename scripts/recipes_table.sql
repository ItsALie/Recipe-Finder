***recipes TABLE***

CREATE TABLE recipes (
recipe_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT NOT NULL,
serving_size VARCHAR(40) NOT NULL,
name VARCHAR(40) NOT NULL
);

/* Inseting the dummy data to sql table*/
INSERT INTO recipes (recipe_id, user_id, serving_size, name) VALUES (1, 1, "1.1", "fire rice");

/* update the recipes name */
UPDATE recipes SET name = 'noodles' WHERE recipe_id = 1;

/* upadte the recipes name */
UPDATE
    recipes
SET
    CASE
        recipes.user_id = users.user_id THEN recipes.name = "noodles";
    WHERE
        user_id = 1
