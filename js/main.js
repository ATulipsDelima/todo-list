import add_project from "./add.js";
import { toggle_project_off, toggle_project_on } from "./toggle.js";
const add = document.querySelector(".create-project-form .add");
const cancel = document.querySelector(".create-project-form .cancel");

const create_btn = document.querySelector(".create-project");



add.addEventListener('click', () => add_project());
cancel.addEventListener('click', () => toggle_project_off());
create_btn.addEventListener('click', ()=> toggle_project_on());