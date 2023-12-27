const questions = require("./questions.json");
const amountOfQuestions = questions.length;

function randomQuestion() {
  const randomValue = Math.floor(Math.random() * amountOfQuestions);
  return questions[randomValue];
}

const visibleQuestion = document.getElementsByClassName("visible-question");
visibleQuestion.innterHTML = randomQuestion();
console.log(visibleQuestions);
