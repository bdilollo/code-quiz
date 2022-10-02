var startButtonEl = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answers");
var timerEl = document.querySelector("#timer");
var outputEl = document.querySelector("#quiz");

startButtonEl.addEventListener("click", startTimer)

var countdown = 30;

function startTimer(event) {
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
            renderScore();
        }
    } ,1000);

    question1();
}

// obviously not done--gonna wait until I have the rest of it more built out before finishing
function trackHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    questionEl.textContent = "High Scores";
    var list = document.createElement("li");
    list.textContent = highScores[0];
}

function question1() {
    // use .textContent or .innerHTML to display question and answers
    questionEl.textContent = "Which of the following is not one of the three core coding languages?";
    var list1 = document.createElement("li");
    // list1.textContent = "this is the first answer";
    answerEl.appendChild(list1);
    var answer1 = document.createElement("button");
    answer1.textContent = "CSS";
    // add button id for styling?
    list1.appendChild(answer1);
    answer1.addEventListener("click", checkAnswer);

    var list2 = document.createElement("li");
    answerEl.appendChild(list2);
    var answer2 = document.createElement("button");
    answer2.textContent = "Git";
    answer2.setAttribute("id", "correct");
    // add button id for styling?
    list2.appendChild(answer2);
    answer2.addEventListener("click", checkAnswer);

    var list3 = document.createElement("li");
    answerEl.appendChild(list3);
    var answer3 = document.createElement("button");
    answer3.textContent = "HTML";
    // add button id for styling?
    list3.appendChild(answer3);
    answer3.addEventListener("click", checkAnswer);

    var list4 = document.createElement("li");
    answerEl.appendChild(list4);
    var answer4 = document.createElement("button");
    answer4.textContent = "JavaScript";
    // add button id for styling?
    list4.appendChild(answer4);
    answer4.addEventListener("click", checkAnswer);


}
function question2() {
    // use .textContent or .innerHTML to display question and answers
    questionEl.textContent = "Which of the following is an example of a non-semantic HTML tag?";
    var list1 = document.createElement("li");
    // list1.textContent = "this is the first answer";
    answerEl.appendChild(list1);
    var answer1 = document.createElement("button");
    answer1.textContent = "<main>";
    // add button id for styling?
    list1.appendChild(answer1);
    answer1.addEventListener("click", checkAnswer);

    var list2 = document.createElement("li");
    answerEl.appendChild(list2);
    var answer2 = document.createElement("button");
    answer2.textContent = "<header>";
    // add button id for styling?
    list2.appendChild(answer2);
    answer2.addEventListener("click", checkAnswer);

    var list3 = document.createElement("li");
    answerEl.appendChild(list3);
    var answer3 = document.createElement("button");
    answer3.textContent = "<aside>";
    // add button id for styling?
    list3.appendChild(answer3);
    answer3.addEventListener("click", checkAnswer);

    var list4 = document.createElement("li");
    answerEl.appendChild(list4);
    var answer4 = document.createElement("button");
    answer4.textContent = "<div>";
    answer4.setAttribute("id","correct");
    // add button id for styling?
    list4.appendChild(answer4);
    answer4.addEventListener("click", checkAnswer);


}
function question3() {
    // use .textContent or .innerHTML to display question and answers
    questionEl.innerHTML = "Which of the following CSS selectors would apply to an HTML element with a <strong>class</strong> of 'card'?";
    var list1 = document.createElement("li");
    // list1.textContent = "this is the first answer";
    answerEl.appendChild(list1);
    var answer1 = document.createElement("button");
    answer1.textContent = "card {";
    // add button id for styling?
    list1.appendChild(answer1);
    answer1.addEventListener("click", checkAnswer);

    var list2 = document.createElement("li");
    answerEl.appendChild(list2);
    var answer2 = document.createElement("button");
    answer2.textContent = "#card {";
    // add button id for styling?
    list2.appendChild(answer2);
    answer2.addEventListener("click", checkAnswer);

    var list3 = document.createElement("li");
    answerEl.appendChild(list3);
    var answer3 = document.createElement("button");
    answer3.textContent = ".card {";
    answer3.setAttribute("id", "correct");
    // add button id for styling?
    list3.appendChild(answer3);
    answer3.addEventListener("click", checkAnswer);

    var list4 = document.createElement("li");
    answerEl.appendChild(list4);
    var answer4 = document.createElement("button");
    answer4.textContent = "*card {";
    // add button id for styling?
    list4.appendChild(answer4);
    answer4.addEventListener("click", checkAnswer);


}
function question4() {
    // use .textContent or .innerHTML to display question and answers
    questionEl.textContent = "_______ is a valid type of value in JavaScript.";
    var list1 = document.createElement("li");
    // list1.textContent = "this is the first answer";
    answerEl.appendChild(list1);
    var answer1 = document.createElement("button");
    answer1.textContent = "boolean";
    // add button id for styling?
    list1.appendChild(answer1);
    answer1.addEventListener("click", checkAnswer);

    var list2 = document.createElement("li");
    answerEl.appendChild(list2);
    var answer2 = document.createElement("button");
    answer2.textContent = "string";
    // add button id for styling?
    list2.appendChild(answer2);
    answer2.addEventListener("click", checkAnswer);

    var list3 = document.createElement("li");
    answerEl.appendChild(list3);
    var answer3 = document.createElement("button");
    answer3.textContent = "number";
    // add button id for styling?
    list3.appendChild(answer3);
    answer3.addEventListener("click", checkAnswer);

    var list4 = document.createElement("li");
    answerEl.appendChild(list4);
    var answer4 = document.createElement("button");
    answer4.textContent = "all of the above";
    answer4.setAttribute("id", "correct");
    // add button id for styling?
    list4.appendChild(answer4);
    answer4.addEventListener("click", checkAnswer);


}
function question5() {
    // use .textContent or .innerHTML to display question and answers
    questionEl.textContent = "When using JavaScript, what does the expression 'i++' represent?";
    var list1 = document.createElement("li");
    // list1.textContent = "this is the first answer";
    answerEl.appendChild(list1);
    var answer1 = document.createElement("button");
    answer1.textContent = "i=i+1";
    answer1.setAttribute("id", "correct");
    // add button id for styling?
    list1.appendChild(answer1);
    answer1.addEventListener("click", checkAnswer);

    var list2 = document.createElement("li");
    answerEl.appendChild(list2);
    var answer2 = document.createElement("button");
    answer2.textContent = "i=i+i";
    // add button id for styling?
    list2.appendChild(answer2);
    answer2.addEventListener("click", checkAnswer);

    var list3 = document.createElement("li");
    answerEl.appendChild(list3);
    var answer3 = document.createElement("button");
    answer3.textContent = "i=i+2";
    // add button id for styling?
    list3.appendChild(answer3);
    answer3.addEventListener("click", checkAnswer);

    var list4 = document.createElement("li");
    answerEl.appendChild(list4);
    var answer4 = document.createElement("button");
    answer4.textContent = "i=|i|";
    // add button id for styling?
    list4.appendChild(answer4);
    answer4.addEventListener("click", checkAnswer);


}
var rightAnswers = 0;
var wrongAnswers = 0;
function checkAnswer(event) {
    var userAnswer = event.target;
    if (userAnswer.matches("#correct")) {
        rightAnswers++;
    }
    else {
        wrongAnswers++;
        countdown = countdown-5;
    }
   removeChildren();
   nextQuestion();
}
function removeChildren() {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild);
    }
}

function nextQuestion() {
    var index = (rightAnswers + wrongAnswers);
    if(index == 1) {
        question2();
    } else if(index == 2) {
        question3();
    } else if(index == 3) {
        question4();
    } else if(index == 4) {
        question5();
    } else if(index == 5) {
        questionEl.textContent = "";
        renderScore();
        // following three lines mostly just for me to make sure it's working properly during development
    } else {
        alert("something went wrong");
        return;
    }
}

function renderScore() {}
    // answers need to be either buttons or multiple choice input fields(?) that can be clicked on
    // make sure correct and incorrect responses are able to be logged separately (prevent event bubbling? Input field?)
    // when answer is given, move on to next question
    // when all questions have been answered, stop timer and display score
    // determine if score qualifies for high score list (iterate through high score list?) and place it appropriately if it does
    // display high score list w/ updated score if relevant
    // store high scores in local storage
    // reenable button to restart game