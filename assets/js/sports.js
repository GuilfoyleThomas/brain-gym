// Define your questions and answers
const questions = [
    {
      question: "Which country won the first ever FIFA World Cup in 1930?",
      choices: ["Argentina", "Brazil", "Uruguay", "Germany"],
      answer: "Uruguay"
    },
    {
      question: "Who holds the record for the most Grand Slam titles in men's tennis?",
      choices: ["Roger Federer", "Pete Sampras", "Rafael Nadal", "Novak Djokovic"],
      answer: "Roger Federer"
    },
    {
      question: "Which country won the most gold medals at the 2016 Summer Olympics in Rio de Janeiro?",
      choices: ["USA", "China", "Russia", "Great Britain"],
      answer: "USA"
    },
    {
      question: "Which boxer was known as 'The Greatest' and 'The Champ'?",
      choices: ["Muhammad Ali", "Mike Tyson", "Sugar Ray Leonard", "Floyd Mayweather Jr."],
      answer: "Muhammad Ali"
    },
    {
      question: "Which NFL quarterback has won the most Super Bowl MVP awards?",
      choices: ["Tom Brady", "Joe Montana", "Terry Bradshaw", "Bart Starr"],
      answer: "Tom Brady"
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
  
  ttttt