/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// CHALLENGES
//1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
//2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
//3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)

//Pseudo
//if 6 is rolled twice thw whole score is reset and nextplayer turn
//i need to figure out if to sixes are rolled in a roll

//these are declared variables
var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

//rolls the dice 1-6
//anonymous function- function that doesnt have a name so it cant be reused
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        
        //roll a dice randomly 1-6
        var dice1 = Math.floor(Math.random() *6) +1;
        var dice2 = Math.floor(Math.random() *6) +1;

        //2. display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'img/dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'img/dice-' + dice2 + '.png';

        if (dice1 !== 1 && dice2 !== 1) {
            //add score, adds the dice throws
            roundScore += dice1 + dice2;
            //gets the current player score
            document.querySelector('#current-' + activePlayer).innerHTML = roundScore;
        } else {
            nextPlayer();
        }
        console.log('dice 1 = ' + dice1)
        console.log('dice 2 = ' + dice2)

    }
});


//saves the round score and changes turn depending on if a player won or not
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        //add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        //update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        var input = document.querySelector('.final-score').value;
        var winningScore;
        console.log(input);

        //undefined, 0, null, or "" are coerced to false
        //anything else is coerced to true
        if (input) {
            winningScore = input;
        } else {
            winningScore = 50;
        };

        //check if player won game, or goes to Next player
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    };
});

//switches player based on active player and resets roundscore.
function nextPlayer() {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    //if written as an IF statment
            // if (activePlayer === 0) {
    //     activePlayer = 1;
    // }else {
    //     activePlayer = 0;
    // };
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}


//starts a new game when click on new game by passing init function in the argument. When button clicked init function is called.
document.querySelector('.btn-new').addEventListener('click', init);

//this is the initialization function. all stats are reset or how the board looks on load up.
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    //hides dice at the beginning of game.
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.querySelector('#score-0').innerHTML = '0';
    document.querySelector('#score-1').innerHTML = '0';
    document.querySelector('#current-0').innerHTML = '0';
    document.querySelector('#current-1').innerHTML = '0';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //the player that is actively rolling
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';
}


//PERSONAL NOTES
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