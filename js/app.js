'use strict';

var questions = [
    {
        question: "A female nymph associated with a tree is called what?",
        a1: "Faun",
        a2: "Goblin",
        a3: "Banshee",
        a4: "Dryad",
        correct: 4
    },
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

var test = ["index0", "index1", "index2"];
test.splice(0,1);

var currentQuestionIndex = 0;
var turns = 20;
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

 //this should run every new question and check the array of askedAlready and if the array contains a duplicate return true. 
 //elsewhere there's a while loop that should keep generating a new number if this function is returning true

// function randomQuestion() {
//     for (var i = 0; i < askedAlready.length; i++) {
//         if (currentQuestionIndex === askedAlready[i]) {
//             console.log('found a duplicate');
//             return true;
//         } 
//     }
// }
// var isUnique = randomQuestion();

    
currentQuestionIndex = (Math.floor((Math.random() * questions.length) + 1))-1;


function nextQuestion() {
    if (askedAlready.length >= questions.length) {
        throw "NoQuestionsLeft";
    }
    currentQuestionIndex = (Math.floor((Math.random() * questions.length) + 1))-1;
    //*** problem existing here, in that this while loop doesn't do what it should
    // while ( isUnique ) {
    //     console.log('in the while loop');
    //     currentQuestionIndex = (Math.floor((Math.random() * questions.length) + 1))-1;
    //     console.log(currentQuestionIndex);
    // }
    // if ( !isUnique ) {
    //     console.log('is unique');
        
    //     console.log(currentQuestionIndex);
    // } else {
    //     currentQuestionIndex = (Math.floor((Math.random() * questions.length) + 1))-1;
    // }
    //askedAlready[turnsTaken] = currentQuestionIndex;
    
    console.log(askedAlready);
    var questionOnPage = document.getElementById('question');
    questionOnPage.innerHTML = questions[currentQuestionIndex].question;
    var button1 = document.getElementById('a1');
    var button2 = document.getElementById('a2');
    var button3 = document.getElementById('a3');
    var button4 = document.getElementById('a4');
    button1.innerHTML = questions[currentQuestionIndex].a1;
    button2.innerHTML = questions[currentQuestionIndex].a2;
    button3.innerHTML = questions[currentQuestionIndex].a3;
    button4.innerHTML = questions[currentQuestionIndex].a4;
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

// function refreshQuiz() {
//     turns = 20;
//     console.log("refreshing quiz");
//     turnsTaken = 0;
//     correctAnswers = 0;
//     rollAgain = true;
//     askedAlready = [];
//     var button1 = document.getElementById('a1');
//     var button2 = document.getElementById('a2');
//     var button3 = document.getElementById('a3');
//     var button4 = document.getElementById('a4');
//     button1.disabled = false;
//     button2.disabled = false;
//     button3.disabled = false;
//     button4.disabled = false;
//     var questions = [
//         {
//             question: "Mermaid legends are first found in what culture?",
//             a1: "Irish",
//             a2: "Syrian",
//             a3: "Greek",
//             a4: "Roman",
//             correct:2
//         },
//         {
//             question:" A creature that is half female human, and half fish is known as what?",
//             a1:"kelpie",
//             a2:"vampire",
//             a3:"faun",
//             a4:"mermaid",
//             correct:4
//         },
//         {
//             question:"In sailor folklore, this mythical creature can signify either good or bad luck:",
//             a1:"fairy",
//             a2:"dragon",
//             a3:"centaur",
//             a4:"mermaid",
//             correct:4
//         },
//         {
//             question:"It is frequent for this creature to be carved into the bow of ships to bring good fortune to a voyage.",
//             a1:"mermaid",
//             a2:"griffin",
//             a3:"kelpie",
//             a4:"werewolf",
//             correct:1
//         },
//         {
//             question:"The mythology of the vampire originates from what culture?",
//             a1:"Greek",
//             a2:"Midieval Europe",
//             a3:"Syria",
//             a4:"Ireland",
//             correct:2
//         },
//         {
//             question: "Vampires have a weakness or fear to what of the following?",
//             a1:"Holy symbols and garlic",
//             a2:"Water",
//             a3:"Grass",
//             a4:"Their name",
//             correct:1
//         },
//         {
//             question: "Bram Stoker's Dracula is a famous novel about what type of mythical creature?",
//             a1: "Fairies",
//             a2: "Mermaids",
//             a3: "Centaurs",
//             a4: "Vampires",
//             correct:4
//         },
//         {
//             question: "One possible origin of Werewolf legends is:",
//             a1: "Homer's Odyysey",
//             a2: "Bram Stoker's Dracula",
//             a3: "The Epic of Gilgamesh",
//             a4: "Seafarer's Stories",
//             correct:3
//         },
//         {
//             question: "Werewolves can only be hurt by what?",
//             a1:"silver",
//             a2:"garlic and holy symbols",
//             a3:"water",
//             a4:"arrows",
//             correct:1
//         },
//         {
//             question: "Werewolves exhibit their half human, half beast form on which days of the month?",
//             a1: "Tuesdays",
//             a2: "Their Birthday",
//             a3: "The fourth day of each month",
//             a4: "The nights of the Full Moon",
//             correct:4
//         },
//         {
//             question: "A werewolf is a creature that is the combination of a human and what animal?",
//             a1: "Bat",
//             a2: "Horse",
//             a3: "Wolf",
//             a4: "Fish",
//             correct:3
//         },
//         {
//             question: "Centaurs Originated from what culture?",
//             a1: "American",
//             a2: "German",
//             a3: "Greek",
//             a4: "Japanese",
//             correct:3
//         },
//         {
//             question: "Centaurs are known to have the torso of a man and a body of a what?",
//             a1: "Horse",
//             a2: "Man",
//             a3: "Chicken",
//             a4: "Dinosaur",
//             correct: 1
//         },
//         {
//             question: "Which Greek god were the Centaurs followers of?",
//             a1: "Zeus",
//             a2: "Hades",
//             a3: "Hermes",
//             a4: "Dionysus",
//             correct: 4
//         },
//         {
//             question: "Chiron was a well known Centaur. Who below did he NOT tutor?",
//             a1: "Jason",
//             a2: "Leonidas",
//             a3: "Achilles",
//             a4: "Hercules",
//             correct: 2
//         },
//         {
//             question: "Cyclops found their origins in which culture?",
//             a1: "Greek",
//             a2: "Roman",
//             a3: "Jewish",
//             a4: "Asian",
//             correct: 1
//         },
//         {
//             question: "Cyclops only had 1 of what body part?",
//             a1: "arms",
//             a2: "toes",
//             a3: "eyes",
//             a4: "nipples",
//             correct: 3
//         },
//         {
//             question: "The Greeks considered Cyclops a race of what type of creatures?",
//             a1: "Warriors",
//             a2: "Lawyers",
//             a3: "Lawless",
//             a4: "Lazy",
//             correct: 3
//         },
//         {
//             question: "Cyclops were known to craft what?",
//             a1: "weapons and armor",
//             a2: "shoes and shoe strinks",
//             a3: "houses",
//             a4: "roads",
//             correct: 1
//         },
//         {
//             question: "Dragons came from which culture?",
//             a1: "Greek",
//             a2: "Asian",
//             a3: "Egyptian",
//             a4: "All of the above",
//             correct: 4
//         },
//         {
//             question: "Dragons had ___ which allowed them to fly:",
//             a1: "Feet",
//             a2: "Wings",
//             a3: "A Head",
//             a4: "A big heart",
//             correct: 2
//         },
//         {
//             question: "In their lair, what would dragons have in it?",
//             a1: "Treasure",
//             a2: "A tv",
//             a3: "Rocks",
//             a4: "A bed",
//             correct: 1
//         },
//         {
//             question: "Griffins have the head  of an eagle and body of a what?",
//             a1: "Lion",
//             a2: "Chicken",
//             a3: "Horse",
//             a4: "Dragon", 
//             correct:1
//         },
//         {
//             question: "What did Griffins do other than have capability of flight?",
//             a1: "Lung capacity for when they swim",
//             a2: "Guard treasure",
//             a3: "Kept their human(s) safe",
//             a4: "Hunt humans at night",
//             correct:2
//         },
//         {
//             question: "What do griffins symbolize? Strength and ______?",
//             a1: "Outgoing",
//             a2: "Agility",
//             a3: "Clumsiness",
//             a4: "Intelligence",
//             correct:4
//         },
//         {
//             question: "Where did fairies originate from?",
//             a1: "Eastern Europe",
//             a2: "Greek Mythology",
//             a3: "Norse Mythology",
//             a4: "Celtic",
//             correct:2
//         },
//         {
//             question: "What were 'Banshees' known for?",
//             a1: "Being kind creatures",
//             a2: "Being malevolent creatures who appear usually before something bad happens",
//             a3: "Being intimidating",
//             a4: "Are a sign of luck when encountered",
//             correct:2
//         },
//         {
//             question: "Where were fairies known to be demons?",
//             a1: "Asia",
//             a2: "Europe",
//             a3: "Puritanism",
//             a4:  "Scottland",
//             correct:3 
//         },
//         {
//             question: "The kelpie is a horse that can shape-shift into a _______?",
//             a1: "Human",
//             a2: "Monkey",
//             a3: "Unicorn",
//             a4: "Dragon", 
//             correct:1 
//         },
//         {
//             question: "What kind of tail do kelpies have?",
//             a1: "Lion",
//             a2: "Fish",
//             a3: "Wolf",
//             a4: "Mermaid-like",
//             correct:4
//         },
//         {
//             question: "Where do kelpies spend most of their time?",
//             a1: "In the desert",
//             a2: "By caves",
//             a3: "By rivers and lakes or wherever water is present",
//             a4: "Mountainous regions",
//             correct:3
//         }
//     ];
//     nextQuestion();
// }

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









// Code for making images "flip" over

