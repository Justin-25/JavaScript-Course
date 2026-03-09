const todos = []; // Empty array

function addTodos1() {
  const myTodos = document.querySelector('#todos1');
  const todo = myTodos.value; // value property represent the text in the textbox

  todos.push(todo); // push the value in todo in a todos array
  console.log(todos);

  myTodos.value = ''; // this will make the text in the textbox become empty after clicking the add button
}

const todoList = [];

function addTodoList() {
  let listTodo = '';

  const inputElement = document.querySelector('#todoList');
  const myTodoList = inputElement.value;

  todoList.push(myTodoList);
  inputElement.value = '';

  for (let i = 0; i < todoList.length; i++) {
    const value = todoList[i];
    const pHtml = `<p>${value}</p>`; // Generating the HTML
    listTodo += pHtml;

    document.querySelector('.js-result-todoList').innerHTML = listTodo;
  }
}