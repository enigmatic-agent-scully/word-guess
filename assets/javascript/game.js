
var words = ["scully", "mulder", "krycek", "deepthroat", "skinner", "kersh", "byers", "frohike", "langly", "dogget", "reyes",];

var currentWord = words[Math.floor(Math.random() * words.length)]; // chooses random word
var answerArray = currentWord.split(""); //splits chosen word into an array of letters

var correctArray = [];
var incorrectArray = [];
var wins = 0;
var gameStarted = false;
var hasFinished = false;
var misses = 0;




console.log(currentWord);
console.log(currentWord.length);
console.log(answerArray);

window.addEventListener("DOMContentLoaded", function loadGame () {
    var spacesArray = answerArray.splice(0, 0, "_ ");
    console.log(spacesArray);
    for (var i = 0; i < currentWord.length; i++) {
        spacesArray.push("_ ");
        document.getElementById("currentWord").innerHTML("<span>_ </span>");
    };

});



window.onkeypress = function uponGuess() {
    gameStarted = true;
    let userInput = event.key; 
    for (i = 0; i < answerArray.length; i++) {
        if (userInput === answerArray[i]) {
        document.getElementById("span", userInput).innerText(userInput);
            misses--;
            
        }
        else if (event.key !== answerArray[i]) {
            spacesArray.push(userInput);
            misses--;
            var guessedLettersSpan = document.createElement("span");
            var guessedLettersText = document.createTextNode(spacesArray);
            guessedLettersSpan.appendChild(guessedLettersText);
            document.getElementById("guessedLetters").appendChild(guessedLettersSpan);
            break;
        }
    }
    }
};




