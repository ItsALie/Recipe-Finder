***recipes TABLE***

CREATE TABLE recipes (
recipe_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id INT NOT NULL FOREIGN KEY,
serving_size DECIMAL(6, 1) NOT NULL,
name VARCHAR(40) NOT NULL
);

INSERT INTO recipes (`recipe_id`, `user_id`, `serving_size`, 'name') VALUES (1, 1, 1.1, "fire rice");