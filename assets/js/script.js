var time = document.querySelector(".timer");
var score = document.querySelector("#score");
var secondsLeft = 60;

const start = document.querySelector("#start");

// INTRO/START
const codersIntro = document.querySelector("#challenge-begins");

//CALL END LOAD EMLEMENT 
var questionsEl = document.querySelector(".all-question");

// ELEMENT LOCATIONS 
let questionEl = document.querySelector("#question");
const correctWrong = document.querySelector("#right-wrong");
let questionCount = 0;

// FINAL SCORE 
const finalEl = document.querySelector("#final-score");
let initialsInput = document.querySelector("#initials");

// HIGHSCORE  
const highscoresEl = document.querySelector("#high-scores");
let scoreListEl = document.querySelector(".score-list");
let scoreList = [];

// CALL OUT THE ANSWER
const ansBtn = document.querySelectorAll("button.answer-btn")

// VAR SUBMITINT, GO, CLEAR, VIEW
let submitScrBtn = document.querySelector("#submit-score");
let clearScrBtn = document.querySelector("#clearScores");
let viewScrBtn = document.querySelector("#view-scores");
let goBackBtn = document.querySelector("#goBack");


// VAR ANSER CALL
const ans1Btn = document.querySelector("#answer-1");
const ans2Btn = document.querySelector("#answer-2");
const ans3Btn = document.querySelector("#answer-3");
const ans4Btn = document.querySelector("#answer-4");

//Quiz questions/answers

const questions = [ 
   
    {
        question: "The condition in an if / else statement is enclosed within _______.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        question: "Arrays in Javascript can be used to store ______.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];