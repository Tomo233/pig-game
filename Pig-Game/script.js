'use strict';

// Selecting Elements
// btns
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let btnNew = document.querySelector('.btn--new');
// -------------
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');

diceEl.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;

let activePlayer = 0;
let currentScore = 0;
let scores = 0;
let playing = true;

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
const init = function () {
  score0.textContent = 0;
  score1.textContent = 0;

  current0.textContent = 0;
  current1.textContent = 0;

  playing = true;
  activePlayer = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores;

    if (scores >= 20) {
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
