var appContainer = document.getElementById("app");
var modalContainer = document.getElementById("modal");
var questionContainer = document.getElementById("questions");
var visibleQuestions = document.getElementById("visible-question");
var progressBar = document.getElementById("progress-bar");
var questionNumber = { big_talk: 0, fall_in_love: 0, friends: 0 };
function loadModal() {
    // if (questionContainer == null) {
    //     return;
    // }
    // if (questionContainer != null) {
    //     questionContainer.style.display = "none";
    // }
    questionContainer.style.display = "none";
    var questionNumbers = JSON.parse(localStorage.getItem("questionNumbers"));
    if (questionNumbers) {
        questionNumber = questionNumbers;
    }
    document.getElementById("big-talk-progress").value =
        questionNumber["big_talk"];
    document.getElementById("fall-in-love-progress").value =
        questionNumber["fall_in_love"];
    document.getElementById("friends-progress").value = questionNumber["friends"];
    document
        .getElementById("big-talk-container")
        .addEventListener("click", function () { return selectGroup("big_talk"); });
    document
        .getElementById("fall-in-love-container")
        .addEventListener("click", function () { return selectGroup("fall_in_love"); });
    document
        .getElementById("friends-container")
        .addEventListener("click", function () { return selectGroup("friends"); });
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
    document.getElementById("next-question").addEventListener("click", function () {
        questionNumber[groupName]++;
        visibleQuestions.innerHTML = "";
        visibleQuestions.innerHTML = data[questionNumber[groupName]];
        progressBar.value = questionNumber[groupName];
        localStorage.setItem("questionNumbers", JSON.stringify(questionNumber));
    });
}
function previousQuestion(data, groupName) {
    document.getElementById("previous-question").addEventListener("click", function () {
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
            .then(function (response) { return response.json(); })
            .then(function (data) {
            mainAppFunctionality(data, "big_talk");
        })
            .catch(function (error) { return console.error("Error:", error); });
    }
    else if (endpoint == "fall_in_love") {
        document.getElementById("question-group").innerHTML =
            "36 Questions to Fall in Love";
        fetch("/fall_in_love")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            mainAppFunctionality(data, "fall_in_love");
        })
            .catch(function (error) { return console.error("Error:", error); });
    }
    else if (endpoint == "friends") {
        document.getElementById("question-group").innerHTML =
            "Questions to ask your friends";
        fetch("/friends")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            mainAppFunctionality(data, "friends");
        })
            .catch(function (error) { return console.error("Error:", error); });
    }
}
loadModal();
