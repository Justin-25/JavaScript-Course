
    // Convert JSON object into JS object
    let score = JSON.parse(localStorage.getItem('score'));

    // Object score
    if (score === null) {
      score = {
        wins: 0,
        losses: 0,
        tie: 0
      }
    }

    let isAutoPlaying = false;
    let intervalId;

    document.querySelector('.js-auto-play')
      .addEventListener('click', () => {
        autoPLay();
      })

    // Auto PLay
    function autoPLay() {
      if (!isAutoPlaying) {
        intervalId = setInterval( () => {
          document.querySelector('.auto-play').innerHTML = 'Stop Playing';
          const playerPick = pickMove();
          playerMove(playerPick);
        }, 1000);
        isAutoPlaying = true;
      } else {
        document.querySelector('.auto-play').innerHTML = 'Auto Play';
        clearInterval(intervalId);
        isAutoPlaying = false;
      }
    }

    document.querySelector('.js-button-rock')
      .addEventListener('click', () => {
        playerMove('rock');
      });

    document.querySelector('.js-button-paper')
      .addEventListener('click', () => {
        playerMove('paper');
      });
    
    document.querySelector('.js-button-scissors')
      .addEventListener('click', () => {
        playerMove('scissors');
      });

    document.body.addEventListener('keydown', (event) => {
      console.log(event.key);

      if (event.key === 'r') {
        playerMove('rock');
      } else if (event.key === 'p') {
        playerMove('paper');
      } else if (event.key === 's') {
        playerMove('scissors');
      } else if (event.key === 'a') {
        autoPLay();
      } else if (event.key == ' ') {
        document.querySelector('.confirmation-button').innerHTML = `
        <p class="js-confirmation">Are you sure you want to reset the score?</p>
        <div>
          <button class="yes yes-reset-button">Yes</button>
          <button class="no no-reset-button">No</button>
        </div>
        `
        document.querySelector('.yes-reset-button')
          .addEventListener('click', () => {
            score.wins = 0;
            score.losses = 0;
            score.tie = 0;
            localStorage.removeItem('score');
            updateScore();
            document.querySelector('.confirmation-button').innerHTML = '';
          })

        document.querySelector('.no-reset-button')
          .addEventListener('click', () => {
            document.querySelector('.confirmation-button').innerHTML = '';
          })
      }
    });

    // PLayer move
    function playerMove(move) {
      const computerMove = pickMove();
      let result = ''

      if (move === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }
      } else if (move === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }
      } else if (move === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else if (computerMove === 'scissors') {
          result = 'Tie.';
        }
      }

      if (result === 'You win.') {
        score.wins++;
      } else if (result === 'You lose.') {
        score.losses++;
      } else if (result === 'Tie.') {
        score.tie++
      }

      updateScore();

      localStorage.setItem('score', JSON.stringify(score));
      document.querySelector('.js-result').innerHTML = `Result: ${result}`;
      document.querySelector('.js-pick').innerHTML = `You: <img class="result-move" src="images/${move}-emoji.png"> - <img class="result-move" src="images/${computerMove}-emoji.png"> :Computer`
    }

    document.querySelector('.js-reset')
      .addEventListener('click', () => {
        document.querySelector('.confirmation-button').innerHTML = `
        <p class="js-confirmation">Are you sure you want to reset the score?</p>
        <div>
          <button class="yes yes-reset-button">Yes</button>
          <button class="no no-reset-button">No</button>
        </div>
        `
        document.querySelector('.yes-reset-button')
          .addEventListener('click', () => {
            score.wins = 0;
            score.losses = 0;
            score.tie = 0;
            localStorage.removeItem('score');
            updateScore();
            document.querySelector('.confirmation-button').innerHTML = '';
          })

        document.querySelector('.no-reset-button')
          .addEventListener('click', () => {
            document.querySelector('.confirmation-button').innerHTML = '';
          })
      })

    function updateScore() {
      document.querySelector('.js-score').innerHTML = `Score: Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}.`;
    }

    // Computer will pick a random
    function pickMove() {
      const randomNumber = Math.random();
      let computerMove = ''

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;
    }