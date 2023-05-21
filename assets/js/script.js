var questions = [
    {
        message: "What does CSS stand For?", 
        choices: ["Cascading Style Sheet", 
        "Common Stance Style", 
        "Curriculum Style Standard",
         "Cursed Sinister Stepson"], 
        correct: "Cascading Style Sheet"
    }, 
    {
        message: "What does JavaScript do? ", 
        choices: ["pours a cup of coffee", 
        "adds function to webpage", 
        "nothing", "hides webpage"], 
        correct: "adds function to webpage"
    },
    {
        message: "What is the proper way to close an HTML element", 
        choices: ["/", "#", "!", "("], 
        correct: "/"
    }, 
    {
        message: "what is 2(2 + 2)?", 
        choices: [2, 4, 6, 8], 
        correct: 8
    },
    {
        message: "what is 3(1 + 1)?", 
        choices: [2, 4, 6, 8], 
        correct: 6
    }, 
]


var totalScores = [];
var questionIndex = 0;
var startingTime = 60;
var time = document.getElementById("time");
var start = document.querySelector(".startButton");
var questionTitle = document.querySelector("#question-title");
var questionOptions = document.getElementById("question-options")
var questionResponse = document.getElementById("question-response")
var questionDisplay = document.querySelector(".question-display")
var interval
var finalScore = 0
var finishedSection = document.getElementById("finished-section")
var finishedScore = document.getElementById("finished-score")
var playerInitials = document.getElementById("player-initials")
var insertInstructions = document.getElementById("insert-instructions")







