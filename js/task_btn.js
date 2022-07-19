// not complete
const checkbox_clicked = (image, card, title) =>{
   //// need to add card
    if(!card.classList.contains("checked")){
       image.src = "./icons/checkbox-marked.svg";
       card.classList.add("checked")
       title.classList.add("strike");

    }else{
        image.src = "./icons/checkbox-blank.svg";
        card.classList.remove("checked");
        title.classList.remove("strike");
    }

};
// completed
const expand_clicked = (image, hidden_container)=>{
    if(!image.classList.contains("expanded")){
        image.src = "./icons/expand-up.svg";
        image.classList.add("expanded");
        hidden_container.style.display = "flex";
 
     }else{
         image.src = "./icons/expand-down.svg";
         image.classList.remove("expanded");
         hidden_container.style.display = "none"
     }
}

export {checkbox_clicked, expand_clicked};