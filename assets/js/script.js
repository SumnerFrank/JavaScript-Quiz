//connect js to start button 
var startButton = document.querySelector("#startButton")
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
    }
]


function startQuiz() {


}

startButton.addEventListener("click", startQuiz);
