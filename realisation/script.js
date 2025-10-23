const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Dakhal la tache dyalk"); 
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
      saveAndRender();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
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
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
