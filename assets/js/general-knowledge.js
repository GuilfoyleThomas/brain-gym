// Defines questions and answers
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Jupiter", "Saturn", "Neptune", "Uranus"],
      answer: "Jupiter"
    },
    {
      question: "What is the highest mountain in the world?",
      choices: ["Mount Everest", "Mount Kilimanjaro", "Mount Fuji", "Mount McKinley"],
      answer: "Mount Everest"
    }
  ];
  
  // Defines variables to keep track of state
  let currentQuestion = 0;
  let score = 0;
  
  // Defines functions to update the DOM
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
  
  // Starts the quiz
  showQuestion();