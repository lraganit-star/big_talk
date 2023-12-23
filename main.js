const questions = require("./questions.json");
const amountOfQuestions = questions.length;

function randomquestion() {
  const randomValue = Math.floor(Math.random() * amountOfQuestions);
  return questions[randomValue];
}

console.log(randomquestion());
