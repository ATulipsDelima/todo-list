import { toggle_project_off } from "./toggle.js";

 const add_project = () =>{
    const projects = document.querySelector(".project-holder");
    // get name from input fiels
    const name = document.querySelector(".create-project-form input").value;

    // create container for elements
    let new_project = document.createElement("div")
    new_project.classList.add("project")

    //PROJECT NAME 
    let title = document.createElement("p");
    title.textContent = name;

    // delete icon
    const image = new Image();
    image.src = "./icons/close.svg"

    image.addEventListener('click', (e)=>{
        e.target.parentElement.remove();
    })

    new_project.appendChild(title)
    new_project.appendChild(image)
    projects.appendChild(new_project)
    toggle_project_off();
}

export default add_project