
let todos = JSON.parse(localStorage.getItem('todos'));

if (todos === null) {
  todos = [{
    name: 'washing dishes',
    dueDate: '2026-01-20'
  }];
}

removeTodoList();


// const todoList = [];

function removeTodoList() {
  let todoListHtml = '';

  todos.forEach(function (valueObject, index) {
    const {
      name,
      dueDate // Shorthand Property
    } = valueObject;
    const generateHtml = `
      <div class="todoList">${name}</div>
      <div class="todoList">${dueDate}</div>
      <button class="delete" onclick="
        todos.splice(${index}, 1);
        removeTodoList();
        ">Delete</button>  
      `; // Generating the HTML
    todoListHtml += generateHtml;
  })

  console.log(todoListHtml);
  document.querySelector('.js-result-todoList').innerHTML = todoListHtml;

  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodoList() {
  const todosName = document.querySelector('#name');
  const name = todosName.value; // value property represent the text in the textbox

  const todosDate = document.querySelector('#date');
  const dueDate = todosDate.value;

  todos.push({
    name,
    dueDate
  }); // push the value in todo in a todos array
  console.log(todos);

  todosName.value = ''; // this will make the text in the textbox become empty after clicking the add button
  todosDate.value = '';

  removeTodoList();

  localStorage.setItem('todos', JSON.stringify(todos));
}