// need to make this less copy pasta
// dark mode
// progress bar on modals
// button for whether user has answered question (and saved with local storage)
// question list

const appContainer = document.getElementById("app");
const modalContainer = document.getElementById("modal");
const questionContainer = document.getElementById("questions");
const visibleQuestions = document.getElementById("visible-question");
const progressBar = document.getElementById("progress-bar");

let questionNumber = { big_talk: 0, fall_in_love: 0, friends: 0 };

function loadModal() {
  questionContainer.style.display = "none";

  const questionNumbers = JSON.parse(localStorage.getItem("questionNumbers"));
  if (questionNumbers) {
    questionNumber = questionNumbers;
    console.log("local storage", questionNumber);
  }

  console.log("fall in love value", questionNumber["friends"]);

  document.getElementById("big-talk-progress").value =
    questionNumber["big_talk"];
  document.getElementById("friends-progress").value = questionNumber["friends"];
  document.getElementById("fall-in-love-progress").value =
    questionNumber["fall_in_love"];

  document
    .getElementById("big-talk-container")
    .addEventListener("click", () => selectGroup("big_talk"));
  document
    .getElementById("fall-in-love-container")
    .addEventListener("click", () => selectGroup("fall_in_love"));
  document
    .getElementById("friends-container")
    .addEventListener("click", () => selectGroup("friends"));
}

function selectGroup(groupName) {
  console.log("Group selected:", groupName);
  endpoint = groupName;

  if (modalContainer) {
    questionContainer.style.display = "block";
    modalContainer.style.display = "none";
  }

  askQuestion(groupName);
}

function askQuestion(endpoint) {
  if (endpoint == "big_talk") {
    document.getElementsByClassName("question-group")[0].innerHTML =
      "Big Talk Questions";

    fetch("/big_talk")
      .then((response) => response.json())
      .then((data) => {
        progressBar.max = data.length - 1;
        visibleQuestions.innerHTML = data[questionNumber["big_talk"]];
        progressBar.value = questionNumber["big_talk"];
        document
          .getElementById("question-number")
          .addEventListener("click", () => {
            questionNumber["big_talk"]++;
            visibleQuestions.innerHTML = data[questionNumber["big_talk"]];
            progressBar.value = questionNumber["big_talk"];
            localStorage.setItem(
              "questionNumbers",
              JSON.stringify(questionNumber)
            );
          });
        console.log(questionNumber);
      })
      .catch((error) => console.error("Error:", error));
  } else if (endpoint == "fall_in_love") {
    document.getElementsByClassName("question-group")[0].innerHTML =
      "36 Questions to Fall in Love";

    fetch("/fall_in_love")
      .then((response) => response.json())
      .then((data) => {
        progressBar.max = data.length - 1;
        visibleQuestions.innerHTML = data[questionNumber["fall_in_love"]];
        progressBar.value = questionNumber["fall_in_love"];
        document
          .getElementById("question-number")
          .addEventListener("click", () => {
            questionNumber["fall_in_love"]++;
            visibleQuestions.innerHTML = data[questionNumber["fall_in_love"]];
            progressBar.value = questionNumber["fall_in_love"];
            localStorage.setItem(
              "questionNumbers",
              JSON.stringify(questionNumber)
            );
            console.log(questionNumber);
          });
      })
      .catch((error) => console.error("Error:", error));
  } else if (endpoint == "friends") {
    document.getElementsByClassName("question-group")[0].innerHTML =
      "Questions to ask your friends";

    fetch("/friends")
      .then((response) => response.json())
      .then((data) => {
        progressBar.max = data.length - 1;
        visibleQuestions.innerHTML = data[questionNumber["friends"]];
        progressBar.value = questionNumber["friends"];
        document
          .getElementById("question-number")
          .addEventListener("click", () => {
            questionNumber["friends"]++;
            visibleQuestions.innerHTML = data[questionNumber["friends"]];
            progressBar.value = questionNumber["friends"];
            localStorage.setItem(
              "questionNumbers",
              JSON.stringify(questionNumber)
            );
            console.log(questionNumber);
          });
      })
      .catch((error) => console.error("Error:", error));
  }
}

loadModal();
