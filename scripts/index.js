console.log(document.querySelector('.test').classList.contains('js-button'));

function istoggled(button) {
  if (button.classList.contains('is-toggled')) {
    button.classList.remove('is-toggled');
  } else {
    button.classList.add('is-toggled');
  }
}

function istoggled(button) {
  const defaultBtn = document.querySelectorAll('.toggled');

  // for - This creates a loop that will repeat an action multiple times
  // let i = 0 - Start counting from 0 (first button)
  // i < defaultBtn.length - Keep looping as long as i is less than the total number of buttons
  // i++ - After each loop, add 1 to i (move to the next button)
  // defaultBtn[i] - Get the button at position i (0 = first button, 1 = second button, etc.)
  // .classList.remove('is-toggled') - Remove the 'is-toggled' class from that button
  for (let i = 0; i < defaultBtn.length; i++) {
    defaultBtn[i].classList.remove('is-toggled')
  }


  button.classList.add('is-toggled');
}

function myMusicToggled() {
  const musicToggle = document.querySelector('.my-music');

  if (musicToggle.classList.contains('music-toggled')) {
    musicToggle.classList.remove('music-toggled');
  } else {
    musicToggle.classList.add('music-toggled');
  }
}

function isTechToggled() {
  const techToggle = document.querySelector('.tech');

  if (techToggle.classList.contains('tech-toggled')) {
    techToggle.classList.remove('tech-toggled');
  } else {
    techToggle.classList.add('tech-toggled');
  }
}