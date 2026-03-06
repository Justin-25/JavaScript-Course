console.log(document.querySelector('.test').classList.contains('js-button'));

function istoggled(button) {

  if (button.classList.contains('is-toggled')) {
    button.classList.remove('is-toggled');
  } else {
    button.classList.add('is-toggled');
  }
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