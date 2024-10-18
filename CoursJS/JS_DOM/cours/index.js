// SELECTEURS
//document.querySelector("h4").style.background = "yellow";
//const baliseHTML = document.querySelector("h4");
//baliseHTML.style.background = "blue";

// CLICK EVENT
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.style.color = "green";
  response.classList.add("show-response");
});

btn2.addEventListener("click", () => {
  response.style.color = "red";
  response.classList.add("show-response");
});
