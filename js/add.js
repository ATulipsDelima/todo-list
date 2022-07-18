import { toggle_project_off } from "./toggle.js";
import {filter_task} from "./filter.js";
import { checkbox_clicked, expand_clicked } from "./task_btn.js";

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
// event listner on title to filter all projects
title.addEventListener('click', (e)=>{filter_task(e.target.textContent)});
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
                <img src="./icons/checkbox-blank.svg" alt="blank check box" height="20px" width="20px" class="checked-btn-img">
            </button>
            
            <p id="title">${form_data["title"]}</p>
            <p id="duedate"> ${form_data["duedate"]}</p>
            <div class="card-btn">
                <button class="expand-btn">
                    <img src="./icons/expand-down.svg" alt="expand down" class="expand-btn-img">
                </button>
                <button class="trash-btn">
                    <img src="./icons/trash.svg" alt="trash" class="trash-btn-img">
                </button>
            </div>
        </div>
        <div class="card-hidden" >
            <p id="project-name">Project: <b>${form_data["project-select"]}</b></p>
            <p id="task-priority">Priority: <b>${form_data["task-priority"]}</b></p>
        </div>
    
    `
    card_container.appendChild(new_card);

    // clear input boxes
    let clear_select =  document.querySelectorAll(".create-task-form select");
    let clear_input =  document.querySelectorAll(".create-task-form input");

   
    clear_select[0].value ="inbox";
    clear_select[1].value ="none"
        
    

    clear_input.forEach(element => {
        element.value = ""
        
    });

    // add event listenrs to button
    new_card.addEventListener('click', function(event) {
        if(event.target.classList.contains("checked-btn")){
            checkbox_clicked(event.target.childNodes[1],event.target.parentElement.parentElement );
        }else if(event.target.classList.contains("checked-btn-img")){
            checkbox_clicked(event.target, event.target.parentElement.parentElement.parentElement);
        }else if(event.target.classList.contains("expand-btn")){
            expand_clicked(event.target.childNodes[1],event.target.parentElement.parentElement.parentElement.childNodes[3]);
        }else if(event.target.classList.contains("expand-btn-img")){
            expand_clicked(event.target, event.target.parentElement.parentElement.parentElement.parentElement.childNodes[3])
        }else if(event.target.classList.contains("trash-btn")){
            event.target.parentElement.parentElement.parentElement.remove();
        }else if(event.target.classList.contains("trash-btn-img")){
            event.target.parentElement.parentElement.parentElement.parentElement.remove()
        }
        
     }) 
    
    

}
   


export {add_project, add_task}