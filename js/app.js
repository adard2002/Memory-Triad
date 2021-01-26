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



var loadScoreObject = localStorage.getItem('savedScores');
if (loadScoreObject) {
    console.log('found saved scores in local storage, commencing loading sequence');
    var scoreSet = JSON.parse(loadScoreObject);
} else {
    var scoreSet = {
        score1Rank:1,
        score1Date:"",
        score1Correct:0,
        score2Rank:2,
        score2Date:"",
        score2Correct:0,
        score3Rank:3,
        score3Date:"",
        score3Correct:0
    }    
}


function displayScores () {
    var scoreList = document.getElementById('scores');
    var listItems = scoreList.getElementsByTagName('li');
    while (listItems.length > 0) {
        scoreList.removeChild(listItems[0]);
    }
    var Score1 = document.createElement('li');
    Score1.textContent = scoreSet.score1Rank + " | " + scoreSet.score1Date + " | " + scoreSet.score1Correct;
    scoreList.appendChild(Score1);
    var Score2 = document.createElement('li');
    Score2.textContent = scoreSet.score2Rank + " | " + scoreSet.score2Date + " | " + scoreSet.score2Correct;
    scoreList.appendChild(Score2);
    var Score3 = document.createElement('li');
    Score3.textContent = scoreSet.score3Rank + " | " + scoreSet.score3Date + " | " + scoreSet.score3Correct;
    scoreList.appendChild(Score3);
}
 displayScores();



function nextQuestion() {
    currentQuestionIndex = (Math.floor((Math.random() * questions.length) + 1))-1;
    // while (currentQuestionIndex in askedAlready) {
    //     currentQuestionIndex = (Math.floor((Math.random() * questions.length) + 1))-1;
    // }
    // askedAlready.push(0,currentQuestionIndex);
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
    if (turnsTaken > turns) {
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
        button4.disabled = true;
        endResults();
    }
}

function refreshQuiz() {
    turns = 3;
    console.log("refreshing quiz");
    turnsTaken = 0;
    correctAnswers = 0;
    rollAgain = true;
    askedAlready = [];
    var button1 = document.getElementById('a1');
    var button2 = document.getElementById('a2');
    var button3 = document.getElementById('a3');
    var button4 = document.getElementById('a4');
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    nextQuestion();
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
    var d = new Date();
    console.log("computing results");
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var theDate = month + "-" + day + "-" + year + " " + hour + ":" + minutes;
    if (correctAnswers > scoreSet.score1Correct) {
        scoreSet.score3Correct = scoreSet.score2Correct;
        scoreSet.score3Date = scoreSet.score2Date;
        scoreSet.score2Correct = scoreSet.score1Correct;
        scoreSet.score2Date = scoreSet.score1Date;
        scoreSet.score1Correct = correctAnswers;
        scoreSet.score1Date = theDate;
    } else if (correctAnswers > scoreSet.score2Correct) {
        scoreSet.score3Correct = scoreSet.score2Correct;
        scoreSet.score3Date = scoreSet.score2Date;
        scoreSet.score2Correct = correctAnswers;
        scoreSet.score2Date = theDate;
    } else if (correctAnswers > scoreSet.score3Correct) {
        scoreSet.score3Correct = correctAnswers;
        scoreSet.score3Date = theDate;
    } 
    localStorage.setItem('savedScores', JSON.stringify(scoreSet));
    console.log('saving scores now');
    displayScores();
}

nextQuestion();
