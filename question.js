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
  new Question(
    '5- Which of the following object is the main entry point to all client-side JavaScript features and APIs?',
    {
      a: 'Position',
      b: 'Window',
      c: 'Standard',
      d: 'Location',
    },
    'b'
  ),
  new Question(
    '6- Which of the following scoping type does JavaScript use?',
    {
      a: 'Sequential',
      b: 'Segmental',
      c: 'Lexical',
      d: 'Literal',
    },
    'c'
  ),
  new Question(
    '7- Why JavaScript Engine is needed?',
    {
      a: 'Both Compiling & Interpreting the JavaScript',
      b: 'Parsing the javascript',
      c: 'Interpreting the JavaScript',
      d: 'Compiling the JavaScript',
    },
    'c'
  ),
  new Question(
    '8- Which of the following methods/operation does javascript use instead of == and !=?',
    {
      a: 'JavaScript uses equalto()',
      b: 'JavaScript uses equals() and notequals() instead',
      c: 'JavaScript uses bitwise checking',
      d: 'JavaScript uses === and !== instead',
    },
    'd'
  ),
  new Question(
    '9- Which of the following is not an error in JavaScript?',
    {
      a: 'Missing of Bracket',
      b: 'Division by zero',
      c: 'Syntax error',
      d: 'Missing of semicolons',
    },
    'b'
  ),
  new Question(
    '10- Which of the following is the property that is triggered in response to JS errors?',
    {
      a: 'onclick',
      b: 'onerror',
      c: 'onmessage',
      d: 'onexception',
    },
    'b'
  ),
];
