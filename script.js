const form = document.querySelector("#new-todo-form");
const todoInput = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");
const todos = [];
const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST";
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;
const todos = loadTodos();
todos.forEach(renderTodo);

// Add todos
// User will type in todo and click add todo button.
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoName = todoInput.value;
  if (todoName === "") return;
  todos.push(todoName);
  // render todo
  renderTodo(todoName);
  saveTodos();
  todoInput.value = "";
});

//This should then add the todo to the list above.
function renderTodo(todoName) {
  const templateClone = template.content.cloneNode(true);
  const textElement = templateClone.querySelector("[data-list-item-text]");
  textElement.innerText = todoName;
  list.appendChild(templateClone);
}

// Load todos
function loadTodos() {
  const todosString = localStorage.getItem(TODOS_STORAGE_KEY);
  return JSON.parse(todosString) || [];
}

// Save todos
function saveTodos() {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify);
}
