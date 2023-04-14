'use strict';

// Create a new Quiz object
const quiz = new Quiz(questions);
const ui = new UI();

// Add an event listener to the start button
ui.btn_start.addEventListener('click', function () {
  // Add the 'active' class to the quiz box to show it
  ui.quiz_box.classList.add('active');
  // Show the first question
  ui.showQuestion(quiz.getQuestions());
  // Show the current question number and total number of questions
  ui.showNumberOfQuestions(quiz.questionIndex + 1, quiz.questions.length);
  // Hide the 'Next' button
  ui.btn_next.classList.remove('show');
});

// Add an event listener to the 'Next' button
ui.btn_next.addEventListener('click', function () {
  // Check if there are more questions left
  if (quiz.questions.length != quiz.questionIndex + 1) {
    // Increment the question index and show the next question
    quiz.questionIndex += 1;
    ui.showQuestion(quiz.getQuestions());
    // Show the current question number and total number of questions
    ui.showNumberOfQuestions(quiz.questionIndex + 1, quiz.questions.length);
    // Hide the 'Next' button
    ui.btn_next.classList.remove('show');
  } else {
    console.log('quiz finished');
    ui.quiz_box.classList.remove('active');
    ui.score_box.classList.add('active');
    ui.showScore(quiz.questions.length, quiz.numberOfcorrectAnswer);
  }
});

ui.btn_quit.addEventListener('click', function () {
  window.location.reload();
});

ui.btn_replay.addEventListener('click', function () {
  quiz.questionIndex = 0;
  quiz.numberOfcorrectAnswer = 0;

  //click event with JavaScript
  ui.btn_start.click();

  ui.score_box.classList.remove('active');
});

// This function is called when an answer option is selected
function optionSelected(option) {
  // Get the text content of the selected answer option
  let answer = option.querySelector('span b').textContent;
  // Get the current question from the quiz
  let question = quiz.getQuestions();

  // If the selected answer is correct, add the correct class and icon
  if (question.checkTheAnswer(answer)) {
    quiz.numberOfcorrectAnswer += 1;
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
