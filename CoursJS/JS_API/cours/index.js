// ========== (Ancienne Méthode) XMLHTTPRequest ========== //

function reqListener() {
  //console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
//req.open("get", "data.txt", true);
//req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

// ========== FETCH ========== //

/* fetch("monlien", "object d'options")
  .then((response) => {
    // Traitement de la réponse...
  })
  .catch((err) => console.log(err)); */

fetch("data.txt")
  .then((res) => res.text())
  .then((data) => console.log(data));

fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

// ========== OPTIONS DE REQUETE ========== //

const myHeaders = new Headers();
const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

//fetch("data.json", init).then((res) => console.log(res));

// ========== C R U D ========== //
// Create (POST), Read (GET), Update (PUT), Delete (DELETE)

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch",
    message: "Yo les gens !",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyée")
  );
});

// ========== ASYNCHRONE ========== //

// Timeout
setTimeout(() => {
  console.log("test");
}, 2000);

// Promise
//fetch("monlien").then((res) => res);

// Async / Await
/* const fetchData = async () => {
  await fetch("monlien");
  // Attend que le await soit executé avant de faire la suite.

  executeFonction();
};
 */

// ========== LE JSON ========== //

// Méthode .json() => Méthode qui s'auto-résout en renvoyant le Body de la requête.

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // Stringify => convertit en JSON
    let settings = JSON.stringify(data);
    // Parse => transforme json en object js
    console.log(JSON.parse(settings));
  });

// ========== LES WEB API ========== //

// -- Client Storage - Local Storage -- //
localStorage.data = "Je stock la data";
//document.body.textContent = localStorage.data;

localStorage.removeItem("data");

// On ne peut passer uniquement des chaines de caractères.
localStorage.user = "Denis";

// Pour passer un objet :
const obj = {
  Nom: "Denis",
  age: 22,
};

localStorage.user = JSON.stringify(obj);
console.log(JSON.parse(localStorage.user));

// -- Client Storage - Session Storage -- //
//sessionStorage.dataSettings = "55px";
