'use strict';
/*THis is our JavaScript Code for a quiz application that runs on our webpage
and displays the scoreboard in the <aside>. The quiz contains a bank of questions
stored as an array of objects.  There are three radio buttons on the page that
will start a fresh quiz with 10, 20, or 30 questions. The quiz is multiple choice
with the answers being displayed on four buttons. Every time a button is pressed
the answer is evaluated and a score possibly incremented, and a new random question
is selected from the database and displayed with it's answers on the buttons.
The highscore list loads an object from localStorage upon loading the page and
every time a quiz is completed it is checked for placement amongst the top three
high sores and if it is a new high score it is added to the list that persists
to display or update from localStorage.
*/

//the array 'questions' holds all the objects with data for the questions and answers 
//asked by the game.  it is declared here globally as several functions use it.
var questions = [];

//by using a function as below to add all the objects below to the array we can
//later use it by other functions after the array has been manipulated to restore
//its contents to a fresh state for a brand new quiz
function populateQuestions() {
    questions = [//the array contains all the questions we've written
        {//the questions are structured as objects
            //there are six key value pairs that hold the information to pose a question
            question: "A female nymph associated with a tree is called what?",
            //the question to be asked is listed along with 4 multiple choice answers
            a1: "Faun",
            a2: "Goblin",
            a3: "Banshee",
            a4: "Dryad",
            //the correct answer of the four choices is defined as an integer
            correct: 4
        },
        //the same format is followed for every object
        {
            question: "Dryads were said to have raised what god while he was an infant?",
            a1: "Zeus",
            a2: "Artemis",
            a3: "Allah",
            a4: "Hades",
            correct: 1
        },
        {
            question: "The dryad comes from what cultural mythology?",
            a1: "Persian",
            a2: "Celtic",
            a3: "Greek",
            a4: "Japanese",
            correct: 3
        },
        {
            question: "The genie of the lamp that was found by Aladdin *first* appeared in what anthology of fictional stories?",
            a1: "Disney",
            a2: "A Thousand and One Nights",
            a3: "The Quoran",
            a4: "Homer's Illiad",
            correct: 2
        },
        {
            question: "Which of the following cultures do the tales of the Genie, or Djinn come from?",
            a1: "Greek",
            a2: "Japanese",
            a3: "American Indian",
            a4: "Arabic",
            correct: 4
        },
        {
            question: "The Djinn were known for what of the following traits?",
            a1: "Punishing humans for harm, whether intentional or not.",
            a2: "Being benevolent helpers of mankind.",
            a3: "Having control over the weather.",
            a4: "Having large horns and sharp teeth.",
            correct: 1
        },
        {
            question: "The thunderbird was so large it could pick up what?",
            a1: "The moon",
            a2: "Whales",
            a3: "A Man",
            a4: "A Car",
            correct: 2
        },
        {
            question: "It got its name because of what?",
            a1: "The ACDC song Thunderstruck",
            a2: "Its mating call",
            a3: "The sound its wings made when flapping",
            a4: "Because it only came when it stormed.",
            correct: 3
        },
        {
            question: "The Thunderbird is a symbol of what?",
            a1: "Greatness",
            a2: "Weakness",
            a3: "Good",
            a4: "Strength",
            correct: 4
        },
        {
            question: "Mermaid legends are first found in what culture?",
            a1: "Irish",
            a2: "Syrian",
            a3: "Greek",
            a4: "Roman",
            correct:2
        },
        {
            question: "What is a gorgon’s power?",
            a1: "Ability to seduce men",
            a2: "Ability to heal",
            a3: "Causing people to go insane",
            a4: "Turning people to stone and killing them by looking at them",
            Correct:4
        },
        {
            question: "What was the name of the gorgon sister who perished?",
            a1: "Stheno",
            a2: "Medusa",
            a3: "Akasha",
            a4: "Euryale",
            Correct:2
        },
        {
            question: "Who was Medusa slain by?",
            a1: "Perseus",
            a2: "Poseidon",
            a3: "Athena",
            a4: "Zeus",
            correct:1
        },
        {
            question:" A creature that is half female human, and half fish is known as what?",
            a1:"kelpie",
            a2:"vampire",
            a3:"faun",
            a4:"mermaid",
            correct:4
        },
        {
            question:"In sailor folklore, this mythical creature can signify either good or bad luck:",
            a1:"fairy",
            a2:"dragon",
            a3:"centaur",
            a4:"mermaid",
            correct:4
        },
        {
            question:"It is frequent for this creature to be carved into the bow of ships to bring good fortune to a voyage.",
            a1:"mermaid",
            a2:"griffin",
            a3:"kelpie",
            a4:"werewolf",
            correct:1
        },
        {
            question:"The mythology of the vampire originates from what culture?",
            a1:"Greek",
            a2:"Midieval Europe",
            a3:"Syria",
            a4:"Ireland",
            correct:2
        },
        {
            question: "Vampires have a weakness or fear to what of the following?",
            a1:"Holy symbols and garlic",
            a2:"Water",
            a3:"Grass",
            a4:"Their name",
            correct:1
        },
        {
            question: "Bram Stoker's Dracula is a famous novel about what type of mythical creature?",
            a1: "Fairies",
            a2: "Mermaids",
            a3: "Centaurs",
            a4: "Vampires",
            correct:4
        },
        {
            question: "One possible origin of Werewolf legends is:",
            a1: "Homer's Odyysey",
            a2: "Bram Stoker's Dracula",
            a3: "The Epic of Gilgamesh",
            a4: "Seafarer's Stories",
            correct:3
        },
        {
            question: "Werewolves can only be hurt by what?",
            a1:"silver",
            a2:"garlic and holy symbols",
            a3:"water",
            a4:"arrows",
            correct:1
        },
        {
            question: "Werewolves exhibit their half human, half beast form on which days of the month?",
            a1: "Tuesdays",
            a2: "Their Birthday",
            a3: "The fourth day of each month",
            a4: "The nights of the Full Moon",
            correct:4
        },
        {
            question: "A werewolf is a creature that is the combination of a human and what animal?",
            a1: "Bat",
            a2: "Horse",
            a3: "Wolf",
            a4: "Fish",
            correct:3
        },
        {
            question: "Centaurs Originated from what culture?",
            a1: "American",
            a2: "German",
            a3: "Greek",
            a4: "Japanese",
            correct:3
        },
        {
            question: "Centaurs are known to have the torso of a man and a body of a what?",
            a1: "Horse",
            a2: "Man",
            a3: "Chicken",
            a4: "Dinosaur",
            correct: 1
        },
        {
            question: "Which Greek god were the Centaurs followers of?",
            a1: "Zeus",
            a2: "Hades",
            a3: "Hermes",
            a4: "Dionysus",
            correct: 4
        },
        {
            question: "Chiron was a well known Centaur. Who below did he NOT tutor?",
            a1: "Jason",
            a2: "Leonidas",
            a3: "Achilles",
            a4: "Hercules",
            correct: 2
        },
        {
            question: "Cyclops found their origins in which culture?",
            a1: "Greek",
            a2: "Roman",
            a3: "Jewish",
            a4: "Asian",
            correct: 1
        },
        {
            question: "Cyclops only had 1 of what body part?",
            a1: "arms",
            a2: "toes",
            a3: "eyes",
            a4: "nipples",
            correct: 3
        },
        {
            question: "The Greeks considered Cyclops a race of what type of creatures?",
            a1: "Warriors",
            a2: "Lawyers",
            a3: "Lawless",
            a4: "Lazy",
            correct: 3
        },
        {
            question: "Cyclops were known to craft what?",
            a1: "weapons and armor",
            a2: "shoes and shoe strinks",
            a3: "houses",
            a4: "roads",
            correct: 1
        },
        {
            question: "Dragons came from which culture?",
            a1: "Greek",
            a2: "Asian",
            a3: "Egyptian",
            a4: "All of the above",
            correct: 4
        },
        {
            question: "Dragons had ___ which allowed them to fly:",
            a1: "Feet",
            a2: "Wings",
            a3: "A Head",
            a4: "A big heart",
            correct: 2
        },
        {
            question: "In their lair, what would dragons have in it?",
            a1: "Treasure",
            a2: "A tv",
            a3: "Rocks",
            a4: "A bed",
            correct: 1
        },
        {
            question: "Griffins have the head  of an eagle and body of a what?",
            a1: "Lion",
            a2: "Chicken",
            a3: "Horse",
            a4: "Dragon", 
            correct:1
        },
        {
            question: "What did Griffins do other than have capability of flight?",
            a1: "Lung capacity for when they swim",
            a2: "Guard treasure",
            a3: "Kept their human(s) safe",
            a4: "Hunt humans at night",
            correct:2
        },
        {
            question: "What do griffins symbolize? Strength and ______?",
            a1: "Outgoing",
            a2: "Agility",
            a3: "Clumsiness",
            a4: "Intelligence",
            correct:4
        },
        {
            question: "Where did fairies originate from?",
            a1: "Eastern Europe",
            a2: "Greek Mythology",
            a3: "Norse Mythology",
            a4: "Celtic",
            correct:2
        },
        {
            question: "What were 'Banshees' known for?",
            a1: "Being kind creatures",
            a2: "Being malevolent creatures who appear usually before something bad happens",
            a3: "Being intimidating",
            a4: "Are a sign of luck when encountered",
            correct:2
        },
        {
            question: "Where were fairies known to be demons?",
            a1: "Asia",
            a2: "Europe",
            a3: "Puritanism",
            a4:  "Scottland",
            correct:3 
        },
        {
            question: "The kelpie is a horse that can shape-shift into a _______?",
            a1: "Human",
            a2: "Monkey",
            a3: "Unicorn",
            a4: "Dragon", 
            correct:1 
        },
        {
            question: "What kind of tail do kelpies have?",
            a1: "Lion",
            a2: "Fish",
            a3: "Wolf",
            a4: "Mermaid-like",
            correct:4
        },
        {
            question: "Where do kelpies spend most of their time?",
            a1: "In the desert",
            a2: "By caves",
            a3: "By rivers and lakes or wherever water is present",
            a4: "Mountainous regions",
            correct:3
        }
    ];

}

//to have our page create that array the function is called in the script
populateQuestions();

//the global variables are all declared
var currentQuestionIndex = 0;
var turns = 20;
var turnsTaken = 0;
var correctAnswers = 0;
var rollAgain = true;
var askedAlready = [];
var size = 0;

//by default have the box checked for the medium sized quiz
document.getElementById("medium").click();

//this is an event handler for the radio buttons. 
function quizSize(option) {
    //if a button is clicked the turns variable is set to 10, 20, or 30
    console.log('radio buttons clicked');
    if (option === 1 ) {
        turns = 10;
        size = 1;
    }
    if (option ===2 ) {
        turns = 20;
        size = 2;
    }
    if (option === 3) {
        turns = 30;
        size = 3;
    }
    //the array of questions is reconstructed and the quiz reset
    refreshQuiz();
    //a random question is picked and the quiz is ready
    nextQuestion();
}


//this will load score object from localStorage if the script has been run before
var loadScoreObject = localStorage.getItem('savedScores');
//if the score object is found it uses JSON to reconstruct the previous saved score object
if (loadScoreObject) {
    console.log('found saved scores in local storage, commencing loading sequence');
    var scoreSet = JSON.parse(loadScoreObject);
} else {
    //if there is no score object already, one is created. It has key value pairs
    //for each piece of data for each set of top three scores of each of 3 size game 
    var scoreSet = {
        //the hold rank, date, number correct
        shortScore1Rank:1,
        shortScore1Date:"",
        shortScore1Correct:0,
        shortScore2Rank:2,
        shortScore2Date:"",
        shortScore2Correct:0,
        shortScore3Rank:3,
        shortScore3Date:"",
        shortScore3Correct:0,
        medScore1Rank:1,
        medScore1Date:"",
        medScore1Correct:0,
        medScore2Rank:2,
        medScore2Date:"",
        medScore2Correct:0,
        medScore3Rank:3,
        medScore3Date:"",
        medScore3Correct:0,
        longScore1Rank:1,
        longScore1Date:"",
        longScore1Correct:0,
        longScore2Rank:2,
        longScore2Date:"",
        longScore2Correct:0,
        longScore3Rank:3,
        longScore3Date:"",
        longScore3Correct:0

    }    
}

//this function writes items to an unorderd list on the page that displays scores
function displayScores () {
    //the list is assigned to a variable with getElementById for manipulation
    var scoreList1 = document.getElementById('scores-short');
    //this clears the old list items before writing the current scores table
    var listItems = scoreList1.getElementsByTagName('li');
    while (listItems.length > 0) {
        scoreList1.removeChild(listItems[0]);
    }
    //the scoreSet object has its data made into list items and displayed on the page
    var Score1 = document.createElement('li');
    Score1.textContent = scoreSet.shortScore1Rank + " | " + scoreSet.shortScore1Date + " | " + scoreSet.shortScore1Correct;
    scoreList1.appendChild(Score1);
    var Score2 = document.createElement('li');
    Score2.textContent = scoreSet.shortScore2Rank + " | " + scoreSet.shortScore2Date + " | " + scoreSet.shortScore2Correct;
    scoreList1.appendChild(Score2);
    var Score3 = document.createElement('li');
    Score3.textContent = scoreSet.shortScore3Rank + " | " + scoreSet.shortScore3Date + " | " + scoreSet.shortScore3Correct;
    scoreList1.appendChild(Score3);
    //Each of the top three scores of the small, medium, and long quizzes are displayed
    var scoreList2 = document.getElementById('scores-med');
    var listItems = scoreList2.getElementsByTagName('li');
    while (listItems.length > 0) {
        scoreList2.removeChild(listItems[0]);
    }
    var Score1 = document.createElement('li');
    Score1.textContent = scoreSet.medScore1Rank + " | " + scoreSet.medScore1Date + " | " + scoreSet.medScore1Correct;
    scoreList2.appendChild(Score1);
    var Score2 = document.createElement('li');
    Score2.textContent = scoreSet.medScore2Rank + " | " + scoreSet.medScore2Date + " | " + scoreSet.medScore2Correct;
    scoreList2.appendChild(Score2);
    var Score3 = document.createElement('li');
    Score3.textContent = scoreSet.medScore3Rank + " | " + scoreSet.medScore3Date + " | " + scoreSet.medScore3Correct;
    scoreList2.appendChild(Score3);

    var scoreList3 = document.getElementById('scores-long');
    var listItems = scoreList3.getElementsByTagName('li');
    while (listItems.length > 0) {
        scoreList3.removeChild(listItems[0]);
    }
    var Score1 = document.createElement('li');
    Score1.textContent = scoreSet.longScore1Rank + " | " + scoreSet.longScore1Date + " | " + scoreSet.longScore1Correct;
    scoreList3.appendChild(Score1);
    var Score2 = document.createElement('li');
    Score2.textContent = scoreSet.longScore2Rank + " | " + scoreSet.longScore2Date + " | " + scoreSet.longScore2Correct;
    scoreList3.appendChild(Score2);
    var Score3 = document.createElement('li');
    Score3.textContent = scoreSet.longScore3Rank + " | " + scoreSet.longScore3Date + " | " + scoreSet.longScore3Correct;
    scoreList3.appendChild(Score3);
}
//the scores function is called on page load
displayScores();

//a random number is selected of the amount of array indices for the questions
//the currentQuestionIndex integer is used as the index number in the questions array    
currentQuestionIndex = (Math.floor((Math.random() * questions.length) + 1))-1;

//this function picks a new number for the question and then writes the question
//to the page and the possible answers to the buttons 
function nextQuestion() {
    //error handling
    if (askedAlready.length >= questions.length) {
        throw "NoQuestionsLeft";
    }
    //a random number is picked
    currentQuestionIndex = (Math.floor((Math.random() * questions.length) + 1))-1;
  
    //an element on the page is assigned to a variable
    var questionOnPage = document.getElementById('question');
    //the text on the page is written as the contents of the current question
    questionOnPage.innerHTML = questions[currentQuestionIndex].question;
    //the four buttons are defined as variables
    var button1 = document.getElementById('a1');
    var button2 = document.getElementById('a2');
    var button3 = document.getElementById('a3');
    var button4 = document.getElementById('a4');
    //The buttons gain the text for the multiple choice answers
    button1.innerHTML = questions[currentQuestionIndex].a1;
    button2.innerHTML = questions[currentQuestionIndex].a2;
    button3.innerHTML = questions[currentQuestionIndex].a3;
    button4.innerHTML = questions[currentQuestionIndex].a4;
    //we count the number of turns
    turnsTaken ++;
    var displayTurns = document.getElementById('turn-count');
    //on the page we grab a <p> tag that displays the turn count below
    displayTurns.textContent = turnsTaken + " out of " + turns;
    if (turnsTaken > turns) {
        //if all the turns are taken the button event handlers are disabled
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
        button4.disabled = true;
        //calls a function that tabulates score results and updates them
        endResults();
    }
}

//this function resets the global variables and calls the function to create a
//full array of questions and turns the buttons back on
function refreshQuiz() {
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
    populateQuestions();
    nextQuestion();
}
//This function is an event listener for all four buttons with the multiple choice
//answers. It takes a parameter of 1-4 from the web page and compairs it with
//the question objects key for correct answer. Right answers increment the score 
//variable and it alerts whether or not it was a correct answer.
function checkAnswer(index) {
    console.log("the first button was clicked");
    if (questions[currentQuestionIndex].correct-1 === index) {
        alert('That is correct!');
        correctAnswers ++;
        questions.splice(currentQuestionIndex,1);
        nextQuestion();
    } else {
        alert("No, the correct answer was option " + questions[currentQuestionIndex].correct);
        questions.splice(currentQuestionIndex,1);
        nextQuestion();
    }

}
//this function writes new score data to the scores object and calls the program
//to display the new scores table as well as saving the updated scores to localStorage
function endResults() {
    var d = new Date();
    console.log("computing results");
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var theDate = month + "-" + day + "-" + year + " " + hour + ":" + minutes;
    if (size === 1) {
        if (correctAnswers > scoreSet.shortScore1Correct) {
            scoreSet.shortScore3Correct = scoreSet.shortScore2Correct;
            scoreSet.shortScore3Date = scoreSet.shortScore2Date;
            scoreSet.shortScore2Correct = scoreSet.shortScore1Correct;
            scoreSet.shortScore2Date = scoreSet.shortScore1Date;
            scoreSet.shortScore1Correct = correctAnswers;
            scoreSet.shortScore1Date = theDate;
        } else if (correctAnswers > scoreSet.shortScore2Correct) {
            scoreSet.shortScore3Correct = scoreSet.shortScore2Correct;
            scoreSet.shortScore3Date = scoreSet.shortScore2Date;
            scoreSet.shortScore2Correct = correctAnswers;
            scoreSet.shortScore2Date = theDate;
        } else if (correctAnswers > scoreSet.shortScore3Correct) {
            scoreSet.shortScore3Correct = correctAnswers;
            scoreSet.shortScore3Date = theDate;
        } 
    }
    if (size === 2) {
        if (correctAnswers > scoreSet.medScore1Correct) {
            scoreSet.medScore3Correct = scoreSet.medScore2Correct;
            scoreSet.medScore3Date = scoreSet.medScore2Date;
            scoreSet.medScore2Correct = scoreSet.medScore1Correct;
            scoreSet.medScore2Date = scoreSet.medScore1Date;
            scoreSet.medScore1Correct = correctAnswers;
            scoreSet.medScore1Date = theDate;
        } else if (correctAnswers > scoreSet.medScore2Correct) {
            scoreSet.medScore3Correct = scoreSet.medScore2Correct;
            scoreSet.medScore3Date = scoreSet.medScore2Date;
            scoreSet.medScore2Correct = correctAnswers;
            scoreSet.medScore2Date = theDate;
        } else if (correctAnswers > scoreSet.medScore3Correct) {
            scoreSet.medScore3Correct = correctAnswers;
            scoreSet.medScore3Date = theDate;
        } 
    }
    if (size === 3) {
        if (correctAnswers > scoreSet.longScore1Correct) {
            scoreSet.longScore3Correct = scoreSet.longScore2Correct;
            scoreSet.longScore3Date = scoreSet.longScore2Date;
            scoreSet.longScore2Correct = scoreSet.longScore1Correct;
            scoreSet.longScore2Date = scoreSet.longScore1Date;
            scoreSet.longScore1Correct = correctAnswers;
            scoreSet.longScore1Date = theDate;
        } else if (correctAnswers > scoreSet.longScore2Correct) {
            scoreSet.longScore3Correct = scoreSet.longScore2Correct;
            scoreSet.longScore3Date = scoreSet.longScore2Date;
            scoreSet.longScore2Correct = correctAnswers;
            scoreSet.longScore2Date = theDate;
        } else if (correctAnswers > scoreSet.longScore3Correct) {
            scoreSet.longScore3Correct = correctAnswers;
            scoreSet.longScore3Date = theDate;
        } 
    }
    localStorage.setItem('savedScores', JSON.stringify(scoreSet));
    console.log('saving scores now');
    displayScores();
}
//at this point all the data is constructed and a question is displayed so we
//call the function that displays a question and starts the quiz
nextQuestion();







