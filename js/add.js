import { toggle_project_off } from "./toggle.js";

const add_project = () =>{
const projects = document.querySelector(".project-holder");
// get name from input fiels
const name = document.querySelector(".create-project-form input");

// create container for elements
let new_project = document.createElement("div")
new_project.classList.add("project")

//PROJECT NAME 
let title = document.createElement("p");
title.textContent = name.value;

// delete icon
const image = new Image();
image.src = "./icons/close.svg"

image.addEventListener('click', (e)=>{
    // remove from selector list
    const title = e.target.previousSibling.textContent
    const option = document.querySelector(`option[value=${CSS.escape(title)}]`)
    option.remove();
    // remove project
    e.target.parentElement.remove();
})

new_project.appendChild(title)
new_project.appendChild(image)
projects.appendChild(new_project)
toggle_project_off();
add_to_selector(name.value)

// clear input 
name.value="";
}


const add_to_selector = (title)=>{
    const select_list = document.querySelector("#project-select");
    const option = document.createElement("option");
    option.value = title;
    option.textContent = title;

    select_list.append(option);

}


const add_task = () =>{
    const select_vals = Array.from(document.querySelectorAll(".create-task-form select")).reduce((acc,input)=>({...acc,[input.id]: input.value}), {});
    const input_vals = Array.from(document.querySelectorAll(".create-task-form input")).reduce((acc,input)=>({...acc,[input.id]: input.value}), {})
    const form_data = {...select_vals, ...input_vals}

    const card_container = document.querySelector(".cards");
    const new_card = document.createElement("div");
    new_card.classList.add('card', form_data["task-priority"])

    new_card.innerHTML = `
            <div class="card-show">
            <button class="checked-btn">
                <img src="./icons/checkbox-blank.svg" alt="blank check box" height="20px" width="20px">
            </button>
            
            <p id="title">${form_data["title"]}</p>
            <p id="duedate"> ${form_data["duedate"]}</p>
            <div class="card-btn">
                <button class="expand-btn">
                    <img src="./icons/expand-down.svg" alt="expand down">
                </button>
                <button class="trash-btn">
                    <img src="./icons/trash.svg" alt="trash">
                </button>
            </div>
        </div>
        <div class="card-hidden">
            <p id="project-name">Project: <b>${form_data["project-select"]}</b></p>
            <p id="task-priority">Priority: <b>${form_data["task-priority"]}</b></p>
        </div>
    
    `
    card_container.appendChild(new_card);

    // clear input boxes
    let clear_select =  document.querySelectorAll(".create-task-form select");
    let clear_input =  document.querySelectorAll(".create-task-form input");
    console.log(clear_input)

   
    clear_select[0].value ="inbox";
    clear_select[1].value ="none"
        
    

    clear_input.forEach(element => {
        element.value = ""
        
    });
    
    

}
   


export {add_project, add_task}