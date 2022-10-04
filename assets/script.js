var startButtonEl = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answers");
var timerEl = document.querySelector("#timer");
var outputEl = document.querySelector("#quiz");

startButtonEl.addEventListener("click", startTimer)

var countdown;
var timerInterval;
var rightAnswers = 0;
var wrongAnswers = 0;
var index;

function startTimer(event) {
    startButtonEl.disabled = true;
    removeChildren();
    countdown = 30;
    timerInterval = setInterval(function () {
        timerEl.textContent = countdown;
        countdown--;
        // used < 0 instead of == 0 to avoid wrong answer penalty (-5 seconds) skipping 0 and continuing into negative values
        // also, < 1 seemed to skip displaying 1 on the timer and go straight from 2 to "time's up"--not sure why?
        if(countdown < 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Time's up!";
            countdown = 30;
            renderScore();
        }
    } ,1000);

    question1();
}

function question1() {
    // use .textContent or .innerHTML to display question and answers
    questionEl.textContent = "Which of the following is not one of the three core coding languages?";
    var list1 = document.createElement("li");
    // list1.textContent = "this is the first answer";
    answerEl.appendChild(list1);
    var answer1 = document.createElement("button");
    answer1.textContent = "a. CSS";
    // add button id for styling?
    list1.appendChild(answer1);
    answer1.addEventListener("click", checkAnswer);

    var list2 = document.createElement("li");
    answerEl.appendChild(list2);
    var answer2 = document.createElement("button");
    answer2.textContent = "b. Git";
    answer2.setAttribute("id", "correct");
    // add button id for styling?
    list2.appendChild(answer2);
    answer2.addEventListener("click", checkAnswer);

    var list3 = document.createElement("li");
    answerEl.appendChild(list3);
    var answer3 = document.createElement("button");
    answer3.textContent = "c. HTML";
    // add button id for styling?
    list3.appendChild(answer3);
    answer3.addEventListener("click", checkAnswer);

    var list4 = document.createElement("li");
    answerEl.appendChild(list4);
    var answer4 = document.createElement("button");
    answer4.textContent = "d. JavaScript";
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
    answer1.textContent = "a. <main>";
    // add button id for styling?
    list1.appendChild(answer1);
    answer1.addEventListener("click", checkAnswer);

    var list2 = document.createElement("li");
    answerEl.appendChild(list2);
    var answer2 = document.createElement("button");
    answer2.textContent = "b. <header>";
    // add button id for styling?
    list2.appendChild(answer2);
    answer2.addEventListener("click", checkAnswer);

    var list3 = document.createElement("li");
    answerEl.appendChild(list3);
    var answer3 = document.createElement("button");
    answer3.textContent = "c. <aside>";
    // add button id for styling?
    list3.appendChild(answer3);
    answer3.addEventListener("click", checkAnswer);

    var list4 = document.createElement("li");
    answerEl.appendChild(list4);
    var answer4 = document.createElement("button");
    answer4.textContent = "d. <div>";
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
    answer1.textContent = "a. card {";
    // add button id for styling?
    list1.appendChild(answer1);
    answer1.addEventListener("click", checkAnswer);

    var list2 = document.createElement("li");
    answerEl.appendChild(list2);
    var answer2 = document.createElement("button");
    answer2.textContent = "b. #card {";
    // add button id for styling?
    list2.appendChild(answer2);
    answer2.addEventListener("click", checkAnswer);

    var list3 = document.createElement("li");
    answerEl.appendChild(list3);
    var answer3 = document.createElement("button");
    answer3.textContent = "c. .card {";
    answer3.setAttribute("id", "correct");
    // add button id for styling?
    list3.appendChild(answer3);
    answer3.addEventListener("click", checkAnswer);

    var list4 = document.createElement("li");
    answerEl.appendChild(list4);
    var answer4 = document.createElement("button");
    answer4.textContent = "d. *card {";
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
    answer1.textContent = "a. boolean";
    // add button id for styling?
    list1.appendChild(answer1);
    answer1.addEventListener("click", checkAnswer);

    var list2 = document.createElement("li");
    answerEl.appendChild(list2);
    var answer2 = document.createElement("button");
    answer2.textContent = "b. string";
    // add button id for styling?
    list2.appendChild(answer2);
    answer2.addEventListener("click", checkAnswer);

    var list3 = document.createElement("li");
    answerEl.appendChild(list3);
    var answer3 = document.createElement("button");
    answer3.textContent = "c. number";
    // add button id for styling?
    list3.appendChild(answer3);
    answer3.addEventListener("click", checkAnswer);

    var list4 = document.createElement("li");
    answerEl.appendChild(list4);
    var answer4 = document.createElement("button");
    answer4.textContent = "d. all of the above";
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
    answer1.textContent = "a. i=i+1";
    answer1.setAttribute("id", "correct");
    // add button id for styling?
    list1.appendChild(answer1);
    answer1.addEventListener("click", checkAnswer);

    var list2 = document.createElement("li");
    answerEl.appendChild(list2);
    var answer2 = document.createElement("button");
    answer2.textContent = "b. i=i+i";
    // add button id for styling?
    list2.appendChild(answer2);
    answer2.addEventListener("click", checkAnswer);

    var list3 = document.createElement("li");
    answerEl.appendChild(list3);
    var answer3 = document.createElement("button");
    answer3.textContent = "c. i=i+2";
    // add button id for styling?
    list3.appendChild(answer3);
    answer3.addEventListener("click", checkAnswer);

    var list4 = document.createElement("li");
    answerEl.appendChild(list4);
    var answer4 = document.createElement("button");
    answer4.textContent = "d. i=|i|";
    // add button id for styling?
    list4.appendChild(answer4);
    answer4.addEventListener("click", checkAnswer);
}

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
    questionEl.textContent = "";
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild);
    }
}

function nextQuestion() {
    index = (rightAnswers + wrongAnswers);
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

function renderScore() {
    clearInterval(timerInterval);
    removeChildren();
    timerEl.textContent = "";
    alert(`Great job! Here's your score: ${rightAnswers}`);
    renderHighScores();
}

function renderHighScores() {
    // form to ask for initials -> store as variable userInitials
    var userInitials = prompt("Save your high score! Please enter your initials:");
    if(userInitials !== null && userInitials.length !== 2) {
            userInitials = "";
        alert("Please enter 2 characters for your initials.");
        renderHighScores();
    } else {
        index = 0;
        rightAnswers = 0;
        wrongAnswers = 0;
        startButtonEl.disabled = false;
        return;
    }
    // variable userScore = `${rightAnswers} - ${userInitials}`
    var userScore = `${rightAnswers} - ${userInitials}`;
    // create empty array to store high scores (var highScores)
    // parse localStorage to check for stored high scores and assign array to var highScores
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    if(!highScores) {
        highScores = [];
    }

    // add userScore to highScores
    highScores.splice(1, 0, userScore);
    // sort array in descending order using .sort and compare function
    highScores = highScores.sort(function(a,b){return parseInt(b) - parseInt(a)});
    // if highScores.length > 5, splice last value
    if (highScores.length > 5) {
        highScores.pop();
    }

// // create list item for each value, display each one according to order in array    
    timerEl.textContent = "High Scores:"
    var ol = document.createElement("ol");
    for(var i=0; i<highScores.length; i++) {
        var highScoreList = document.createElement("li");
        // highScoresEl.appendChild(highScoreList);
        highScoreList.textContent = highScores[i];
        ol.appendChild(highScoreList);
    }
    timerEl.appendChild(ol);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    rightAnswers = 0;
    wrongAnswers = 0;
    index = 0;
    startButtonEl.disabled = false;
}