// TODO: TYPE YOUR CODE HERE
//Variables to select from the DOM to make the game work
var startBtn = document.querySelector(".start-button")
var wordBlanks = document.querySelector(".word-blanks")
var timerEl = document.querySelector(".timer-count")
var win = document.querySelector(".win")
var lose = document.querySelector(".lose")

//Sets game timer
var timer = 10;
var clockID;

// Adds words for the computer to choose from
var words = ["Javascript", "CSS", "HTML", "Node"]

// Allows computer to randomly pick a word to show
var computerPick = Math.floor(Math.random() * words.length);

// Pulls the index of words together for the computer to choose and show in the console
chosenWord = words[index];
console.log(chosenWord);

// Sets initial values for wins and losses shown on the page
var wins = 0;
var losses = 0;

// As a user, I want to start the game by clicking on a button.
// As a user, I want the game to be timed. = setInterval
// Provides an array of letters to insert blanks 
var letters = []

function blanks() {
    for (var i = 0; i < chosenWord.length; i++) {
        letters.push('_')
    }
    wordBlanks.textContent = letters.join(" ");
}

function countDown () {
    timer--;
    if (timer === 0) {
        clearInterval(clockID);
        return
    }
    timerEl.textContent=timer;
    
}

function startGame() {
    clockID = setInterval(countDown, 1000)
    blanks()
}

function getKeyboard(event) {
    var key = event.key
    compareChosenWord(key)
}

function compareChosenWord(key) {
    for (var i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === key) {
            //overwrites underscore with a key that matches
            letters[i] = key
        }
    }
    wordBlanks.textContent = letters.join(" ");
}

startBtn.addEventListener("click", startGame)
document.addEventListener("keydown", getKeyboard) {
    var timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = timer;

        if (timer === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
        }

    }, 1000);
    setTime();
}

