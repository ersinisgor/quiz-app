'use strict';

// Question class that represents a single question
class Question {
  constructor(questionText, answerOptions, trueAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.trueAnswer = trueAnswer;
  }
  // Method to check if the answer provided is correct
  checkTheAnswer(answer) {
    return answer === this.trueAnswer;
  }
}

// An array of questions for the quiz
let questions = [
  new Question(
    '1- What is JavaScript?',
    {
      a: 'JavaScript is a scripting language used to make the website interactive',
      b: 'JavaScript is an assembly language used to make the website interactive',
      c: 'JavaScript is a compiled language used to make the website interactive',
      d: 'None of the mentioned',
    },
    'a'
  ),
  new Question(
    '2- Which of the following is correct about JavaScript?',
    {
      a: 'JavaScript is an Object-Based language',
      b: 'JavaScript is Assembly-language',
      c: 'JavaScript is an Object-Oriented language',
      d: 'JavaScript is a High-level language',
    },
    'a'
  ),
  new Question(
    '3- Among the given statements, which statement defines closures in JavaScript?',
    {
      a: 'JavaScript is a function that is enclosed with references to its inner function scope',
      b: 'JavaScript is a function that is enclosed with references to its lexical environment',
      c: 'JavaScript is a function that is enclosed with the object to its inner function scope',
      d: 'None of the mentioned',
    },
    'b'
  ),
  new Question(
    '4- Which of the following is not javascript data types?',
    {
      a: 'Null type',
      b: 'Undefined type',
      c: 'Number type',
      d: 'All of the mentioned',
    },
    'd'
  ),
];

// Quiz class that holds all the questions
class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.questionIndex = 0;
  }
  // Method to get the current question
  getQuestions() {
    return this.questions[this.questionIndex];
  }
}

// Create a new Quiz object
const quiz = new Quiz(questions);

// Add an event listener to the start button
document.querySelector('.btn_start').addEventListener('click', function () {
  // Add the 'active' class to the quiz box to show it
  document.querySelector('.quiz_box').classList.add('active');
  // Show the first question
  showQuestion(quiz.getQuestions());
  // Show the current question number and total number of questions
  showNumberOfQuestions(quiz.questionIndex + 1, quiz.questions.length);
  // Hide the 'Next' button
  document.querySelector('.next_btn').classList.remove('show');
});

// Add an event listener to the 'Next' button
document.querySelector('.next_btn').addEventListener('click', function () {
  // Check if there are more questions left
  if (quiz.questions.length != quiz.questionIndex + 1) {
    // Increment the question index and show the next question
    quiz.questionIndex += 1;
    showQuestion(quiz.getQuestions());
    // Show the current question number and total number of questions
    showNumberOfQuestions(quiz.questionIndex + 1, quiz.questions.length);
    // Hide the 'Next' button
    document.querySelector('.next_btn').classList.remove('show');
  } else {
    console.log('quiz finished');
  }
});

// Select the option list and create variables for the correct and incorrect icons
const option_list = document.querySelector('.option_list');
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

// This function shows a question on the quiz page
function showQuestion(question) {
  // Create a span element to hold the question text
  let questionTextElement = `<span>${question.questionText}</span>`;
  // Create a string to hold all the answer options
  let options = '';
  // Loop through all the answer options and add them to the options string
  for (let answer in question.answerOptions) {
    options += `
    
            <div class="option">
                <span><b>${answer}</b>: ${question.answerOptions[answer]}</span>
            </div>
            
        `;
  }

  // Set the question text and answer options in the HTML
  document.querySelector('.question_text').innerHTML = questionTextElement;
  option_list.innerHTML = options;

  // Add an onclick event to each answer option
  const allOptions = option_list.querySelectorAll('.option');

  for (let opt of allOptions) {
    opt.setAttribute('onclick', 'optionSelected(this)');
  }
}

// This function is called when an answer option is selected
function optionSelected(option) {
  // Get the text content of the selected answer option
  let answer = option.querySelector('span b').textContent;
  // Get the current question from the quiz
  let question = quiz.getQuestions();

  // If the selected answer is correct, add the correct class and icon
  if (question.checkTheAnswer(answer)) {
    option.classList.add('correct');
    option.insertAdjacentHTML('beforeend', correctIcon);
    // If the selected answer is incorrect, add the incorrect class and icon
  } else {
    option.classList.add('incorrect');
    option.insertAdjacentHTML('beforeend', incorrectIcon);
  }

  // Disable all answer options and show the next button
  for (let i = 0; i < option_list.children.length; i++) {
    option_list.children[i].classList.add('disabled');
  }

  document.querySelector('.next_btn').classList.add('show');
}

// This function shows the current question number and total number of questions in the quiz
function showNumberOfQuestions(questionOrder, totalNumberOfQuestions) {
  let tag = `<span class="badge bg-warning">${questionOrder} / ${totalNumberOfQuestions}</span>`;
  document.querySelector('.quiz_box .question_index').innerHTML = tag;
}
