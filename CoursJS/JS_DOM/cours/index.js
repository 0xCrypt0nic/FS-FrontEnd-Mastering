// SELECTEURS
//document.querySelector("h4").style.background = "yellow";
//const baliseHTML = document.querySelector("h4");
//baliseHTML.style.background = "blue";

// ========================= CLICK EVENT =========================
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

// ========================= MOUSE EVENTS =========================
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

// ========================= KEY PRESS =========================

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const ring = (fileName) => {
  const audio = new Audio();
  audio.src = `./${fileName}.mp3`;
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "r") {
    ring("Enter");
  }
});

// ========================= SCROLL =========================
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// ========================= FORM EVENTS =========================

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4> Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

// ========================= LOAD EVENT =========================
window.addEventListener("load", () => {
  console.log("Document chargé");
});

// ========================= FOR EACH =========================
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
