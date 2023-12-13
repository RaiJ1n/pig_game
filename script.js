

let scores, currentScore, activePlayer, playing, scoreLimit;

// values
scores = [0, 0];
currentScore = 0;
activePlayer = 0;
playing = true;
scoreLimit = 100;
// Query selector
const holdButton = document.querySelector('.btn--hold');
const rollButton = document.querySelector('.btn--roll');
const newButton = document.querySelector('.btn--new');
// Set initial values in the HTML
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';

document.querySelector('.player--0').classList.add('player--active');
document.querySelector('.player--1').classList.remove('player--active');

document.querySelector('.dice').style.display = 'none';

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    activePlayer = activePlayer === 0 ? 1 : 0;

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

    // Event listener for the Roll Dice button
    rollButton.addEventListener('click', function () {
      if (playing) {
        const dice = Math.floor(Math.random() * 6) + 1;
        const diceImg = document.querySelector('.dice');
        diceImg.style.display = 'block';
        diceImg.src = `dice-${dice}.png`;

        if (dice !== 1) {
          currentScore += dice;
          document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
          switchPlayer();
        }
      }
    });

    // Event listener for the Hold button
    holdButton.addEventListener('click', function () {
      if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= scoreLimit) {
          playing = false;
          document.getElementById(`name--${activePlayer}`).textContent = 'Winner!';
          document.querySelector('.dice').style.display = 'none';
          document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
          document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
          switchPlayer();
        }
      }
    });

    // Event listener for the New Game button
    newButton.addEventListener('click', function () {
        scores = [0, 0];
        currentScore = 0;
        activePlayer = 0;
        playing = true;
    
        document.getElementById('score--0').textContent = '0';
        document.getElementById('score--1').textContent = '0';
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';
    
        document.getElementById('name--0').textContent = 'Player 1';
        document.getElementById('name--1').textContent = 'Player 2';
    
        document.querySelector('.player--0').classList.remove('player--winner');
        document.querySelector('.player--1').classList.remove('player--winner');
    
        document.querySelector('.player--0').classList.add('player--active');
        document.querySelector('.player--1').classList.remove('player--active');
    
        document.querySelector('.dice').style.display = 'none';
    });




    

































