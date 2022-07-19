
const toggle_project_on = () =>{
    const form= document.querySelector(".create-project-form");
    const create_btn = document.querySelector(".create-project");

    create_btn.style.display = "none";
    form.style.display = "block";
}

const toggle_project_off = () =>{
    const form= document.querySelector(".create-project-form");
    const create_btn = document.querySelector(".create-project");

    create_btn.style.display = "block";
    form.style.display = "none";
}

const toggle_task_on = () =>{
    const form = document.querySelector(".create-task-form");
    const create_btn = document.querySelector(".create-task-btn");

    create_btn.style.display = "none";
    form.style.display = "block";
    
}

const toggle_task_off = () =>{
    const form = document.querySelector(".create-task-form");
    const create_btn = document.querySelector(".create-task-btn");

    create_btn.style.display = "flex";
    form.style.display = "none";
    
}


export {toggle_project_off, toggle_project_on, toggle_task_off, toggle_task_on}