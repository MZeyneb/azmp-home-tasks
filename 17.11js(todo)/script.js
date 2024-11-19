let todos = JSON.parse(localStorage.getItem("todos")) || [];
const added = document.querySelector(".added");
const add = document.querySelector(".add")
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

function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function renderTodos() {
  added.innerHTML = "";
  todos.forEach((todoText) => {
    const todorow = document.createElement("div");
    todorow.classList.add("block");
    todorow.innerHTML = `
      <input type="checkbox" class="scales" />
      <h2>${todoText}</h2>
      <div class="icons">
        <i class="fa-solid fa-trash delete"></i>
        <i class="fa-regular fa-pen-to-square edit"></i>
      </div>
      `
    ;

    added.appendChild(todorow);

    const checkbox = todorow.querySelector(".scales");
    const checktext = todorow.querySelector("h2");


    checkbox.addEventListener("click", function () {
      if (checkbox.checked) {
        checktext.style.textDecoration = "line-through";
        done = true;
      } else {
        checktext.style.textDecoration = "none";
        done = false;
      }
      saveToLocalStorage();
    });

    const deletee = todorow.querySelector(".delete");
    deletee.addEventListener("click", function () {
      todorow.remove();
      const index = todos.indexOf(todoText);
      if (index !== -1) {
        todos.splice(index, 1);
        saveToLocalStorage();
      }
    });

    const editt = todorow.querySelector(".edit");
    editt.addEventListener("click", function () {
      edit.style.display = "flex";
      const editing = document.querySelector(".editing");
      editing.value = todoText;
      current = todoText; 
    });
  });
}
function addingg() {
    const todoText = inputodo.value.trim();
    if (todoText !== ""){

        todos.push(todoText);
        saveToLocalStorage(); 
        renderTodos();
        inputodo.value = "";

    }
  
  }

save.addEventListener("click", function(){
    const editing = document.querySelector(".editing");
    let edited = editing.value.trim();
    const blocktodo = current.querySelector("h2");
    blocktodo.textContent = edited
    const index = todos.indexOf(blocktodo.textContent);
        if(index!== -1){
            todos[index] = edited;
        }
        saveToLocalStorage(); 
        renderTodos();
        edit.style.display= "none";
})

completed.addEventListener("click", function(){
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block)=>{
    const checkbox = block.querySelector(".scales")

    if(!checkbox.checked){
        block.style.display = "none";
    }
    else{
        block.style.display = "flex";

    }

    })
})

all.addEventListener("click", function(){
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block)=>{
        block.style.display = "flex";


    })
})

pending.addEventListener("click", function(){
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block)=>{
    const checkbox = block.querySelector(".scales")

    if(!checkbox.checked){
        block.style.display = "flex";
    }
    else{
        block.style.display = "none";

    }

    })
})
clear.addEventListener("click", function(){
    modal.style.display = "flex";
})
cleard.addEventListener("click", function(){

    modal.style.display = "none";
    added.innerHTML = "";
    todos = [];
    saveToLocalStorage()
    

})
cancel.addEventListener("click", function(){
    modal.style.display = "none";

})


cedit.addEventListener("click", function(){
    edit.style.display="none"
})

add.addEventListener("click", addingg)

inputodo.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addingg();
    }
})

renderTodos();

// console.log(todos);

