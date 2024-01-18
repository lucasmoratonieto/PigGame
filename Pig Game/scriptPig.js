'use strict';

//the socore that will be added to each player
let currentScorePlayer1 = 0;
let totalScorePlayer1 = 0;
let currentScorePlayer2 = 0;
let totalScorePlayer2 = 0;
//the points of the FIRST player
const player1CurrentsPoints = document.getElementById('current--0');
const player1TotalScore = document.getElementById('score--0');

//the point of the SECOND player
const player2CurrentsPoints = document.getElementById('current--1');
const player2TotalScore = document.getElementById('score--1');

//both player
const addingPoints = document.querySelector('.current-score');

//the buttons
const rollDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newGameButton = document.querySelector('.btn--new');

//to change player
let i = 'player1';

//here is the image of the dice rolling
rollDiceButton.addEventListener('click', function () {
  // 1. generatiing a ramdom dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;
  //2. display the dice image
  document.querySelector('.dice').src = `dice-${dice}.png`;
  //currents points adding to players (need to change, for now all players)

  //now a condition to set the currents score to 0 if 1 appears
  //first the player 1 plays; i == player1 if dice != 1
  if (i == 'player1') {
    if (dice != 1) {
      currentScorePlayer1 += dice;
      player1CurrentsPoints.textContent = currentScorePlayer1;
      //if dice equal to 1 change other player and current score to 0 ( i= player2)
    } else if ((dice = 1)) {
      currentScorePlayer1 = 0;
      player1CurrentsPoints.textContent = currentScorePlayer1;
      if (i == 'player1') {
        i = 'player2';
        //this is to change colour depending of the player playing
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active');
      } else {
        i = 'player1';
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');
      }
    }

    //when player 2 is playing
  } else if (i == 'player2') {
    if (dice != 1) {
      currentScorePlayer2 += dice;
      player2CurrentsPoints.textContent = currentScorePlayer2;
      //if dice equal to 1 change other player and current score to 0
    } else if ((dice = 1)) {
      currentScorePlayer2 = 0;
      player2CurrentsPoints.textContent = currentScorePlayer2;
      if (i == 'player1') {
        i = 'player2';
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active');
      } else {
        i = 'player1';
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');
      }
    }
  }
});

//the hold button, add the player 1 his current score and reset all other varibales.
holdButton.addEventListener('click', function () {
  //player 1 has click on the hold button
  if (i == 'player1') {
    totalScorePlayer1 += currentScorePlayer1;
    player1TotalScore.textContent = totalScorePlayer1;
    //if the player 1 clicks on the hold button with more than 50 points
    if (totalScorePlayer1 >= 50) {
      document.querySelector('.player--0').classList.add('player--winner');
      //document.querySelector('.player--0').classList.add('.player--winner .name');
    }
    player1CurrentsPoints.textContent = 0;
    currentScorePlayer1 = 0;
    if (i == 'player1') {
      i = 'player2';
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
    } else {
      i = 'player1';
      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('.player--0').classList.add('player--active');
    }
    //player 2 has click on the hold button
  } else if (i == 'player2') {
    totalScorePlayer2 += currentScorePlayer2;
    player2TotalScore.textContent = totalScorePlayer2;
    //if the player 2 clicck hold button with more than 50 poitns
    if (totalScorePlayer2 >= 50) {
      document.querySelector('.player--1').classList.add('player--winner');
    }
    player2CurrentsPoints.textContent = 0;
    currentScorePlayer2 = 0;
    if (i == 'player1') {
      i = 'player2';
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
    } else {
      i = 'player1';
      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('.player--0').classList.add('player--active');
    }
  }
});

newGameButton.addEventListener('click', function () {
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  currentScorePlayer1 = 0;
  totalScorePlayer1 = 0;
  currentScorePlayer2 = 0;
  totalScorePlayer2 = 0;
  player1TotalScore.textContent = '0';
  player2TotalScore.textContent = '0';
  i = 'player1';
  player1CurrentsPoints.textContent = 0;
  player2CurrentsPoints.textContent = 0;
  document.querySelector('.dice').src =
    'data:image/jpeg;base64,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';
});
