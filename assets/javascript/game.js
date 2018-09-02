
var words = ["scully", "mulder", "krycek", "deepthroat", "skinner", "kersh", "byers", "frohike", "langly", "dogget", "reyes",];

var currentWordIndex = words[Math.floor(Math.random() * words.length)];


var remainingGuesses = currentWordIndex.length;
var wins = 0;
var gameStarted = false;
var hasFinished = false;
var maxTries = 14;
var answerArray = currentWordIndex.split("");
var blankArray = []

console.log(currentWordIndex);
console.log(currentWordIndex.length);
console.log(answerArray);

window.addEventListener("DOMContentLoaded", function loadGame () {
    for (var i = 0; i < currentWordIndex.length; i++) {
        var newSpan = document.createElement("span");
        var textNode = document.createTextNode("_ ");
        newSpan.appendChild(textNode);
        document.getElementById("currentWord").appendChild(newSpan);
        newSpan.setAttribute("id", answerArray[i]);
    };
    var winsSpan = document.createElement("span");
    var winsText = document.createTextNode(wins);
    winsSpan.appendChild(winsText);
    document.getElementById("totalWins").appendChild(winsSpan);
    var guessCountSpan = document.createElement("span");
    var guessCountText = document.createTextNode(maxTries);
    guessCountSpan.appendChild(guessCountText);
    document.getElementById("guessesRemaining").appendChild(guessCountSpan);
});



document.addEventListener("keypress", function uponGuess() {
    var currentGuess = event.key;
    alert("You pressed " + currentGuess + "!");
    for (i = 0; i < answerArray.length; i++) {
        if (currentGuess = answerArray[i]) {
            document.getElementById("span", answerArray[i]).innerHTML(currentGuess);
        }
    }
} );




