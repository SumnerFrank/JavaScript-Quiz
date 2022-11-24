//need to make button functional
//need next question to appear immediately after answering
//need to show if question was correct or incorrect 
//need timer to count down AFTER start button is used 


//connect js to start button 
var score = 0;
var startButton = document.querySelector("#startButton")
var startingSeconds = 60;
let time = startingSeconds;
var countdownEl = document.getElementById("#countdown")
var questionIndex = 0;

function startTimer() {
    startingSeconds = Math.floor(time);
    countdownEl.innerHTML = $(time);
    time--;
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
for(var i=0; i < questions.length; i++); {

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