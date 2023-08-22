const input = document.getElementById("input");
const button = document.getElementById("button");
const tasks = document.getElementById("tasks");

function addingTask(event) {
    const taskText = input.value.trim(); // Trim whitespace from input value
    if (taskText === '') {
        alert("Input Task");
    } else{
  event.preventDefault();
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("toDoThing");
  const newTask = document.createElement("li");
  newTask.classList.add("list");
  newTask.innerText = input.value;
  toDoDiv.appendChild(newTask);
  const checkButton = document.createElement("button");
  checkButton.classList.add("checkButton");
  checkButton.innerText = "DONE";
  toDoDiv.appendChild(checkButton);
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerText = "REMOVE";
  toDoDiv.appendChild(deleteButton);
  tasks.appendChild(toDoDiv);
  input.value = "";};
  saveData();
}
tasks.addEventListener("click", checkOrRemove);
function checkOrRemove(event) {
  const item = event.target;
  if (item.classList[0] === "checkButton") {
    const li = document.querySelector(".list");
    li.classList.toggle("Completed");
    const checkedButton = document.querySelector(".checkButton");
      checkedButton.classList.toggle("checkButtonComplete");
    saveData();
  } else if (item.classList[0] === "deleteButton") {
    item.parentElement.remove();
    saveData();
  }
}

function saveData(){
  localStorage.setItem("data", tasks.innerHTML);
}

function showTask(){
  tasks.innerHTML = localStorage.getItem("data");
}

showTask();

button.addEventListener("click", addingTask);
