//connect js to start button 
var score = 0;
var startButton = document.querySelector("#startButton")


function startQuiz() {


}

startButton.addEventListener("click", startQuiz);

for(var i=0; i < questions.length; i++); {
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].correct) {
        score++;
        alert("CORRECT!");
    } else {
        alert("incorrect :(");
    }
}

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