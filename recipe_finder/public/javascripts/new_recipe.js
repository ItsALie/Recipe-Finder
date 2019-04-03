function add_ingredient_input()
{
    var ingredient_div = document.getElementById("ingredient_info");
    var add_ingredient_button = document.getElementById("add_ingredient");
    var new_button = document.createElement("button");
    var ingredient_text = document.createElement("p");
    var new_ingredient = document.createElement("input");
    var quantity_text = document.createElement("p");
    var new_quantity = document.createElement("input");
    var br = document.createElement("br");
    
    ingredient_div.removeChild(add_ingredient_button);
    
    new_ingredient.setAttribute("type", "text");
    new_ingredient.setAttribute("class", "ingredient_input");
    new_ingredient.setAttribute("name", "ingredient_name");
    new_ingredient.setAttribute("value", "");

    new_quantity.setAttribute("type", "text");
    new_quantity.setAttribute("class", "quantity_input");
    new_quantity.setAttribute("name", "quantity_name");
    new_quantity.setAttribute("value", "");
    
    new_button.setAttribute("type", "button");
    new_button.setAttribute("id", "add_ingredient");
    new_button.setAttribute("onclick", "add_ingredient_input()");
    new_button.innerHTML = "More ingredients";
    
    ingredient_text.innerHTML = "Ingredient:";
    quantity_text.innerHTML = "Quantity:";
    
    ingredient_div.appendChild(br);
    ingredient_div.appendChild(ingredient_text);
    ingredient_div.appendChild(br);
    ingredient_div.appendChild(new_ingredient);
    ingredient_div.appendChild(br);
    ingredient_div.appendChild(quantity_text);
    ingredient_div.appendChild(br);
    ingredient_div.appendChild(new_quantity);
    ingredient_div.appendChild(br);
    ingredient_div.appendChild(new_button);
}

