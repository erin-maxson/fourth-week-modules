// TODO: TYPE YOUR CODE HERE
//Variables to select from the DOM to make the game work
var startBtn = document.querySelector(".start-button")
var wordBlanks = document.querySelector(".word-blanks")
var timerEl = document.querySelector(".timer-count")
var win = document.querySelector(".win")
var lose = document.querySelector(".lose")

//Sets game timer
var timer = 10;

// Adds words for the computer to choose from
var words = ["Javascript", "CSS", "HTML", "Node"]

// Allows computer to randomly pick a word to show
var computerPick = Math.floor(Math.random() * words.length);

// Pulls the index of words together for the computer to choose and show in the console
chosenWord = words [index];
console.log(chosenWord);

// Sets initial values for wins and losses shown on the page
var wins = 0;
var losses = 0;

// As a user, I want to start the game by clicking on a button.
// As a user, I want the game to be timed. = setInterval
startBtn.addEventListener("click", function() {
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
  
// As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.
// Must define the words for the computer and have the computer pick the word
// add a keydown addEventListener to the entire document

// As a user, I want to win the game when I have guessed all the letters in the word.
// fill in blanks correctly before time hits zero, display "You won!"

// As a user, I want to lose the game when the timer runs out before I have guessed all the letters.
// if timer equals zero and blanks aren't filled completely, display "You lost :("

// As a user, I want to see my total wins and losses on the screen


// Specifications
// When a user presses a letter key, the user's guess should be captured as a key event.

// When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear.

// When a user wins or loses a game, a message should appear and the timer should stop.

// When a user clicks the start button, the timer should reset.

// When a user refreshes or returns to the brower page, the win and loss counts should persist.
)