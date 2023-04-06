// Getting the "Help" link
const helpLink = document.getElementById("help-link");

// Add a click event listener to the "Help" link
helpLink.addEventListener("click", () => {
    // Defines an array of random words of encouragement
    const encouragementWords = [
        "You can do it!",
        "Believe in yourself!",
        "You're awesome!",
        "Keep going!",
        "You're making progress!",
        "You got this!",
        "Don't give up!",
        "Stay strong!",
        "Believe you can and you're halfway there. -Theodore Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. -Confucius",
        "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill"
    ];

    // Getting random encouragment words from the array
    const randomEncouragement = encouragementWords[Math.floor(Math.random() * encouragementWords.length)];

    // Show an alert with the random random encouragment words
    alert(randomEncouragement);
});

/* for form message */
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // perform action with form data
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // display thank you alert
  alert('Thank you for your message!');
});