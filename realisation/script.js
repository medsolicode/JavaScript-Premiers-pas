const taskInput = document.getElementById("taskInput");  //fin kanketbo la tache
const addBtn = document.getElementById("addBtn"); //ajouter boutton
const taskList = document.getElementById("taskList"); //lista dyal tasks dyali

let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //bach kanhawlo les taches mn .json text l array

renderTasks(); //bach kan3erd les taches li 3andi

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") addTask(); //Enter boutton 
});

const clearAllBtn = document.getElementById("clearAllBtn");

clearAllBtn.addEventListener("click", () => { //delete all 
  if (confirm("are you sure?")) {
    tasks = [];
    saveAndRender();
  }
});

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Entrer la tache dyalk"); 
    return;
  }

  const task = { text: text, done: false };
  tasks.push(task);
  taskInput.value = "";
  saveAndRender();
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.done) span.style.textDecoration = "line-through";

    span.addEventListener("click", () => {
      task.done = !task.done;
      saveAndRender(); //task done with line fl wst 
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Effacer";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveAndRender();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
const prioritySelect = document.getElementById("prioritySelect"); //new select for priority

function addTask() {
  const text = taskInput.value.trim();
  const priority = prioritySelect.value; //get priority

  if (text === "") {
    alert("Entrer la tache dyalk"); 
    return;
  }

  const task = { text: text, done: false, priority: priority }; //add priority
  tasks.push(task);
  taskInput.value = "";
  prioritySelect.value = "Medium"; //reset to default
  saveAndRender();
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = `${task.text} [${task.priority}]`; //show priority
    if (task.done) span.style.textDecoration = "line-through";

    span.addEventListener("click", () => {
      task.done = !task.done;
      saveAndRender();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Effacer";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveAndRender();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks)); //bach bach nkhaliw ga3 les tache f local storage
  renderTasks();
}
