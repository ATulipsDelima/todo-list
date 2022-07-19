import {add_project, add_task} from "./add.js";
import { toggle_project_off, toggle_project_on, toggle_task_off, toggle_task_on } from "./toggle.js";
import {show_all} from './filter.js';
import { checkbox_clicked } from "./task_btn.js";

// nav
const home_icon = document.querySelector("#home-icon");
const header = document.querySelector(".header-container h2")

// nav event listeners
home_icon.addEventListener('click', ()=>show_all());
header.addEventListener('click', ()=>show_all());

// get defalult project
const inbox_project = document.querySelector(".inbox-container");

// project form btns
const add_project_btn = document.querySelector(".create-project-form .add");
const cancel_project = document.querySelector(".create-project-form .cancel");
// create project buton
const create_project_btn = document.querySelector(".create-project");

// project taske event listeners
add_project_btn.addEventListener('click', () => add_project());
cancel_project.addEventListener('click', () => toggle_project_off());
create_project_btn.addEventListener('click', ()=> toggle_project_on());

// default project event listener
inbox_project.addEventListener('click', ()=>show_all());


// task form btn
const add_task_btn = document.querySelector(".create-task-form #add");
const cancel_task = document.querySelector(".create-task-form #cancel");


// create task btn
const create_task_btn = document.querySelector(".create-task-btn")


//task section event listeners
add_task_btn.addEventListener('click', ()=>{
   add_task()
} );
cancel_task.addEventListener('click', ()=> toggle_task_off());
create_task_btn.addEventListener('click', ()=> toggle_task_on());



