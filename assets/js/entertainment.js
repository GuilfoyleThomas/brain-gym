// Define your questions and answers
const questions = [{
    question: "Who directed the 1975 movie 'Jaws'?",
    choices: ["Steven Spielberg", "George Lucas", "Martin Scorsese", "Francis Ford Coppola"],
    answer: "Steven Spielberg"
  },
  {
    question: "What is the highest-grossing movie of all time?",
    choices: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
    answer: "Avatar"
  },
  {
    question: "Who played the character of Neo in 'The Matrix'?",
    choices: ["Keanu Reeves", "Tom Cruise", "Brad Pitt", "Leonardo DiCaprio"],
    answer: "Keanu Reeves"
  },
  {
    question: "Which singer is known as the 'Queen of Pop'?",
    choices: ["Madonna", "Beyonce", "Taylor Swift", "Adele"],
    answer: "Madonna"
  },
  {
    question: "What is the name of the highest-grossing musical of all time?",
    choices: ["The Lion King", "Wicked", "Hamilton", "Les Miserables"],
    answer: "The Lion King"
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