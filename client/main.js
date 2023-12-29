fetch("/data")
  .then((response) => response.json())
  .then((data) => {
    const visibleQuestions =
      document.getElementsByClassName("visible-question");
    if (visibleQuestions.length > 0) {
      visibleQuestions[0].innerHTML = data[0];
      console.log(data[0]);
    } else {
      console.log('No elements with class "visible-question" found.');
    }
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
