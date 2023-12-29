fetch("/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));

// const amountOfQuestions = questionJSON.length;

// function randomQuestion() {
//   const randomValue = Math.floor(Math.random() * amountOfQuestions);
//   return questionJSON[randomValue];
// }

// const visibleQuestion = document.getElementsByClassName("visible-question");
// visibleQuestion.innterHTML = randomQuestion();
// console.log(visibleQuestions);
