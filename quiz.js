'use strict';

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
