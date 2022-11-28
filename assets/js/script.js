//need to make button functional
//need next question to appear immediately after answering
//need to show if question was correct or incorrect 
//need start button to disappear after clicked 

//connect js to start button 
var score = timeLeft;
var startButton = document.getElementById("startButton")
var answerButtons = document.getElementById("answerButtons");
var nextButton = document.getElementById("nextButton");
var timerEl = document.getElementById("countdown")
var questions = document.querySelector("#questionsBox")
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
    startTimer();
    nextButton.style.display = "inline";
    answerButtons.style.display = "inline";
    startButton.style.display = "none";
    
    console.log("does this work")
}

startButton.addEventListener("click", startQuiz); {

};





//FOR LOOP - function for question prompts, should continue through questions list
for(var i=0; i < 5; i++); {
//tried to use i < questions.length, did not work, not sure why 
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