

var wins = 0;
var losses = 0;
var computerLetter;
var guessesLeft = 10;
var guessesSoFar = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function randomAlpha () {
    computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerLetter);
}

randomAlpha()
document.onkeyup = function(event) {

    var userLetter = event.key;

    if (userLetter.length === 1) {
        
        if (userLetter === computerLetter) {
            wins++;
            guessesLeft = 10;
            guessesSoFar = [];
            randomAlpha ();
        }
        else {
            guessesSoFar.push(userLetter).value;
            guessesLeft--;
        }

        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 10;
            guessesSoFar = [];
            randomAlpha ();
        }
    
        var winsText = document.getElementById("winsText");
        var lossesText = document.getElementById("lossesText");
        var guessesLeftText = document.getElementById("guessesLeftText");
        var guessesSoFarText = document.getElementById("guessesSoFarText");

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessesSoFarText.textContent = "Guesses so far: " + guessesSoFar;
    }
}

