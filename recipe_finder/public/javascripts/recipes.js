var recipes = JSON.parse(document.currentScript.getAttribute('recipes'));
var user_id = document.currentScript.getAttribute('users');

for(let i = 0; i < recipes.length; i++){
    var parent = document.getElementById("recipe_list");
    var form = document.createElement("form");
    var card = document.createElement("div");
    var img = document.createElement("img");
    var header = document.createElement("h1");
    var input = document.createElement("input");
    var user_input = document.createElement("input");

    form.setAttribute("action", "/recipe_details");
    form.setAttribute("method", "GET");

    card.setAttribute("class", "card");
    card.setAttribute("onClick", "this.parentNode.submit();");

    img.setAttribute("src", "/images/food.jpeg");
    img.setAttribute("alt", "");
    img.setAttribute("style", "width:100%");

    input.id = "recipe_name";
    input.type = "text";
    input.name = "recipe_name";
    input.value = recipes[i].name;
    input.hidden = "true";

    user_input.id = "user_id";
    user_input.type = "text";
    user_input.name = "user_id";
    user_input.value = user_id;
    user_input.hidden = "true";
    
    header.innerHTML = recipes[i].name;

    card.appendChild(img);
    card.appendChild(header);

    form.appendChild(card);
    form.appendChild(input);
    form.appendChild(user_input);
    parent.appendChild(form);
}
