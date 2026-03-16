
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

    // Auto PLay
    function autoPLay() {
      if (!isAutoPlaying) {
        intervalId = setInterval( () => {
          const playerPick = pickMove();
          playerMove(playerPick);
        }, 1000);

        isAutoPlaying = true;
      } else {
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
      if (event.key === 'r') {
        playerMove('rock');
      } else if (event.key === 'p') {
        playerMove('paper');
      } else if (event.key === 's') {
        playerMove('scissors');
      };
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