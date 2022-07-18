// not complete
const checkbox_clicked = (image, card) =>{
   console.log(image);
   //// need to add card
    if(!image.classList.contains("checked")){
       image.src = "./icons/checkbox-marked.svg";
       image.classList.add("checked")

    }else{
        image.src = "./icons/checkbox-blank.svg";
        image.classList.remove("checked")
    }
    
    console.log(card);

};
// completed
const expand_clicked = (image, hidden_container)=>{
    if(!image.classList.contains("expanded")){
        image.src = "./icons/expand-up.svg";
        image.classList.add("expanded");
        hidden_container.style.display = "block";
 
     }else{
         image.src = "./icons/expand-down.svg";
         image.classList.remove("expanded");
         hidden_container.style.display = "none"
     }
}

export {checkbox_clicked, expand_clicked};