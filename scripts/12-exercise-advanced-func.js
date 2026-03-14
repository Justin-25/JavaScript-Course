const add = function () {
  console.log(2 + 3);
}

add();
add();

function runTwice(fun) {
  fun();
  fun();
}

runTwice(function () {
  console.log('12b');
});

function finishedButton() {
  document.querySelector('.js-button').innerText = 'Loading...';

    setTimeout(function () {
      document.querySelector('.js-button').innerHTML = 'Finished!' 
    }, 1000)
}

let timerId;

function addCart() {
  const message =  document.querySelector('.generate-message');
    message.innerHTML = `<p>Added!</p>`;
    
    if (timerId === undefined) {
      timerId = setTimeout(function () {
        message.innerHTML = '';
      }, 2000);
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(function () {
        message.innerHTML = '';
      }, 2000);
    }
}

let messages = 2;
let showMessage = true;

function appMessages(message) {
  if (message === 'add') {
    messages++
  } else if (message === 'remove') {
    messages--
  }

  setInterval(function () {
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