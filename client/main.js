// need to make this less copy pasta and have to make it to where HTML isn't hard coded for progress bar
// need to also create home page where user can choose which question set to use
if (endpoint == "big_talk") {
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
} else if (endpoint == "fall_in_love") {
  // has 36 questions
  fetch("/fall_in_love")
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
} else if (endpoint == "friends") {
  // has 145 questions
  fetch("/friends")
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
}
