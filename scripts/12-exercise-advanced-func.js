const add = () => {
  console.log(2 + 3);
}

add();
add();

function runTwice(fun) {
  fun();
  fun();
}

runTwice( () => {
  console.log('12b');
});

document.querySelector('.js-button-finished')
  .addEventListener('click', () => {
    finishedButton();
  })

function finishedButton() {
  document.querySelector('.js-button').innerText = 'Loading...';

    setTimeout(() => {
      document.querySelector('.js-button').innerHTML = 'Finished!' 
    }, 1000)
}

document.querySelector('.js-add-cart')
  .addEventListener('click', () => {
    addCart();
  })

let timerId;

function addCart() {
  const message =  document.querySelector('.generate-message');
    message.innerHTML = `<p>Added!</p>`;
    
    if (timerId === undefined) {
      timerId = setTimeout(() => {
        message.innerHTML = '';
      }, 2000);
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        message.innerHTML = '';
      }, 2000);
    }
}

document.querySelector('.js-add')
  .addEventListener('click', () => {
    appMessages('add');
  })

document.querySelector('.js-remove')
  .addEventListener('click', () => {
    appMessages('remove');
  })

let messages = 2;
let showMessage = true;

function appMessages(message) {
  if (message === 'add') {
    messages++
  } else if (message === 'remove') {
    messages--
  }

  setInterval(() => {
    if (messages > 0) {
      if (showMessage) {
        document.title = `(${messages}) New messages`;
        showMessage = false;
      } else {
        document.title = `App`;
        showMessage = true;
      }
    } else if (messages === 0) {
      document.title = `App`;
      showMessage = true;
    }
  }, 1000);
}