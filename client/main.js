fetch("/big_talk")
  .then((response) => response.json())
  .then((data) => {
    let questionNumber = 0;
    addEventListener("click", () => {
      const visibleQuestions =
        document.getElementsByClassName("visible-question");
      questionNumber++;
      visibleQuestions[0].innerHTML = data[questionNumber];
    });
  })
  .catch((error) => console.error("Error:", error));
