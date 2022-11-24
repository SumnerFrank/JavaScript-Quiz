//need to make button functional
//need next question to appear immediately after answering
//need to show if question was correct or incorrect 
//need timer to count down AFTER start button is used 


//connect js to start button 
var score = 0;
var startButton = document.querySelector("#startButton")
var timer = document.querySelector("#startTime"); 
var questionIndex = 0;

function startQuiz() {

    alert("figure out how to make the questions appear here");
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