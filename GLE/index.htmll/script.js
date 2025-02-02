


// Array of questions and answers
const questions = [
  {
     question: "what is the full meaning of GLE? ",
     answers: 
      [ "Growth, Love and Elegance","Growth, Lust and Elegance","Growth, Lust and Excellence","Grace, Love and Excellence",
     ],
     correctAnswer: 0
 
  },
  {
      question: "what is the most important factor in achieving personal growth? ",
      answers: [
       "Believing strongly in yourself and refusing to take corrections", 
        "Condemnation and refusal to forgive oneself", 
       "self awareness and a willingness to learn from mistakes", 
        "Giving up after the first trials because you are above mistakes", 

      ] ,
      correctAnswer: 2
  },

  {

    question: "what role does resilience play in personal growth? ",
    answers: [
     "Creates ability to bounce back from setbacks, adapt to change and keep growing", 
      "keeps you stocked in one place trying something that will never be", 
     "helps you avoid challenges and difficult situations", 
      "makes you more resistance to learning new things",

    ],
    correctAnswer:0
},
{
    question: "what is the most important factor in building and maintaining healthy relationships? ",
    answers: [
      "Ignoring conflicts and avoiding difficult conversations",
      "Manipulation and guilt-tripping",
      "Effective communication, empathy and mutual respect",
      "Possessiveness and control", 

    ],
    correctAnswer:2
},

{
    question: "How can one cultivate self-love and self acceptance? ",
    answers: [
"Practicing self compassion, acknowledgin strength and treating self with kindness and respect", 
"Critcizing and judging yourself harshly", 
"comparing yourself unfavourably to others", 
"Trying so hard to change who you are to someone's expectation",


    ],
    correctAnswer:0
  },
  {
      question: "what is the key to living an elegant life? ",
      answers: [
       "By neglecting your physical emotional and mental well-being", 
       "By trying to immitate someone else's style ", 
      "By prioritizing material wealth and statues symbol",
        "By cultivating refinement, poise and sophistication in your thoughts words and actions",

      ],
      correctAnswer:3
  },
  {
      question: "what is the primary purpose of a vision board? ",
      answers: [
        "For comparison and inferiority complex", 
        "To create a decorative piece for your space", 
        "To clarify and create a visual representation of your ideal life", 
        "To distract yourself from your current problems and challenges", 

      ],
      correctAnswer:2
  },
  {
      question: "what are affirmative words? ",
      answers: [
       
          "Positive statements that empower and inspire you", 
        "Negative self-talks ", 
        "Critical comments", 
       "Sarcastic remarks", 
      ],
      correctAnswer:0
  },
  {
      question: "why do we use affirmative words? ",
      answers: [
       "To manipulate yourself and others", 
        "To avoid unnecessary dramas", 
      "To reprogram your mind with positivity", 
        "To feel guilty",

      ],
      correctAnswer:2
  },
  {
      question: "what is a vision board? ",
      answers: [
       "A visual representation of your goals and desires", 
        "A vision statement", 
       "A motivational poster", 
        "A life worksheet", 
  

],
      correctAnswer: 0

  },
  {
  question: "What is the key to creating a timeless wardrobe ",
  answers: [

  
   "Following the latest trends",
  " Investing in quality over quantity",
  " Buying cheap and disposable clothing",
  " Wearing only designer brands",
  
  ],

  correctAnswer: 1
},

    

{ 
  question: "What is the first step in creating a morning routine?",
   answers: [ 
    "Checking social media",
     "Setting clear goals and priorities", 
     "Hitting the snooze button", 
     "Watching TV",
     ], 
     
     correctAnswer: 1 
    },

{ 
  question: "Which morning habit can help increase energy levels?",
   answers: [
     "Drinking coffee",
     
       "Reading the news", 
       "Playing video games",
       "Meditating for 10 minutes",
       ], 
       correctAnswer: 3
       },

{ 
  question: "What is the primary benefit of loving without expectations?",
   answers: [
     "Getting what you want from your partner", 
     "Avoiding disappointment and heartache",
      "Experiencing true happiness and freedom",
       "Manipulating your partner into loving you",
       ],
        correctAnswer: 2 
      },

{ 

  question: "Which of the following is a characteristic of loving without expectations?", 
  answers: [ 

    "Focusing on what you can get from your partner", 
    "Letting go of attachment to specific outcomes", 
    "Trying to control your partner's actions", 
    "Expecting your partner to change for you",
   ], 


   correctAnswer: 1 
  
  
  },

{ 

  question: "What is the importance of self-care in maintaining a healthy relationship?",
   answers: [ 
    "It's unnecessary and selfish", 
    "It helps you focus on your partner's needs",
     "It allows you to recharge and be a better partner",
      "It's only for people with mental health issues" ,
    ],
     correctAnswer: 2 
    },

{ 
  question: "Which of the following is a benefit of having a capsule wardrobe?",
   answers: [
     "You'll have more clothes to choose from",
      "You'll save money in the long run", 
      "You'll be more likely to follow trends",
       "You'll have to do more laundry",
       ],
        correctAnswer: 1
       },

     {

   question: "What is the key to boosting productivity in the morning?",
    answers: [ "Hitting the snooze button repeatedly",
       "Checking social media as soon as you wake up",
        "Creating a consistent morning routine", 
        "Watching TV before starting your day" ,
      ],
       correctAnswer: 2 
      },


      {
         question: "Which of the following is a characteristic of true happiness?",
          answers: [
             "It's dependent on external circumstances",
              "It's fleeting and temporary",
               "It's based on inner peace and contentment", 
               "It's only achievable through material possessions",
               ],
                correctAnswer:2
              },


        { 
          question: "What is the benefit of practicing mindfulness in the morning?",
           answers: [ 
            "It helps you check your social media notifications",
             "It increases your stress levels",
              "It sets a positive tone for the day",
               "It makes you feel tired" ,
              ], 
              correctAnswer: 2
             },


];




// Current question index
let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question
function displayCurrentQuestion() {
  const questionText = document.getElementById("question-text");
  const answerOptions = document.getElementById("answer-options");

  // Clear the previous question's answer options
  answerOptions.innerHTML = "";

  // Display the current question's text with question number
  questionText.textContent = `Question ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex].question}`;

  // Display the current question's answer options in a separate box
  questions[currentQuestionIndex].answers.forEach((answer, index) => {
    const answerOption = document.createElement("div");
    answerOption.className = "answer-option";
    answerOption.textContent = `${index + 1}. ${answer}`;

    answerOption.addEventListener("click", () => {
      // Check if the clicked answer is correct
      if (index === questions[currentQuestionIndex].correctAnswer) {
        answerOption.style.backgroundColor = "lightgreen";
        score++;
      } else {
        answerOption.style.backgroundColor = "crimson";
        // Blink the correct answer
        const correctAnswerOption = document.querySelectorAll(".answer-option")[questions[currentQuestionIndex].correctAnswer];
        correctAnswerOption.style.backgroundColor = "lightgreen";
        correctAnswerOption.style.animation = "blink 1s infinite";
      }

      // Disable all answer options
      const allAnswerOptions = document.querySelectorAll(".answer-option");
      allAnswerOptions.forEach((option) => {
        option.style.pointerEvents = "none";
      });
    });

    answerOptions.appendChild(answerOption);
  });
}

// Function to handle the "Next Question" button click
function handleNextQuestionButtonClick() {
  // Increment the current question index
  currentQuestionIndex++;

  // Check if we've reached the end of the questions array
  if (currentQuestionIndex >= questions.length) {
    // Store the final score in local storage
    localStorage.setItem("finalScore", `${score} out of ${questions.length}`);
    // Redirect to the result page
    window.location.href = "result.html";
    return;
  }

  // Display the next question
  displayCurrentQuestion();
}

// Display the first question
displayCurrentQuestion();

// Add an event listener to the "Next Question" button
document.getElementById("next-question-btn").addEventListener("click", handleNextQuestionButtonClick);

document.getElementById("retake-quiz-btn").addEventListener("click", () => {
  // Reset the current question index
  currentQuestionIndex = 0;
  score = 0;
  // Reset the user's answers
  // Display the first question again
  displayCurrentQuestion();
});

let time = 600; // 10 minutes in seconds
let timer = setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  document.getElementById("timer").innerHTML = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  time--;
  if (time === 0) {
    clearInterval(timer);
    alert("Time's up!");
  }
}, 1000);



















  






  













  
  
    
  
  












