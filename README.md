# Quiz App

Live Demo 👉 https://quiz-app-er.netlify.app/

This JavaScript code implements a simple quiz app where users are asked a series of questions and given a limited amount of time to answer each one. The quiz app is implemented using object-oriented programming principles and makes use of an UI object to handle interactions with the DOM.

## Overview

The code consists of the following JavaScript files:

- `app.js`: This is the main JavaScript file that initializes the quiz and handles user interactions.
- `quiz.js`: This file defines the Quiz object, which stores the questions and correct answers and provides methods for getting questions and checking answers.
- `ui.js`: This file defines the UI object, which handles interactions with the DOM and displays questions, answers, and score.

### App

This is a quiz app built with JavaScript. The user can select one of the four answer options for each question. The app tracks the user's progress and displays the score at the end of the quiz.

The app includes a timer to limit the amount of time users have to answer each question. If the user does not answer the question within the time limit, the app automatically moves to the next question.

The UI of the app is built with HTML and CSS, and it includes several elements, such as buttons, progress bars, and icons. These elements are manipulated through JavaScript using an instance of the UI class.

### Quiz

The Quiz object is defined in the `quiz.js` file. The object consists of an array of `Question` objects, each of which has a `question` property and a `correctAnswer` property. The `Quiz` object has a `questionIndex` property that keeps track of the current question being displayed, and a `numberOfcorrectAnswer` property that keeps track of the number of correct answers given by the user.

The `Quiz` object has method of `getQuestions()`. This method returns the current question being displayed.

### UI Class

The UI class includes several methods that are used to manipulate the UI of the app, such as showing the question, updating the score, and adding icons.

The constructor of the UI class includes several properties that store references to elements in the HTML, such as the quiz box, score box, and option list.

The methods in the UI class use these properties to manipulate the elements in the HTML. For example, the `showQuestion()` method uses the `question` parameter to update the text content of the question element in the HTML.

The UI class also includes several properties that store HTML code for icons used in the app, such as the correct and incorrect icons. These properties are used in the `optionSelected()` method to add icons to the answer options when the user selects an option.

## Technologies Used

- HTML
- CSS
- Bootstrap 5
- JavaScript

## Outcome

This project helped me improve my skills in JavaScript programming and gain more experience in developing interactive web applications. Through building this quiz application, I learned how to work with classes, create and manipulate HTML elements dynamically using JavaScript, and manage user interactions through event handling. I also learned how to work with timers, which allowed me to implement a countdown timer for each question and a progress bar to visualize the remaining time. Additionally, I improved my understanding of CSS styling, especially with respect to using flexbox and grid to create responsive layouts.

## What I learned from this project

- How to create a JavaScript quiz application with a timer and progress bar
- How to use object-oriented programming in JavaScript to create modular and reusable code
- How to manipulate the Document Object Model (DOM) with JavaScript to create dynamic and interactive web pages
- How to use JavaScript to add event listeners and respond to user input
- How to use setInterval and clearInterval functions to create a timer and progress bar
- How to use CSS to style and layout web pages
- How to use Git and GitHub to version control and collaborate on code projects

## Credits

- [Komple Uygulamalı Web Geliştirme Eğitimi](https://www.udemy.com/course/komple-web-developer-kursu/ 'https://www.udemy.com/course/komple-web-developer-kursu/') Udemy course by [Sadık Turan](https://www.linkedin.com/in/sadikturan/ 'https://www.linkedin.com/in/sadikturan/')
