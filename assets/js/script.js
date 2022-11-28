//timer starts when start button is clicked [x]
//question presented when start button is clicked [ ]
//next question prompts when question is answered [ ]
//deduct points when incorrect answer is selected [ ]
//game ends when timer ends OR all q's answered [ ]
//score can be saved along with initials [ ]

//how to get questions & answer options to appear
//how to randomize question/answer content 
//how to store data locally 


var score = timeLeft;
var startButton = document.getElementById("startButton")
var answerButtons = document.getElementById("answerButtons");
var nextButton = document.getElementById("nextButton");
var timerEl = document.getElementById("countdown")
var quizIntro = document.getElementById("quizIntro")
var questionEl = document.getElementById("questionBox")
var index = 0;
var choice1 = document.getElementById("Choice1")
var choice2 = document.getElementById("Choice2")
var choice3 = document.getElementById("Choice3")
var choice4 = document.getElementById("Choice4")

//using 59 seconds to account for 1 second time lapse from start button 
var timeLeft = 59;

//dynamic style, attempting to remove buttons until after click start
answerButtons.style.display = "none";
nextButton.style.display = "none";


//this function begins the countdown timer for the quiz
function startTimer() {
    var timeInterval = setInterval(function(){
        if (timeLeft > 1){
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1){
            timerEl.textContent = timeLeft + "second remaining";
            timeLeft--;
        } else {
            timerEl.textContent = "TIME IS UP!";
            clearInterval(timeInterval);
        }
    }, 1000);
}

function startQuiz() {
    questionEl.innerHTML = questions[index].message;
    choice1.innerHTML = questions[index].choices[0];
    choice2.innerHTML = questions[index].choices[1];
    choice3.innerHTML = questions[index].choices[2];
    choice4.innerHTML = questions[index].choices[3];
    nextButton.style.display = "inline";
    answerButtons.style.display = "inline";
    startButton.style.display = "none";
    quizIntro.style.display = "none";
    
}

function nextQuestion() {
    index = index + 1;
    console.log(index)
    startQuiz()
}

startButton.addEventListener("click", startQuiz); {
}
startButton.addEventListener("click", startTimer); {
}
nextButton.addEventListener("click", nextQuestion); {
}

//QUESTION INDEX
var questions = [
    {
        message: "what is 1 + 1?", 
        choices: [2, 4, 6, 8], 
        correct: 2
    }, 
    {
        message: "what is 2 + 2?", 
        choices: [2, 4, 6, 8], 
        correct: 4
    },
    {
        message: "what is 2(1 + 1)?", 
        choices: [2, 4, 6, 8], 
        correct: 4
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