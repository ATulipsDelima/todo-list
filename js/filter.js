
const filter_task = (target)=>{
    const tasks = document.querySelectorAll(".card");

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
    const tasks = document.querySelectorAll(".card");

    tasks.forEach(task =>{
        task.style.display = "block"
    })
}

export {filter_task, show_all};