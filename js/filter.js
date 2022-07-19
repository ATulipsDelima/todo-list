
const filter_task = (target)=>{
    // get all cards
    const tasks = document.querySelectorAll(".card");
    // to change title on nav bar title
    const current_project = document.querySelector(".current-project");
    current_project.textContent = target

    tasks.forEach(task =>{
        task.style.display = "block"
    })
    //find text inside <b></b> and hide all elements not equal to project name

    tasks.forEach(task => {
        if(task.childNodes[3].childNodes[1].childNodes[1].textContent !== target){
            task.style.display = "none"
        }
        
    });
}

// when default project is clicked
const show_all = () =>{
    // get all cards
    const tasks = document.querySelectorAll(".card");
    // to change title on nav bar title
    const current_project = document.querySelector(".current-project");
    current_project.textContent = "Inbox"
    tasks.forEach(task =>{
        task.style.display = "block"
    })
}

export {filter_task, show_all};