const questions = [
    {
        question: "What does CSS stand For?", 
        options: ["Cascading Style Sheet", 
        "Common Stance Style", 
        "Curriculum Style Standard",
         "Cursed Sinister Stepson"], 
        answer: "Cascading Style Sheet"
    }, 
    {
        question: "What does JavaScript do? ", 
        options: ["pours a cup of coffee", 
        "adds function to webpage", 
        "nothing", "hides webpage"], 
        answer: "adds function to webpage"
    },
    {
        question: "What is the proper way to close an HTML element", 
        options: ["/", "#", "!", "("], 
        answer: "/"
    }, 
    {
        question: "what is 2(2 + 2)?", 
        options: [2, 4, 6, 8], 
        answer: 8
    },
    {
        question: "what is 3(1 + 1)?", 
        options: [2, 4, 6, 8], 
        answer: 6
    }, 
]


const totalScores = [];
const questionIndex = 0;
const startingTime = 60;
const time = document.getElementById("time");
const start = document.querySelector(".startButton");
const questionTitle = document.querySelector("#question-title");
const questionOptions = document.getElementById("question-options")
const questionResponse = document.getElementById("question-response")
const questionDisplay = document.querySelector(".question-display")
var interval
let finalScore = 0
const finishedSection = document.getElementById("results-score")
const finishedScore = document.getElementById("finished-score")
const playerInitials = document.getElementById("player-initials")
const instructions = document.getElementById("instructions")

const pageStart = () => {
    start.onclick = startQuiz
}

const startQuiz = () => {
    interval = setInterval(() => {
        startingTime--
        time.textContent = startingTime
        if(startingTime < 1) {
            endGame();
        }
    }, 1000)
    displayQuestion()
};

const displayQuestion = () => {
    start.setAttribute('style', 'display:none');
    document.getElementsByTagName('h1')[0].style.display = 'none';
    document.getElementsByTagName('h2')[0].style.display = 'none';
    document.getElementsByTagName('h3')[0].style.display = 'none';

    const showQuestion = questions[questionIndex];
    questionTitle.textContent = showQuestion.question;
    questionOptions.innerHTML = '';

    showQuestion.options.forEach((option) => {
        const questionButton = document.createElement('button');
        questionButton.value = option;
        questionButton.textContent = option;
        questionButton.onclick = verifyAnswer;
        questionOptions.appendChild(questionButton)
    });
    if(questions.length < 1) {
        endGame();
    }
};

const verifyAnswer = () => {
    if(this.value === questions[questionIndex].answer) {
        questionResponse.textContent = 'correct!'
        setTimeout(() => {
            questionResponse.textContent = '';
            if(questionIndex == questions.length || time == 0) {
                endGame();
            } else {
                displayQuestion();
            }
        }, 1000);
    } else {
        questionResponse.textContent = 'sorry, incorrect';
        setTimeout(() => {
            questionResponse.textContent = '';
            if(questionIndex === questions.length || time === 0) {
                endGame();
            } else {
                displayQuestion();
            }
        }, 1000);
        startingTime = startingTime -10;
        time.textContent = startingTime;
    } questionIndex++;
};

const endGame = () => {
    clearInterval(interval);
    finalScore = time.textContent;
    time.textContent = 0;
    questionDisplay.setAttribute('style', 'display:none');
    finishedSection.setAttribute('style', 'display:flex');
    finishedScore.textContent = "You Scored " + finalScore + '!';
    instructions.textContent = 'Type Your Initials Below';
    const submit = document.createElement('button');
    submit.textContent = 'Submit Score';
    finishedSection.appendChild(submit);
    submit.onclick = () => {
        const initials = playerInitials.value
        const userScore = {
            initials: initials,
            score: finalScore
        };
        const totalScores = JSON.parse(localStorage.getItem('totalScores')) || [];
        totalScores.push(userScore);
        const newScore = JSON.stringify(totalScores);
        localStorage.setItem('totalScores', newScore);
        window.location.href = 'scores.html';
    }
}


pageStart()