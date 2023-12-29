fetch("/big_talk")
  .then((response) => response.json())
  .then((data) => {
    let questionNumber = 0;
    addEventListener("click", () => {
      const visibleQuestions =
        document.getElementsByClassName("visible-question");
      questionNumber++;
      visibleQuestions[0].innerHTML = data[questionNumber];

      let v1 = document.getElementById("p1").value;
      document.getElementById("p1").value = v1 + 1;
    });
  })
  .catch((error) => console.error("Error:", error));
