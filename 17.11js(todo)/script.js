const todos = JSON.parse(localStorage.getItem("todos")) || [];
const added = document.querySelector(".added");
const add = document.querySelector(".add");
const inputodo = document.querySelector(".todo");
const all = document.querySelector(".all");
const completed = document.querySelector(".completed");
const pending = document.querySelector(".pending");
const clear = document.querySelector(".clear");
const modal = document.querySelector(".modal-bg");
const cleard = document.querySelector(".cleard");
const cancel = document.querySelector(".cancel");
const edit = document.querySelector(".edit-bg");
const cedit = document.querySelector(".cancel-edit");
const save = document.querySelector(".save");

let done = false;
let current = null;

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  added.innerHTML = "";
  todos.forEach((todo) => {
    createTodoElement(todo.text, todo.done);
  });
}

function createTodoElement(todoText, isDone = false) {
  const todorow = document.createElement("div");
  todorow.classList.add("block");
  todorow.innerHTML = `
        <input type="checkbox" class="scales" ${isDone ? "checked" : ""} />
        <h2 style="text-decoration: ${
          isDone ? "line-through" : "none"
        };">${todoText}</h2>
        <div class="icons">
            <i class="fa-solid fa-trash delete"></i>
            <i class="fa-regular fa-pen-to-square edit"></i>
        </div>
    `;
  added.appendChild(todorow);

  const checkbox = todorow.querySelector(".scales");
  const checktext = todorow.querySelector(".block h2");

  checkbox.addEventListener("click", function () {
    const index = todos.findIndex((todo) => todo.text === todoText);
    if (index !== -1) {
      todos[index].done = checkbox.checked;
      updateLocalStorage();
    }
    checktext.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  const deletee = todorow.querySelector(".delete");
  deletee.addEventListener("click", function () {
    todorow.remove();
    const index = todos.findIndex((todo) => todo.text === todoText);
    if (index !== -1) {
      todos.splice(index, 1);
      updateLocalStorage();
    }
  });

  const editt = todorow.querySelector(".edit");
  editt.addEventListener("click", function () {
    edit.style.display = "flex";
    const editing = document.querySelector(".editing");
    editing.value = todoText;
    current = todorow;
  });
}

function addingg() {
  const todoText = inputodo.value.trim();
  if (todoText === "") return;

  createTodoElement(todoText);
  todos.push({ text: todoText, done: false });
  updateLocalStorage();

  inputodo.value = "";
}

loadTodos();

save.addEventListener("click", function () {
  const editing = document.querySelector(".editing");
  let edited = editing.value.trim();
  const blocktodo = current.querySelector("h2");
  const oldText = blocktodo.textContent;
  blocktodo.textContent = edited;

  const index = todos.findIndex((todo) => todo.text === oldText);
  if (index !== -1) {
    todos[index].text = edited;
    updateLocalStorage();
  }

  edit.style.display = "none";
});

completed.addEventListener("click", function () {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    const checkbox = block.querySelector(".scales");
    block.style.display = checkbox.checked ? "flex" : "none";
  });
});
all.addEventListener("click", function () {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    block.style.display = "flex";
  });
});
pending.addEventListener("click", function () {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    const checkbox = block.querySelector(".scales");
    block.style.display = checkbox.checked ? "none" : "flex";
  });
});
clear.addEventListener("click", function () {
  modal.style.display = "flex";
});
cleard.addEventListener("click", function () {
  modal.style.display = "none";
  added.innerHTML = "";
  todos.length = 0;
  updateLocalStorage();
});
cancel.addEventListener("click", function () {
  modal.style.display = "none";
});
cedit.addEventListener("click", function () {
  edit.style.display = "none";
});
add.addEventListener("click", addingg);
inputodo.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addingg();
  }
});