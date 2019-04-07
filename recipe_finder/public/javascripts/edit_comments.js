var comments = JSON.parse(document.currentScript.getAttribute('comments'));
var recipes = JSON.parse(document.currentScript.getAttribute('recipes'));
var user_id = document.currentScript.getAttribute('users');

//Comments
for (let i = 0; i < comments.length; i++)
{    
    var parent = document.getElementById("edit_comments");
    var comments_header = document.createElement("h3");
    var comments_div = document.createElement("div");
    var comment_input = document.createElement("input");
    var user_input = document.createElement("input");
    var comment_user_input = document.createElement("input");
    var comment_id_input = document.createElement("input");
    var recipe_id_input = document.createElement("input");
    var recipe_name_input = document.createElement("input");
    var edit_comment_form = document.createElement("form");
    var delete_comment_form = document.createElement("form");
    var save_comment_button = document.createElement("input");
    var delete_comment_button = document.createElement("input");
    var breakline = document.createElement("br");
    
    edit_comment_form.setAttribute("action", "/edit_comment");
    edit_comment_form.setAttribute("method", "POST");

    delete_comment_form.setAttribute("action", "/delete_comment");
    delete_comment_form.setAttribute("method", "POST");

    comments_header.innerHTML = "Edit \"" + comments[i].comments + "\"";
    comments_div.setAttribute("class", "recipe_details");

    user_input.id = "user_id";
    user_input.type = "text";
    user_input.name = "user_id";
    user_input.value = user_id;
    user_input.hidden = "true";
    
    comment_user_input.id = "comment_user_id";
    comment_user_input.type = "text";
    comment_user_input.name = "comment_user_id";
    comment_user_input.value = comments[i].user_id;
    comment_user_input.hidden = "true";

    comment_id_input.id = "comment_id";
    comment_id_input.type = "text";
    comment_id_input.name = "comment_id";
    comment_id_input.value = comments[i].comments_id;
    comment_id_input.hidden = "true";

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
    comment_input.value = comments[i].comments;
    
    save_comment_button.type = "Submit";
    save_comment_button.value = "Save";

    delete_comment_button.type = "Submit";
    delete_comment_button.value = "Delete";

    edit_comment_form.appendChild(comments_header);
    edit_comment_form.appendChild(user_input.cloneNode(true));
    edit_comment_form.appendChild(comment_user_input.cloneNode(true));
    edit_comment_form.appendChild(comment_id_input.cloneNode(true));
    edit_comment_form.appendChild(recipe_id_input.cloneNode(true));
    edit_comment_form.appendChild(recipe_name_input.cloneNode(true));
    edit_comment_form.appendChild(comment_input);
    edit_comment_form.appendChild(breakline);
    edit_comment_form.appendChild(save_comment_button);

    delete_comment_form.appendChild(user_input);
    delete_comment_form.appendChild(comment_user_input);
    delete_comment_form.appendChild(comment_id_input);
    delete_comment_form.appendChild(recipe_id_input);
    delete_comment_form.appendChild(recipe_name_input);
    delete_comment_form.appendChild(delete_comment_button);

    comments_div.appendChild(edit_comment_form);
    comments_div.appendChild(delete_comment_form);
    parent.appendChild(comments_div);
}
