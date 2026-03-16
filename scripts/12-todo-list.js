
let todos = JSON.parse(localStorage.getItem('todos'));

if (todos === null) {
  todos = [{
    name: 'washing dishes',
    dueDate: '2026-01-20'
  }];
}

removeTodoList();

function removeTodoList() {
  let todoListHtml = '';

  todos.forEach((valueObject, index) => {
    const {
      name,
      dueDate // Shorthand Property
    } = valueObject;
    const generateHtml = `
      <div class="todoList">${name}</div>
      <div class="todoList">${dueDate}</div>
      <button class="delete js-delete-list">Delete</button>  
      `; // Generating the HTML
    todoListHtml += generateHtml;
  })

  console.log(todoListHtml);
  document.querySelector('.js-result-todoList').innerHTML = todoListHtml;


  // We used querySelectorAll to get a list of all the delete buttons on the page and then we loop through the list, using forEach() and for each delete button we added a click event listener
  document.querySelectorAll('.js-delete-list')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todos.splice(index, 1)
        removeTodoList();
      })
    })

  localStorage.setItem('todos', JSON.stringify(todos));
}

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodoList();
  })

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