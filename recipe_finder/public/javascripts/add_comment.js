var recipes = JSON.parse(document.currentScript.getAttribute('recipes'));
var user_id = document.currentScript.getAttribute('users');

var parent = document.getElementById("add_comment");
var comments_header = document.createElement("h3");
var comment_input = document.createElement("input");
var user_input = document.createElement("input");
var recipe_id_input = document.createElement("input");
var recipe_name_input = document.createElement("input");
var add_comment_form = document.createElement("form");
var add_comment_button = document.createElement("input");
var breakline = document.createElement("br");

add_comment_form.setAttribute("action", "/add_comment");
add_comment_form.setAttribute("method", "POST");

comments_header.innerHTML = "Add New Comment";

user_input.id = "user_id";
user_input.type = "text";
user_input.name = "user_id";
user_input.value = user_id;
user_input.hidden = "true";

recipe_id_input.id = "recipe_id";
recipe_id_input.type = "text";
recipe_id_input.name = "recipe_id";
recipe_id_input.value = recipes[0].recipe_id;
recipe_id_input.hidden = "true";

recipe_name_input.id = "recipe_name";
recipe_name_input.type = "text";
recipe_name_input.name = "recipe_name";
recipe_name_input.value = recipes[0].name;
recipe_name_input.hidden = "true";

comment_input.id = "comment";
comment_input.type = "text";
comment_input.name = "comment";
comment_input.value = "";

add_comment_button.type = "Submit";
add_comment_button.value = "Add";

add_comment_form.appendChild(comments_header);
add_comment_form.appendChild(user_input);
add_comment_form.appendChild(recipe_id_input);
add_comment_form.appendChild(recipe_name_input);
add_comment_form.appendChild(comment_input);
add_comment_form.appendChild(breakline);
add_comment_form.appendChild(add_comment_button);

parent.appendChild(add_comment_form);
