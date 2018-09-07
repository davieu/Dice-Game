/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//roll a dice randomly 1-6
dice = Math.floor(Math.random()*6)+1;

//select the activePlayer and gives current dice score to DOM using type-coercion. ('#current-' + activePlayer)
//.textContent can only set plain text and no HTML.
// document.querySelector('#current-' + activePlayer).textContent = dice;

//.innerHTML you can add html. html needs to be in string for javascript to parse it.
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//gets value of #score-1.
var x = document.querySelector('#score-1').textContent;
console.log(x);

//hides dice at the beginning of game.
document.querySelector('.dice').style.display = 'none';