//need to make button functional
//need next question to appear immediately after answering
//need to show if question was correct or incorrect 
//need start button to disappear after clicked 

//connect js to start button 
var score = timeLeft;
var startButton = document.querySelector("#startButton")
var timerEl = document.getElementById("countdown")
var timeLeft = 59;

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
    console.log("does this work")

var answerButtons = document.getElementById("#answerButtons");
answerButtons.style.display='hide';

}

function startQuiz() {
    startTimer();
}

startButton.addEventListener("click", startQuiz); {

};


nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
}
)


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
    {
        message: "what is 2(1 + 2)?", 
        choices: [2, 4, 6, 8], 
        correct: 6
    }, 
]