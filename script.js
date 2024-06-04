const container = document.querySelector(".container");

fetch(
  `https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple`
)
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw "There is an error";
    }
  })
  .then((data) => {
    console.log(data.results);
    const questionsData = data.results;
    const html = `<p class="question">${questionsData[0].question}</p>
    <div class="answers">
      <button class="ansA">${questionsData[0].correct_answer}</button>
      <button class="ansB">${questionsData[0].incorrect_answers[0]}</button>
      <button class="ansC">${questionsData[0].incorrect_answers[1]}</button>
      <button class="ansD">${questionsData[0].incorrect_answers[2]}</button>
    </div>`;

    container.insertAdjacentHTML("beforeend", html);

    const question = document.querySelector(".question");
    const answerA = document.querySelector(".ansA");
    const answerB = document.querySelector(".ansB");
    const answerC = document.querySelector(".ansC");
    const answerD = document.querySelector(".ansD");

    answerA.addEventListener("click", function () {
      answerA.style.backgroundColor = "#00FF00";
      answerA.style.color = "#FFFFFF";
      question.style.backgroundColor = "#00FF00";
      question.style.color = "#FFFFFF";
      answerB.style.backgroundColor = "rgb(241, 240, 237)";
      answerC.style.backgroundColor = "rgb(241, 240, 237)";
      answerD.style.backgroundColor = "rgb(241, 240, 237)";
      answerB.style.color = "#000000";
      answerC.style.color = "#000000";
      answerD.style.color = "#000000";
    });

    answerB.addEventListener("click", function () {
      answerB.style.backgroundColor = "#FF0000";
      answerB.style.color = "#FFFFFF";
      question.style.backgroundColor = "#FF0000";
      question.style.color = "#FFFFFF";
      answerA.style.backgroundColor = "rgb(241, 240, 237)";
      answerC.style.backgroundColor = "rgb(241, 240, 237)";
      answerD.style.backgroundColor = "rgb(241, 240, 237)";
      answerA.style.color = "#000000";
      answerC.style.color = "#000000";
      answerD.style.color = "#000000";
    });

    answerC.addEventListener("click", function () {
      answerC.style.backgroundColor = "#FF0000";
      answerC.style.color = "#FFFFFF";
      question.style.backgroundColor = "#FF0000";
      question.style.color = "#FFFFFF";
      answerA.style.backgroundColor = "rgb(241, 240, 237)";
      answerB.style.backgroundColor = "rgb(241, 240, 237)";
      answerD.style.backgroundColor = "rgb(241, 240, 237)";
      answerB.style.color = "#000000";
      answerA.style.color = "#000000";
      answerD.style.color = "#000000";
    });

    answerD.addEventListener("click", function () {
      answerD.style.backgroundColor = "#FF0000";
      answerD.style.color = "#FFFFFF";
      question.style.backgroundColor = "#FF0000";
      question.style.color = "#FFFFFF";
      answerA.style.backgroundColor = "rgb(241, 240, 237)";
      answerC.style.backgroundColor = "rgb(241, 240, 237)";
      answerB.style.backgroundColor = "rgb(241, 240, 237)";
      answerB.style.color = "#000000";
      answerC.style.color = "#000000";
      answerA.style.color = "#000000";
    });
  });
