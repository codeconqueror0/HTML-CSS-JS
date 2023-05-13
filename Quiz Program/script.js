let question = document.querySelector(".question");
let questionNumber = 1;
let btnA = document.querySelector(".btnA");
let btnB = document.querySelector(".btnB");
let btnC = document.querySelector(".btnC");
let btnD = document.querySelector(".btnD");
let previous = document.getElementsByClassName("previousQuestion")[0];
let next = document.getElementsByClassName("nextQuestion")[0];
let trueAnswers = 0;
let falseAnswers = 0;

const questions = [
    {
      question: "What is the capital of Turkey?",
      choices: ["Ankara", "Istanbul", "Izmir", "Bursa"],
      answer: "Ankara"
    },
    {
      question: "What is the largest continent?",
      choices: ["Africa", "Asia", "Europe", "North America"],
      answer: "Asia"
    },
    {
      question: "What is the tallest mammal?",
      choices: ["Giraffe", "Elephant", "Rhino", "Hippo"],
      answer: "Giraffe"
    },
    {
      question: "What is the currency of Japan?",
      choices: ["Dollar", "Euro", "Pound", "Yen"],
      answer: "Yen"
    }
  ];

function showQuestion() {
    question.textContent = questions[questionNumber].question;
    btnA.textContent = "A) " + questions[questionNumber].choices[0];
    btnB.textContent = "B) " + questions[questionNumber].choices[1];
    btnC.textContent = "C) " + questions[questionNumber].choices[2];
    btnD.textContent = "D) " + questions[questionNumber].choices[3];
}

next.addEventListener("click", () => {
  questionNumber++;
  if (questionNumber >= questions.length) {
    questionNumber = questions.length - 1;
  }
  showQuestion();
  clearAnswerButtons();
  console.log(questionNumber);
  question.textContent = questions[questionNumber].question;
});

previous.addEventListener("click", () => {
  questionNumber--;
  if (questionNumber < 0) {
    questionNumber = 0;
  }
  showQuestion();
  clearAnswerButtons();
  console.log(questionNumber);
  question.textContent = questions[questionNumber].question;
});

btnA.addEventListener("click", () => {
    if (questions[questionNumber].choices[0] === questions[questionNumber].answer) {
      btnA.classList.add("correct");
      trueAnswers++;
    } else {
      btnA.classList.add("wrong");
      falseAnswers++;
    }
    updateAnswerCounts();
  });
  
  btnB.addEventListener("click", () => {
    if (questions[questionNumber].choices[1] === questions[questionNumber].answer) {
      btnB.classList.add("correct");
      trueAnswers++;
    } else {
      btnB.classList.add("wrong");
      falseAnswers++;
    }
    updateAnswerCounts();
  });
  
  btnC.addEventListener("click", () => {
    if (questions[questionNumber].choices[2] === questions[questionNumber].answer) {
      btnC.classList.add("correct");
      trueAnswers++;
    } else {
      btnC.classList.add("wrong");
      falseAnswers++;
    }
    updateAnswerCounts();
  });
  
  btnD.addEventListener("click", () => {
    if (questions[questionNumber].choices[3] === questions[questionNumber].answer) {
      btnD.classList.add("correct");
      trueAnswers++;
    } else {
      btnD.classList.add("wrong");
      falseAnswers++;
    }
    updateAnswerCounts();
  });

  function updateAnswerCounts() {
    const trueAnswersElement = document.querySelector(".trueAnswers");
    const falseAnswersElement = document.querySelector(".falseAnswers");
  
    trueAnswersElement.textContent = `True answers: ${trueAnswers}`;
    falseAnswersElement.textContent = `False answers: ${falseAnswers}`;
  }
  function clearAnswerButtons() {
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach(button => {
      button.classList.remove("correct");
      button.classList.remove("wrong");
    });
  }
  




