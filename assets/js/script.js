//need to make button functional
//need next question to appear immediately after answering
//need to show if question was correct or incorrect 
//need timer to count down AFTER start button is used 


//connect js to start button 
var score = 0;
var startButton = document.querySelector("#startButton")


function startQuiz() {
alert("figure out how to make the questions appear here");
}

startButton.addEventListener("click", startQuiz); {

};

nextButton.addEventListener("click", () => {
    //needs to go to next question
}
)


//FOR LOOP - function for question prompts, should continue through questions list
//I dont know if this for loop works properly so that's something to figure out 
for(var i=0; i < questions.length; i++); {
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].correct) {
        score++;
        alert("CORRECT!");
    } else {
        alert("incorrect :(");
    }
}


//QUESTIONS INDEX
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