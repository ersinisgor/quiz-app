'use strict';

// Create a new Quiz object
const quiz = new Quiz(questions);
const ui = new UI();

// Add an event listener to the start button
ui.btn_start.addEventListener('click', function () {
  // Add the 'active' class to the quiz box to show it
  ui.quiz_box.classList.add('active');
  // Show the first question
  showQuestion(quiz.getQuestions());
  // Show the current question number and total number of questions
  showNumberOfQuestions(quiz.questionIndex + 1, quiz.questions.length);
  // Hide the 'Next' button
  ui.btn_next.classList.remove('show');
});

// Add an event listener to the 'Next' button
ui.btn_next.addEventListener('click', function () {
  // Check if there are more questions left
  if (quiz.questions.length != quiz.questionIndex + 1) {
    // Increment the question index and show the next question
    quiz.questionIndex += 1;
    showQuestion(quiz.getQuestions());
    // Show the current question number and total number of questions
    showNumberOfQuestions(quiz.questionIndex + 1, quiz.questions.length);
    // Hide the 'Next' button
    ui.btn_next.classList.remove('show');
  } else {
    console.log('quiz finished');
  }
});

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
  ui.option_list.innerHTML = options;

  // Add an onclick event to each answer option
  const allOptions = ui.option_list.querySelectorAll('.option');

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
    option.insertAdjacentHTML('beforeend', ui.correctIcon);
    // If the selected answer is incorrect, add the incorrect class and icon
  } else {
    option.classList.add('incorrect');
    option.insertAdjacentHTML('beforeend', ui.incorrectIcon);
  }

  // Disable all answer options and show the next button
  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add('disabled');
  }

  ui.btn_next.classList.add('show');
}

// This function shows the current question number and total number of questions in the quiz
function showNumberOfQuestions(questionOrder, totalNumberOfQuestions) {
  let tag = `<span class="badge bg-warning">${questionOrder} / ${totalNumberOfQuestions}</span>`;
  document.querySelector('.quiz_box .question_index').innerHTML = tag;
}
