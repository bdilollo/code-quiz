var startButtonEl = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answers");
var timerEl = document.querySelector("#timer");
var outputEl = document.querySelector("#quiz");

startButtonEl.addEventListener("click", startGame)

var countdown = 30;

function startGame(event) {
    // startButtonEl.disabled = true; need to reenable when game is over if I want to include this
    var timerInterval = setInterval(function () {
        timerEl.textContent = countdown;
        countdown--;
        if(countdown === 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Time's up!";
            countdown = 30;
            // need to set up something that logs current score when timer hits 0--here or separate function?
            // think maybe create separate function to log score and call both if timer hits 0 or if all quesitons answered
        }
    } ,1000);

    codeQuiz();
}

// obviously not done--gonna wait until I have the rest of it more built out before finishing
function trackHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    questionEl.textContent = "High Scores";
    var list = document.createElement("li");
    list.textContent = highScores[0];
}

function codeQuiz() {
    // use .textContent or .innerHTML to display question and answers
    // answers need to be either buttons or multiple choice input fields(?) that can be clicked on
    // make sure correct and incorrect responses are able to be logged separately (prevent event bubbling? Input field?)
    // when answer is given, move on to next question
    // when all questions have been answered, stop timer and display score
    // determine if score qualifies for high score list (iterate through high score list?) and place it appropriately if it does
    // display high score list w/ updated score if relevant
    // store high scores in local storage
    // reenable button to restart game

}