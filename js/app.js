'use strict';

var questions = [
    {
        question: "Which of the following is a name of a mythical creature?",
        answers: [
            "Bob",
            "Red, green, and blue.",
            "Dragon",
            "Iowa"
        ],
        correct:3
    },
    {
        question: "A centaur is a creature that is a combination of half a man and half what?",
        answers: [
            "Fish",
            "Horse",
            "Librarian",
            "Monkey"
        ],
        correct:2
    },
    {
        question: "A horse that has a single horn on it's forehead is named:",
        answers: [
            "Goblin",
            "Satyr",
            "Al Gore",
            "Unicorn"
        ],
        correct:4
    },
    {
        question: "A selkie is defined as which of the following creature definitions?",
        answers: [
            "An aquatic horse with flippers instead of hooves.",
            "A large bat-winged lizard that breathes fire.",
            "A small humanoid that comes from Celtic folklore.",
            "A half-human and half-horse."
        ],
        correct:1
    },
    {
        question: "A faun is a mythical creature originating from what culture?",
        answers: [
            "Chinese",
            "Greek",
            "Celtic",
            "Contemporary 20th century fiction"
        ],
        correct:2
    }
];
var currentQuestionIndex = 0;

var turns = 3;
var turnsTaken = 0;
var correctAnswers = 0;
var rollAgain = true;
var askedAlready = [];

function nextQuestion() {
    //currentQuestionIndex = Math.floor(Math.random()*(questions.length)+1);
    currentQuestionIndex = (Math.floor((Math.random() * questions.length) + 1))-1;
    while (currentQuestionIndex in askedAlready) {
        currentQuestionIndex = (Math.floor((Math.random() * questions.length) + 1))-1;
    }
    askedAlready.push(currentQuestionIndex);
    var questionOnPage = document.getElementById('question');
    questionOnPage.innerHTML = questions[currentQuestionIndex].question;
    var button1 = document.getElementById('a1');
    var button2 = document.getElementById('a2');
    var button3 = document.getElementById('a3');
    var button4 = document.getElementById('a4');
    button1.innerHTML = questions[currentQuestionIndex].answers[0];
    button2.innerHTML = questions[currentQuestionIndex].answers[1];
    button3.innerHTML = questions[currentQuestionIndex].answers[2];
    button4.innerHTML = questions[currentQuestionIndex].answers[3];
    turnsTaken ++;
    var displayTurns = document.getElementById('turn-count');
    displayTurns.textContent = turnsTaken + " out of " + turns;
    if (turnsTaken >= turns) {
        endResults();
    }
}

function checkAnswer(index) {
    console.log("the first button was clicked");
    if (questions[currentQuestionIndex].correct-1 === index) {
        alert('That is correct!');
        correctAnswers ++;
        nextQuestion();
    } else {
        alert("No, the correct answer was " + questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correct-1] );
        nextQuestion();
    }

}

function endResults() {
    var scoreList = document.getElementById('scores');
    var newScore = document.createElement('li');
    newScore.textContent = correctAnswers + " out of " + turns;
    scoreList.appendChild(newScore);
}
// function checkAnswer2() {
//     console.log("the second button was clicked");
//     if (questions[currentQuestionIndex].correct === 2) {
//         alert('That is correct!');
//     } else {
//         alert("No, the correct answer was " + questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correct-1] );
//         nextQuestion();
//     }
// }
// function checkAnswer3() {
//     console.log("The third button was clicked");
//     if (questions[currentQuestionIndex].correct === 3) {
//         alert('That is correct!');
//     } else {
//         alert("No, the correct answer was " + questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correct-1] );
//         nextQuestion();
//     }
// }
// function checkAnswer4() {
//     console.log("the fourth button was clicked");
//     if (questions[currentQuestionIndex].correct === 4) {
//         alert('That is correct!');
//     } else {
//         alert("No, the correct answer was " + questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correct-1] );
//         nextQuestion();
//     }
// }

nextQuestion();









// Code for making images "flip" over

