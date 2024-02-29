var appContainer = document.getElementById("app");
var modalContainer = document.getElementById("modal");
var questionContainer = document.getElementById("questions");
var visibleQuestions = document.getElementById("visible-question");
var progressBar = document.getElementById("progress-bar");
var bigTalkProgress = document.getElementById("big-talk-progress");
var bigTalkContainer = document.getElementById("big-talk-container");
var fallInLoveProgress = document.getElementById("fall-in-love-progress");
var fallInLoveContainer = document.getElementById("fall-in-love-container");
var friendsProgress = document.getElementById("friends-progress");
var friendsContainer = document.getElementById("friends-container");
var nextQuestionElement = document.getElementById("next-question");
var previousQuestionElement = document.getElementById("previous-question");
var questionGroup = document.getElementById("question-group");
var storedQuestionNumbersString = localStorage.getItem("questionNumbers");
var questionNumber = { big_talk: 0, fall_in_love: 0, friends: 0 };

function loadModal() {
  if (storedQuestionNumbersString !== null) {
    questionNumber = JSON.parse(storedQuestionNumbersString);
  }
  if (questionContainer !== null) {
    questionContainer.style.display = "none";
  }
  // I'm not too sure about the .toString() right now
  if (bigTalkProgress !== null && bigTalkProgress instanceof HTMLInputElement) {
    bigTalkProgress.value = questionNumber["big_talk"].toString();
  }
  if (bigTalkContainer !== null) {
    bigTalkContainer.addEventListener("click", function () {
      return selectGroup("big_talk");
    });
  }
  if (
    fallInLoveProgress !== null &&
    fallInLoveProgress instanceof HTMLInputElement
  ) {
    fallInLoveProgress.value = questionNumber["fall_in_love"].toString();
  }
  if (fallInLoveContainer !== null) {
    fallInLoveContainer.addEventListener("click", function () {
      return selectGroup("fall_in_love");
    });
  }
  if (friendsProgress !== null && friendsProgress instanceof HTMLInputElement) {
    friendsProgress.value = questionNumber["friends"].toString();
  }
  if (friendsContainer !== null) {
    friendsContainer.addEventListener("click", function () {
      return selectGroup("friends");
    });
  }
}
function selectGroup(groupName) {
  //   const endpoint = groupName;
  if (modalContainer !== null && questionContainer !== null) {
    questionContainer.style.display = "block";
    modalContainer.style.display = "none";
  }
  askQuestion(groupName);
}
function mainAppFunctionality(data, groupName) {
  if (visibleQuestions == null || progressBar == null) {
    return;
  }
  visibleQuestions.innerHTML = "";
  visibleQuestions.innerHTML = data[questionNumber[groupName]];
  if (progressBar instanceof HTMLInputElement) {
    progressBar.max = (data.length - 1).toString();
    progressBar.value = questionNumber[groupName].toString();
  }
  nextQuestion(data, groupName);
  previousQuestion(data, groupName);
}
function nextQuestion(data, groupName) {
  if (nextQuestionElement !== null) {
    nextQuestionElement.addEventListener("click", function () {
      if (visibleQuestions == null || progressBar == null) {
        return;
      }
      questionNumber[groupName]++;
      visibleQuestions.innerHTML = "";
      visibleQuestions.innerHTML = data[questionNumber[groupName]];
      if (progressBar instanceof HTMLInputElement) {
        progressBar.value = questionNumber[groupName];
      }
      localStorage.setItem("questionNumbers", JSON.stringify(questionNumber));
    });
  }
}
function previousQuestion(data, groupName) {
  if (previousQuestionElement !== null) {
    previousQuestionElement.addEventListener("click", function () {
      if (visibleQuestions == null || progressBar == null) {
        return;
      }
      questionNumber[groupName]--;
      visibleQuestions.innerHTML = "";
      visibleQuestions.innerHTML = data[questionNumber[groupName]];
      if (progressBar instanceof HTMLInputElement) {
        progressBar.value = questionNumber[groupName];
      }
      localStorage.setItem("questionNumbers", JSON.stringify(questionNumber));
    });
  }
}
function askQuestion(endpoint) {
  if (endpoint == "big_talk" && questionGroup !== null) {
    questionGroup.innerHTML = "Big Talk Questions";
    fetch("/big_talk")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        mainAppFunctionality(data, "big_talk");
      })
      .catch(function (error) {
        return console.error("Error:", error);
      });
  } else if (endpoint == "fall_in_love" && questionGroup !== null) {
    questionGroup.innerHTML = "36 Questions to Fall in Love";
    fetch("/fall_in_love")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        mainAppFunctionality(data, "fall_in_love");
      })
      .catch(function (error) {
        return console.error("Error:", error);
      });
  } else if (endpoint == "friends" && questionGroup !== null) {
    questionGroup.innerHTML = "Questions to ask your friends";
    fetch("/friends")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        mainAppFunctionality(data, "friends");
      })
      .catch(function (error) {
        return console.error("Error:", error);
      });
  }
}
loadModal();
