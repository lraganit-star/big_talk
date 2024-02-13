const appContainer: HTMLElement | null = document.getElementById("app");
const modalContainer: HTMLElement | null = document.getElementById("modal");
const questionContainer: HTMLElement | null = document.getElementById("questions");
const visibleQuestions: HTMLElement | null = document.getElementById("visible-question");
const progressBar: HTMLElement | null = document.getElementById("progress-bar");

let questionNumber: {big_talk: number, fall_in_love: number, friends: number} = { big_talk: 0, fall_in_love: 0, friends: 0 };

function loadModal() {
    if (questionContainer == null) {
        return;
    }
    questionContainer.style.display = "none";

    const questionNumbers: {big_talk: number, fall_in_love: number, friends: number} = JSON.parse(localStorage.getItem("questionNumbers"))

  if (questionNumbers) {
    questionNumber = questionNumbers;
  }

  if (document.getElementById("big-talk-progress") !== null){
    document.getElementById("big-talk-progress").value =
    questionNumber["big_talk"];
  }
  
  document.getElementById("fall-in-love-progress").value =
    questionNumber["fall_in_love"];
  document.getElementById("friends-progress").value = questionNumber["friends"];

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
  endpoint = groupName;

  if (modalContainer) {
    questionContainer.style.display = "block";
    modalContainer.style.display = "none";
  }
  askQuestion(groupName);
}

function mainAppFunctionality(data, groupName) {
  progressBar.max = data.length - 1;
  visibleQuestions.innerHTML = "";
  visibleQuestions.innerHTML = data[questionNumber[groupName]];
  progressBar.value = questionNumber[groupName];
  nextQuestion(data, groupName);
  previousQuestion(data, groupName);
}

function nextQuestion(data, groupName) {
  document.getElementById("next-question").addEventListener("click", () => {
    questionNumber[groupName]++;
    visibleQuestions.innerHTML = "";
    visibleQuestions.innerHTML = data[questionNumber[groupName]];
    progressBar.value = questionNumber[groupName];
    localStorage.setItem("questionNumbers", JSON.stringify(questionNumber));
  });
}

function previousQuestion(data, groupName) {
  document.getElementById("previous-question").addEventListener("click", () => {
    questionNumber[groupName]--;
    visibleQuestions.innerHTML = "";
    visibleQuestions.innerHTML = data[questionNumber[groupName]];
    progressBar.value = questionNumber[groupName];
    localStorage.setItem("questionNumbers", JSON.stringify(questionNumber));
  });
}

function askQuestion(endpoint) {
  if (endpoint == "big_talk") {
    document.getElementById("question-group").innerHTML = "Big Talk Questions";

    fetch("/big_talk")
      .then((response) => response.json())
      .then((data) => {
        mainAppFunctionality(data, "big_talk");
      })
      .catch((error) => console.error("Error:", error));
  } else if (endpoint == "fall_in_love") {
    document.getElementById("question-group").innerHTML =
      "36 Questions to Fall in Love";
    fetch("/fall_in_love")
      .then((response) => response.json())
      .then((data) => {
        mainAppFunctionality(data, "fall_in_love");
      })
      .catch((error) => console.error("Error:", error));
  } else if (endpoint == "friends") {
    document.getElementById("question-group").innerHTML =
      "Questions to ask your friends";
    fetch("/friends")
      .then((response) => response.json())
      .then((data) => {
        mainAppFunctionality(data, "friends");
      })
      .catch((error) => console.error("Error:", error));
  }
}

loadModal();
