
var words = ["scully", "mulder", "krycek", "deepthroat", "skinner", "kersh", "byers", "frohike", "langly", "dogget", "reyes",];

var currentWordIndex = words[Math.floor(Math.random() * words.length)];


var remainingGuesses = currentWordIndex.length;
var wins = 0;
var gameStarted = false;
var hasFinished = false;
var maxTries = 14;
var answerArray = currentWordIndex.split("");

console.log(currentWordIndex);
console.log(currentWordIndex.length);
console.log(answerArray);

window.addEventListener("DOMContentLoaded", function loadGame () {
    for (var i = 0; i < currentWordIndex.length; i++) {
        var newSpan = document.createElement("span");
        var textNode = document.createTextNode("_ ");
        newSpan.appendChild(textNode);
        document.getElementById("currentWord").appendChild(newSpan);
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

//document.addEventListener("keypress", function uponGuess() {
  //var keyPress = String.fromCharCode(event.keyCode || event.code).toLowerCase();
  //var guessedLetters = [];
  //keyPress.push(guessedLetters);



//})
