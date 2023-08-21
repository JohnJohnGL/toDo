const input = document.getElementById("input");
const button = document.getElementById("button");
const tasks = document.getElementById("tasks");

function addingTask(event){
    event.preventDefault();
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDoThing");
    const newTask = document.createElement("li");
    newTask.classList.add("list");
    newTask.innerText = input.value;
    toDoDiv.appendChild(newTask);
    const checkButton = document.createElement("button");
    checkButton.classList.add("checkButton");
    checkButton.innerText = "Done";
    toDoDiv.appendChild(checkButton);
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Gone!!!";
    toDoDiv.appendChild(deleteButton);
    tasks.appendChild(toDoDiv);
    input.value = "";
}
tasks.addEventListener("click", checkOrRemove);
function checkOrRemove(event){
    const item = event.target;
    if (item.classList[0] === "checkButton"){
        item.parentElement.classList.toggle("Completed");
    }
    else if(item.classList[0] === "deleteButton"){
        item.parentElement.remove();
    }
}


button.addEventListener("click", addingTask);