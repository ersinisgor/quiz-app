'use strict';

class UI {
  constructor() {
    this.btn_start = document.querySelector('.btn_start');
    this.btn_next = document.querySelector('.next_btn');
    this.btn_replay = document.querySelector('.btn_replay');
    this.btn_quit = document.querySelector('.btn_quit');
    this.quiz_box = document.querySelector('.quiz_box');
    this.score_box = document.querySelector('.score_box');
    this.option_list = document.querySelector('.option_list');
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
    this.time_text = document.querySelector('.time_text');
    this.time_second = document.querySelector('.time_second');
  }

  // This function shows a question on the quiz page
  showQuestion(question) {
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
    this.option_list.innerHTML = options;

    // Add an onclick event to each answer option
    const allOptions = this.option_list.querySelectorAll('.option');

    for (let opt of allOptions) {
      opt.setAttribute('onclick', 'optionSelected(this)');
    }
  }

  // This function shows the current question number and total number of questions in the quiz
  showNumberOfQuestions(questionOrder, totalNumberOfQuestions) {
    let tag = `<span class="badge bg-warning">${questionOrder} / ${totalNumberOfQuestions}</span>`;
    document.querySelector('.quiz_box .question_index').innerHTML = tag;
  }

  // This function displays the number of correct answer and the total number of questions in the quiz
  showScore(totalNumberOfQuestions, numberOfCorrectAnswer) {
    let tag = `You gave ${numberOfCorrectAnswer} correct answers out of a total of ${totalNumberOfQuestions} questions`;
    document.querySelector('.score_box .score_text').innerHTML = tag;
  }
}
