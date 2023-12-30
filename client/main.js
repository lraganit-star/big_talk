// need to make this less copy pasta
// need to also create home page where user can choose which question set to use
const appContainer = document.getElementById("app");
const modalContainer = document.getElementById("modal");
const questionContainer = document.getElementById("questions");
let endpoint = "friends";

// function loadModal() {
//   //   questionContainer.style.display = "none";
//   modalContainer.style.display = "show";
//   document
//     .getElementById("big-talk")
//     .addEventListener("click", () => selectGroup("big_talk"));
//   document
//     .getElementById("fall-in-love")
//     .addEventListener("click", () => selectGroup("fall_in_love"));
//   document
//     .getElementById("friends")
//     .addEventListener("click", () => selectGroup("friends"));
// }

// function selectGroup(groupName) {
//   console.log("Group selected:", groupName);
//   endpoint = groupName;

//   if (modalContainer) {
//     questionContainer.style.display = "show";
//     // modalContainer.style.display = "none";
//   }
// }

// loadModal();

if (endpoint == "big_talk") {
  fetch("/big_talk")
    .then((response) => response.json())
    .then((data) => {
      let questionNumber = 0;
      document.getElementById("progress-bar").max = data.length - 1;
      const visibleQuestions =
        document.getElementsByClassName("visible-question");
      visibleQuestions[0].innerHTML = data[questionNumber];
      document
        .getElementById("question-number")
        .addEventListener("click", () => {
          questionNumber++;
          visibleQuestions[0].innerHTML = data[questionNumber];
          const v1 = document.getElementById("progress-bar").value;
          document.getElementById("progress-bar").value = v1 + 1;
        });
    })
    .catch((error) => console.error("Error:", error));
} else if (endpoint == "fall_in_love") {
  fetch("/fall_in_love")
    .then((response) => response.json())
    .then((data) => {
      let questionNumber = 0;
      document.getElementById("progress-bar").max = data.length - 1;
      const visibleQuestions =
        document.getElementsByClassName("visible-question");
      visibleQuestions[0].innerHTML = data[questionNumber];
      document
        .getElementById("question-number")
        .addEventListener("click", () => {
          questionNumber++;
          visibleQuestions[0].innerHTML = data[questionNumber];
          const v1 = document.getElementById("progress-bar").value;
          document.getElementById("progress-bar").value = v1 + 1;
        });
    })
    .catch((error) => console.error("Error:", error));
} else if (endpoint == "friends") {
  // has 145 questions
  fetch("/friends")
    .then((response) => response.json())
    .then((data) => {
      let questionNumber = 0;
      document.getElementById("progress-bar").max = data.length - 1;
      const visibleQuestions =
        document.getElementsByClassName("visible-question");
      visibleQuestions[0].innerHTML = data[questionNumber];
      document
        .getElementById("question-number")
        .addEventListener("click", () => {
          questionNumber++;
          visibleQuestions[0].innerHTML = data[questionNumber];
          const v1 = document.getElementById("progress-bar").value;
          document.getElementById("progress-bar").value = v1 + 1;
        });
    })
    .catch((error) => console.error("Error:", error));
}
