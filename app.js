/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//hides dice at the beginning of game.
document.querySelector('.dice').style.display = 'none';

// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';

document.querySelector('#score-0').innerHTML = '0';
document.querySelector('#score-1').innerHTML = '0';
document.querySelector('#current-0').innerHTML = '0';
document.querySelector('#current-1').innerHTML = '0';

//anonymous function- function that doesnt have a name so it cant be reused
document.querySelector('.btn-roll').addEventListener('click', function() {
    //roll a dice randomly 1-6
    var dice = Math.floor(Math.random() *6) +1;
    //2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'img/dice-' + dice + '.png';
    //Update the round score IF the rolled number was not 1.
});





//.textContent can only set plain text and no HTML.
// document.querySelector('#current-' + activePlayer).textContent = dice;
//.innerHTML you can add html. html needs to be in string for javascript to parse it.
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// //callback function
// function btn() {
//  //do something here
// }

// // https://developer.mozilla.org/en-US/docs/Web/Events -- event listener list

// //callback function- not called by us but by another function. 
// //function that is passed into another function as an argument. In this case eventlistener will call the function
// document.querySelector('.btn-roll').addEventListener('click', btn);