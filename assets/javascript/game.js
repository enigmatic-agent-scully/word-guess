
var words = ["scully", "mulder", "krycek", "deepthroat", "skinner", "kersh", "byers", "frohike", "langly", "dogget", "reyes",];

var currentWord = words[Math.floor(Math.random() * words.length)]; // chooses random word
var answerArray = currentWord.split(""); //splits chosen word into an array of letters

var correctArray = [];
var incorrectArray = [];
var wins = 0;
var gameStarted = false;
var hasFinished = false;
var misses = 0;
var spacesArray = [];
var displayWord = document.getElementById("currentWord");



console.log(currentWord);
console.log(currentWord.length);
console.log(answerArray);

window.addEventListener("DOMContentLoaded", function loadGame () {
    console.log(spacesArray);
    for (var i = 0; i < currentWord.length; i++) {
        spacesArray.push("_ ");

    };
    displayWord.innerHTML = `<span>${spacesArray.join("")}<span>`;
});



window.onkeypress = function uponGuess(event) {
    gameStarted = true;
    let userInput = event.key; 
    var findIndex = answerArray.indexOf(userInput);
    console.log(userInput);
    //for (i = 0; i < answerArray.length; i++) {
        if (findIndex != -1) {
            var regExp = new RegExp("/" + findIndex + "/", "g");
            //console.log(regExp)
            var x = spacesArray.join('').replace(spacesArray[findIndex],  userInput);
            console.log(findIndex);
            console.log(spacesArray[findIndex]);
            console.log(x);

            // spacesArray.join("").replace(spacesArray[findIndex], userInput);
            // //spacesArray.splice((answerArray.indexOf(userInput)), 1, userInput);
            // //spacesArray.replace(/`answerArray.indexOf(userInput)`/g)
            // displayWord.innerHTML = `<span>${spacesArray.join("")}<span>`;
        }
        else {
            console.log("Try again");
        }
        //if (event.key !== answerArray[i]) {

            //spacesArray.push(userInput);
           // misses--;
           // var guessedLettersSpan = document.createElement("span");
           // var guessedLettersText = document.createTextNode(spacesArray);
          //  guessedLettersSpan.appendChild(guessedLettersText);
           // document.getElementById("guessedLetters").appendChild(guessedLettersSpan);
           // break;
        }
    
    //};




