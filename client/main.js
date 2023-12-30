// need to make this less copy pasta
// need to also create home page where user can choose which question set to use
const appContainer = document.getElementById("app");
const modalContainer = document.getElementById("modal");
const questionContainer = document.getElementById("questions");
let endpoint = "big_talk";

function loadModal() {
  questionContainer.style.display = "none";
  document
    .getElementById("big-talk")
    .addEventListener("click", () => selectGroup("big_talk"));
  document
    .getElementById("fall-in-love")
    .addEventListener("click", () => selectGroup("fall_in_love"));
  document
    .getElementById("friends")
    .addEventListener("click", () => selectGroup("friends"));
}

function selectGroup(groupName) {
  console.log("Group selected:", groupName);
  endpoint = groupName;

  if (modalContainer) {
    questionContainer.style.display = "block";
    modalContainer.style.display = "none";
  }
}

loadModal();

if (endpoint == "big_talk") {
  document.getElementsByClassName("question-group")[0].innerHTML =
    "Big Talk Questions";
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
          console.log("big_talk");
          questionNumber++;
          visibleQuestions[0].innerHTML = data[questionNumber];
          const v1 = document.getElementById("progress-bar").value;
          document.getElementById("progress-bar").value = v1 + 1;
        });
    })
    .catch((error) => console.error("Error:", error));
} else if (endpoint == "fall_in_love") {
  document.getElementsByClassName("question-group")[0].innerHTML =
    "36 Questions to Fall in Love";
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
          console.log("fall_in_love");
          questionNumber++;
          visibleQuestions[0].innerHTML = data[questionNumber];
          const v1 = document.getElementById("progress-bar").value;
          document.getElementById("progress-bar").value = v1 + 1;
        });
    })
    .catch((error) => console.error("Error:", error));
} else if (endpoint == "friends") {
  document.getElementsByClassName("question-group")[0].innerHTML =
    "Questions to ask your friends";
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
          console.log("friends");
          questionNumber++;
          visibleQuestions[0].innerHTML = data[questionNumber];
          const v1 = document.getElementById("progress-bar").value;
          document.getElementById("progress-bar").value = v1 + 1;
        });
    })
    .catch((error) => console.error("Error:", error));
}
