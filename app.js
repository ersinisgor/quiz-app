'use strict';

class Question {
  constructor(questionText, answerOptions, trueAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.trueAnswer = trueAnswer;
  }
  checkTheAnswer(answer) {
    return answer === this.trueAnswer;
  }
}

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

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.questionIndex = 0;
  }
  getQuestions() {
    return this.questions[this.questionIndex];
  }
}

const quiz = new Quiz(questions);

document.querySelector('.btn_start').addEventListener('click', function () {
  if (quiz.questions.length != quiz.questionIndex) {
    document.querySelector('.quiz_box').classList.add('active');
    console.log(quiz.getQuestions());
    quiz.questionIndex += 1;
  } else {
    console.log('quiz finished');
  }
});
