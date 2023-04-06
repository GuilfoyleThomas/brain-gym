// Define your questions and answers
const questions = [{
        question: "Who is the founder of Apple Inc.?",
        choices: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
        answer: "Steve Jobs"
    },
    {
        question: "What is the name of the world's largest social media platform?",
        choices: ["Twitter", "Instagram", "Facebook", "Snapchat"],
        answer: "Facebook"
    },
    {
        question: "What is the programming language used to develop the web?",
        choices: ["Java", "C++", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What is the name of Google's mobile operating system?",
        choices: ["iOS", "Android", "Windows", "BlackBerry"],
        answer: "Android"
    }
];

// Define variables to keep track of state
let currentQuestion = 0;
let score = 0;

// Define functions to update the DOM
function showQuestion() {
    const questionElem = document.getElementById("question");
    const choicesElem = document.getElementById("choices");
    const numElem = document.getElementById("question-number");
    const totalElem = document.getElementById("total-questions");

    const current = questions[currentQuestion];

    questionElem.innerText = current.question;
    numElem.innerText = currentQuestion + 1;
    totalElem.innerText = questions.length;

    while (choicesElem.firstChild) {
        choicesElem.removeChild(choicesElem.firstChild);
    }

    current.choices.forEach((choice, index) => {
        const buttonElem = document.createElement("button");
        buttonElem.innerText = choice;
        buttonElem.addEventListener("click", () => {
            checkAnswer(choice);
        });
        choicesElem.appendChild(buttonElem);
    });

    document.getElementById("next-button").disabled = true;
}

function checkAnswer(choice) {
    const current = questions[currentQuestion];

    if (choice === current.answer) {
        score++;
        document.getElementById("score").innerText = score;
        document.getElementById("choices").querySelectorAll("button").forEach(button => {
            if (button.innerText === choice) {
                button.classList.add("correct-answer");
            }
        });
    } else {
        document.getElementById("choices").querySelectorAll("button").forEach(button => {
            if (button.innerText === choice) {
                button.classList.add("wrong-answer");
            }
            if (button.innerText === current.answer) {
                button.classList.add("correct-answer");
            }
        });
    }

    document.getElementById("next-button").disabled = false;
}

function showNextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

function endQuiz() {
    const quizElem = document.querySelector(".quiz");
    quizElem.innerHTML = `
      <h2>Quiz Complete!</h2>
      <p>Your final score is <span id="final-score">${score}</span>.</p>
    `;

    const resetButton = document.getElementById("reset-button");
    resetButton.classList.remove("hidden");
}

// Attach event listeners to buttons
document.getElementById("next-button").addEventListener("click", showNextQuestion);
document.getElementById("reset-button").addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    document.getElementById("score").innerText = score;
    showQuestion();
    document.getElementById("reset-button").classList.add("hidden");
});

// Start the quiz
showQuestion();