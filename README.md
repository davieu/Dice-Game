# Dice-Game

You can either use the chalenges.js or app.js. Be sure to comment out the one you will not be using on the index.html.

NOTE: the app.js is the normal game but i added the edit the final score so that users can change at anytime. Just type in the final score input box and put the final score that you want and then press hold.

NOTE: also had edit score. The challenges.js has extra rules implemented like if you get 2 sixes in a row the active player will get his/her score reset. and also has an extra dice at play

/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

create the fundamental game variables;
generate a random number;
manipulate the DOM;
read from the DOM;
change CSS styles
set up an event handler;
using callback function;
anonymous function;
select elements by ID;
change the image in an <img> element;
add, remove, and toggle HTML classes;
DRY principle

personal reminders
//gets value of #score-1.
var x = document.querySelector('#score-1').textContent;
console.log(x);