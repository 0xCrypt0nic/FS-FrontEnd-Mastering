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

// MOUSE EVENTS
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "black";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});
