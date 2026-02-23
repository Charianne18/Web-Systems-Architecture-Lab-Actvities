const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["Shakespeare", "Hemingway", "Tolkien", "Rowling"],
        answer: "Shakespeare"
    },
    {
        question: "Which is the largest ocean?",
        choices: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Pacific"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionEl.textContent = current.question;
    const buttons = choicesEl.querySelectorAll(".choice-btn");
    buttons.forEach((button, index) => {
        button.textContent = current.choices[index];
        button.onclick = () => checkAnswer(current.choices[index]);
    });
}

function checkAnswer(choice) {
    if(choice === questions[currentQuestion].answer){
        score++;
    }
    currentQuestion++;
    if(currentQuestion < questions.length){
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult(){
    document.getElementById("quiz").style.display = "none";
    resultEl.style.display = "block";
    scoreEl.textContent = `${score} / ${questions.length}`;
}

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    resultEl.style.display = "none";
    loadQuestion();
});

// Start quiz
loadQuestion();