
var words = ["scully", "mulder", "krycek", "deepthroat", "skinner", "kersh", "byers", "frohike", "langly", "dogget", "reyes",];

var currentWord = words[Math.floor(Math.random() * words.length)]; // chooses random word
var answerArray = currentWord.split(""); //splits chosen word into an array of letters

var incorrectArray = [];
var wins = 0;
var gameStarted = false;
var hasFinished = false;
var misses = 0;
var spacesArray = [];
var displayWord = document.getElementById("currentWord");
var lettersGuessed = document.getElementById("guessedLetters");

console.log(currentWord);
console.log(currentWord.length);
console.log(answerArray);

window.addEventListener("DOMContentLoaded", function loadGame() {

    for (var i = 0; i < currentWord.length; i++) {
        spacesArray.push("_ ");
    };
    console.log(spacesArray);
    displayWord.innerHTML = `<span>${spacesArray.join("")}<span>`;
});

window.onkeypress = function uponGuess(event) {
    gameStarted = true;
    let userInput = event.key;
    var index = answerArray.indexOf(userInput);
    console.log(userInput);
    if (index != -1) {
        console.log(index);
        spacesArray.splice(index, 1, userInput);
        index2 = answerArray.indexOf(userInput, index + 1);
        if (index2 != -1) {
            spacesArray.splice(index2, 1, userInput);
            console.log(index2);
            displayWord.innerHTML = `<span>${spacesArray.join(" ")}<span>`;
        }
        else {
            displayWord.innerHTML = `<span>${spacesArray.join(" ")}<span>`;
        }
        console.log(spacesArray);
    }
    else {
        console.log("Try again");
        incorrectArray.push(userInput);
        lettersGuessed.innerHTML = `<span>letters guessed: ${incorrectArray.join(", ")}</span>`
    }
}





