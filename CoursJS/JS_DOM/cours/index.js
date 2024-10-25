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

// =================== ADDEVENTLISTENER vs ONCLICK ===================
//document.body.onclick = () => {
//  console.log("click");
//};

document.body.addEventListener(
  "click",
  () => {
    console.log("Click 1");
  },
  false
);

document.body.addEventListener(
  "click",
  () => {
    console.log("Click 2");
  },
  true
);

// En mettant un 3e paramètre, booléen à True, on utilise le usecapture
// cela permet de prioriser l'évènement.

// =================== STOP PROPAGATION ===================

/*questionContainer.addEventListener("click", (e) => {
  alert("test");
  e.stopPropagation();
});*/

// Pour retirer un event => removeEventListener.

// =================== BOM - Brower Object Model ===================

console.log(window.innerHeight);
console.log(window.scrollY);

// window.open("http://google.com", "cours js", "height=600, width=800");
// window.close(); // Ferme la fenêtre

// Confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

// Prompt
btn1.addEventListener("click", () => {
  let rep = prompt("Entrez votre nom !");

  questionContainer.innerHTML += `<h3>Bravo ${rep} ! </h3>`;
});

// SetTimeout
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

/* Set Interval
let i = 0;
let interval = setInterval(() => {
  i++;
  document.body.innerHTML += `<div class='box'><h2>Nouvelle Boite ${i}</h2></div>`;
}, 1000);*/

document.body.addEventListener("click", () => {
  clearInterval(interval);
});

/*document.body.addEventListener("click", (e) => {
  e.target.remove();
});*/

// Objet Location
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
//location.replace("http://google.fr");

// Objet Navigator
console.log(navigator.userAgent);
console.log(navigator.geolocation);

// History
console.log(history);

// =================== Set Property ===================
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
