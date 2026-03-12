
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

  // const inputElement = document.querySelector('#todoList');
  // const myTodoList = inputElement.value;

  // todoList.push(myTodoList);
  // inputElement.value = '';

  for (let i = 0; i < todos.length; i++) {
    const valueObject = todos[i];
    // const name = valueObject.name;
    // const dueDate = valueObject.dueDate;
    // Destructuring
    const {
      // name: name,
      // dueDate: dueDate
      name,
      dueDate // Shorthand Property
    } = valueObject;
    const generateHtml = `
      <div class="todoList">${name}</div>
      <div class="todoList">${dueDate}</div>
      <button class="delete" onclick="
        todos.splice(${i}, 1);
        removeTodoList();
        ">Delete</button>  
      `; // Generating the HTML
    todoListHtml += generateHtml;
  }
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