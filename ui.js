'use strict';

class UI {
  constructor() {
    this.btn_start = document.querySelector('.btn_start');
    this.btn_next = document.querySelector('.next_btn');
    this.quiz_box = document.querySelector('.quiz_box');
    this.score_box = document.querySelector('.score_box');
    this.option_list = document.querySelector('.option_list');
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
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

  showScore(totalNumberOfQuestions, numberOfCorrectAnswer) {
    let tag = `You gave ${numberOfCorrectAnswer} correct answers out of a total of ${totalNumberOfQuestions} questions`;
    document.querySelector('.score_box .score_text').innerHTML = tag;
  }
}
