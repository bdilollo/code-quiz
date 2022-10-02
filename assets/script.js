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
   
}