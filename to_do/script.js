// Load tasks + theme from localStorage
window.onload = function () {
  loadTasks();
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeToggle").checked = true;
  }
};

// Add task
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if (taskValue === "") return;

  let taskList = document.getElementById("taskList");

  let li = document.createElement("li");
  li.textContent = taskValue;

  li.onclick = function () {
    li.classList.toggle("completed");
    saveTasks();
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = function () {
    li.remove();
    saveTasks();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  saveTasks();
}

// Save tasks to localStorage
function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  let savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  savedTasks.forEach((task) => {
    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) li.classList.add("completed");

    li.onclick = function () {
      li.classList.toggle("completed");
      saveTasks();
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
      li.remove();
      saveTasks();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Dark mode toggle
document.getElementById("themeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
