for(let i = 0; i < 5; i++){
   var parent = document.getElementById("recipe_list");
   var form = document.createElement("form");
   var card = document.createElement("div");
   var img = document.createElement("img");
   var header = document.createElement("h1");
   
   form.setAttribute("action", "/recipe_details");
   form.setAttribute("method", "GET");
   
   card.setAttribute("class", "card");
   card.setAttribute("onClick", "this.parentNode.submit();");
   
   img.setAttribute("src", "/images/food.jpeg");
   img.setAttribute("alt", "");
   img.setAttribute("style", "width:100%");
   
   header.innerHTML = "Food";
   
   card.appendChild(img);
   card.appendChild(header);
   
   form.appendChild(card);
   parent.appendChild(form);

}
