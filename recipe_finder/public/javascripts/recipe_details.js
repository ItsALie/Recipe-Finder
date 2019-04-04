var recipes = JSON.parse(document.currentScript.getAttribute('recipes'));
var ingredients = JSON.parse(document.currentScript.getAttribute('ingredients'));
var comments = JSON.parse(document.currentScript.getAttribute('comments'));
var user_id = document.currentScript.getAttribute('users');

var parent = document.getElementById("recipe_details");
var serving_header = document.createElement("h2");
var ingredients_header = document.createElement("h3");
var comments_header = document.createElement("h3");
var details_div = document.createElement("div");
var ingredients_div = document.createElement("div");
var comments_div = document.createElement("div");
var ingredients_list = document.createElement('ul');
var comments_list = document.createElement('ul');
var user_input = document.createElement("input");

serving_header.innerHTML = recipes[0].serving_size;
ingredients_header.innerHTML = "Ingredients";
comments_header.innerHTML = "Comments";

details_div.setAttribute("id", "details");
ingredients_div.setAttribute("id", "ingredients");
comments_div.setAttribute("id", "comments");

//Ingredients
for (let i = 0; i < ingredients.length; i++)
{
    var item = document.createElement('li');

    // Set its contents:
    item.appendChild(document.createTextNode(ingredients[i].ingredient_name + "\t" + ingredients[i].quanitity));

    // Add it to the list:
    ingredients_list.appendChild(item);    
}

//Comments
for (let i = 0; i < comments.length; i++)
{
    var item = document.createElement('li');

    // Set its contents:
    item.appendChild(document.createTextNode(comments[i].comments));

    // Add it to the list:
    comments_list.appendChild(item);    
}

user_input.id = "user_id";
user_input.type = "text";
user_input.name = "user_id";
user_input.value = user_id;
user_input.hidden = "true";

ingredients_div.appendChild(ingredients_header);
comments_div.appendChild(comments_header);
ingredients_div.appendChild(ingredients_list);
comments_div.appendChild(comments_list);

parent.appendChild(serving_header);
parent.appendChild(user_input);
details_div.appendChild(ingredients_div);
details_div.appendChild(comments_div);
parent.appendChild(details_div);
