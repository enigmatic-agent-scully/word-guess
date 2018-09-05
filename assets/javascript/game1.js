var words = [
    "scully", 
    "mulder", 
    "krycek", 
    "deepthroat", 
    "skinner", 
    "kersh", 
    "byers", 
    "frohike", 
    "langly", 
    "dogget", 
    "reyes",];

var alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

var currentWord = words[Math.floor(Math.random() * words.length)];
var answerArray = currentWord.split("");
var wins = 0;
var gameStarted = false;
var hasFinished = false;
var maxTries = 14;
var incorrectGuessArray = [];
var correctGuessArray =  [];
var spacesArray =  [];

function renderSpaces() {
     
    for (var i = 0; i < answerArray.length; i++) {
        var guessSpace = "_";
        spacesArray.push(guessSpace);
        spacesArray.join(" ");
    };
    
}
renderSpaces()

function loadPage() {
    $("#currentWord").html(currentWord.join(" "))
        for (var i = 0; i < answerArray.length; i++) {
            spacesArray.splice(i, 1, "<span>_ </span>");


}
}



