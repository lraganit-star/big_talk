let questionNumber = 0;

// // figure out how to get increase the question number when button is clicked
// document.getElementsByClassName("question-number")[0].onclick = function () {
//   questionNumber++;
// };

fetch("/big_talk")
  .then((response) => response.json())
  .then((data) => {
    const visibleQuestions =
      document.getElementsByClassName("visible-question");
    if (visibleQuestions.length > 0) {
      visibleQuestions[0].innerHTML = data[questionNumber];
      console.log(data[questionNumber]);
    } else {
      console.log('No elements with class "visible-question" found.');
    }
  })
  .catch((error) => console.error("Error:", error));
