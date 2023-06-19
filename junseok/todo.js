const todoForm = document.getElementById("todo__form");
const removeBtns = document.querySelectorAll(".remove__button");
const todoList = document.getElementById("todo__list");

let todos = [];

todoForm.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const todoText = formData.get("todo__input");
  const todoId = Date.now();
  const todoData = {
    id: todoId,
    content: todoText,
  };
  todos.push(todoData);
  getTodos(todoData);
  saveTodo();
  document.getElementById("todo__input").value = "";
}

removeBtns.forEach((btn) => {
  btn.addEventListener("click", removeTodo);
});

function removeTodo(e) {
  e.stopPropagation();
  const parent = e.target.parentElement;
  const parentId = parent.id;
  parent.remove();
  const revisedTodos = todos.filter((todo) => todo.id !== parseInt(parentId));
  todos = revisedTodos;
  if (parentId) {
    saveTodo();
  }
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(todoData) {
  const li = document.createElement("li");
  const textSpan = document.createElement("span");
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "삭제";
  removeBtn.classList.add("remove__button");
  removeBtn.addEventListener("click", removeTodo);
  li.id = todoData.id;
  li.classList.add("todo__item");
  textSpan.innerHTML = todoData.content;
  li.append(textSpan, removeBtn);
  todoList.append(li);
}

const storedTodos = JSON.parse(localStorage.getItem("todos"));

if (storedTodos !== null) {
  todos = storedTodos;
  todos.forEach(getTodos);
}
