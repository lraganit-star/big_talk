interface QuestionObject {
    big_talk: number; 
    fall_in_love: number; 
    friends: number;
}

const appContainer: HTMLElement | null = document.getElementById("app");
const modalContainer: HTMLElement | null = document.getElementById("modal");
const questionContainer: HTMLElement | null = document.getElementById("questions");
const visibleQuestions: HTMLElement | null = document.getElementById("visible-question");
const progressBar: HTMLElement | null = document.getElementById("progress-bar");

const bigTalkProgress: HTMLElement | null = document.getElementById("big-talk-progress")
const bigTalkContainer: HTMLElement | null = document.getElementById("big-talk-container")
const fallInLoveProgress: HTMLElement | null = document.getElementById("fall-in-love-progress")
const fallInLoveContainer: HTMLElement | null = document.getElementById("fall-in-love-container")
const friendsProgress: HTMLElement | null = document.getElementById("friends-progress")
const friendsContainer: HTMLElement | null = document.getElementById("friends-container")
const nextQuestionElement: HTMLElement | null = document.getElementById("next-question")
const previousQuestionElement: HTMLElement | null = document.getElementById("previous-question")
const questionGroup: HTMLElement | null = document.getElementById("question-group")

const storedQuestionNumbersString: string | null = localStorage.getItem("questionNumbers")

let questionNumber: QuestionObject = { big_talk: 0, fall_in_love: 0, friends: 0 };

function loadModal() {
    
    if (storedQuestionNumbersString !== null){
        questionNumber = JSON.parse(storedQuestionNumbersString)
    }

    if (questionContainer !== null) {
        questionContainer.style.display = "none";
    }

    // I'm not too sure about the .toString() right now
    if (bigTalkProgress !== null && bigTalkProgress instanceof HTMLInputElement){
        bigTalkProgress.value = questionNumber["big_talk"].toString()
    }
    if (bigTalkContainer !== null){
        bigTalkContainer.addEventListener("click", () => selectGroup("big_talk"));
    }

    if (fallInLoveProgress !== null && fallInLoveProgress instanceof HTMLInputElement){
        fallInLoveProgress.value = questionNumber["fall_in_love"].toString()
    }
    if (fallInLoveContainer !== null){
        fallInLoveContainer.addEventListener("click", () => selectGroup("fall_in_love"));
    }

    if (friendsProgress !== null && friendsProgress instanceof HTMLInputElement){
        friendsProgress.value = questionNumber["friends"].toString()
    }
    if (friendsContainer !== null){
        friendsContainer.addEventListener("click", () => selectGroup("friends"));
    }
}

function selectGroup(groupName) {
  if (modalContainer !== null && questionContainer !== null) {
    questionContainer.style.display = "block";
    modalContainer.style.display = "none";
  }
  askQuestion(groupName);
  return questionContainer?.style.display
}

function mainAppFunctionality(data, groupName) {
    if (visibleQuestions == null || progressBar == null){
        return;
      }
  
  visibleQuestions.innerHTML = "";
  visibleQuestions.innerHTML = data[questionNumber[groupName]];

  if (progressBar instanceof HTMLInputElement){
    progressBar.max = (data.length - 1).toString();
    progressBar.value = questionNumber[groupName].toString();
}

  nextQuestion(data, groupName);
  previousQuestion(data, groupName);
  
  if (progressBar instanceof HTMLInputElement){
    return progressBar.value
  }
}

function nextQuestion(data, groupName) {
    if (nextQuestionElement !== null){
        nextQuestionElement.addEventListener("click", () => {
            if (visibleQuestions == null || progressBar == null){
                return;
              }
            
            questionNumber[groupName]++;
            visibleQuestions.innerHTML = "";
            visibleQuestions.innerHTML = data[questionNumber[groupName]];

            if (progressBar instanceof HTMLInputElement){
                progressBar.value = questionNumber[groupName];
            }

            localStorage.setItem("questionNumbers", JSON.stringify(questionNumber));

            if (progressBar instanceof HTMLInputElement){
              return progressBar.value
            }
          });
    }
}

function previousQuestion(data, groupName) {
    if (previousQuestionElement !== null){
        previousQuestionElement.addEventListener("click", () => {
            if (visibleQuestions == null || progressBar == null){
                return;
              }

            questionNumber[groupName]--;
            visibleQuestions.innerHTML = "";
            visibleQuestions.innerHTML = data[questionNumber[groupName]];

            if (progressBar instanceof HTMLInputElement){
                progressBar.value = questionNumber[groupName];
            }
            
            localStorage.setItem("questionNumbers", JSON.stringify(questionNumber));

            if (progressBar instanceof HTMLInputElement){
              return progressBar.value
            }
          });
    }
}

function askQuestion(endpoint) {
  if (endpoint == "big_talk" && questionGroup !== null) {
    questionGroup.innerHTML = "Big Talk Questions";

    fetch("/big_talk")
      .then((response) => response.json())
      .then((data) => {
        mainAppFunctionality(data, "big_talk");
      })
      .catch((error) => console.error("Error:", error));

  } else if (endpoint == "fall_in_love" && questionGroup !== null) {
    questionGroup.innerHTML =
      "36 Questions to Fall in Love";
    fetch("/fall_in_love")
      .then((response) => response.json())
      .then((data) => {
        mainAppFunctionality(data, "fall_in_love");
      })
      .catch((error) => console.error("Error:", error));

  } else if (endpoint == "friends" && questionGroup !== null) {
    questionGroup.innerHTML =
      "Questions to ask your friends";
    fetch("/friends")
      .then((response) => response.json())
      .then((data) => {
        mainAppFunctionality(data, "friends");
      })
      .catch((error) => console.error("Error:", error));
  }

    return(questionGroup?.innerHTML)

}

loadModal();
