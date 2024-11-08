// ====== Rappel pour les types de données ====== //
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // Type undefined car rien ne lui est attribué.

// ====== Les Tableaux ====== //
let array = ["Bordeaux", "Toulouse", "Nantes"];

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
//console.log(array2[4].nom);

// ====== Les Objets ====== //
let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJS"],
  admin: false,
};

objet.addresse = "22 rue du code";

//console.log(objet);
//console.log(objet.pseudo);
//console.log(objet.technos[2]);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 48,
    technos: ["Php", "React", "NodeJS"],
    admin: true,
  },
];

//console.log(data[2].pseudo);

// ====== Les Structures de contrôle ====== //

if (data[0].age > data[1].age) {
  console.log(`${data[0].pseudo} est plus âgé que ${data[1].pseudo}.`);
} else {
  // Valeur si fausse
}

// Boucle While
let w = 0;
while (w < 10) {
  w++;
  console.log(`La valeur de W est ${w}`);
}

// Boucle DoWhile
let d = 0;
do {
  d++;
  console.log(d);
} while (d < 5);

// Boucle For
for (const user of data) {
  //document.body.innerHTML += `<li>${user.pseudo}</li>`;
}

for (i = 0; i < data.length; i++) {
  //document.body.innerHTML += `<h2>${data[i].pseudo}</h2>`;
}

// Switch

document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

// ========== LES METHODES STRING ========== //

let string2 = "Javascript est un langage orienté objet";
console.log(typeof string2);
console.log(eval("1" + 2));
console.log(eval(parseInt("1") + 2));
console.log(isNaN(string));
console.log(string2.length);
console.log(string2[string2.length - 1]);
console.log(string2.indexOf("l"));

let newString = string2.slice(2);
console.log(newString);

console.log(string2.split(" "));

console.log(string2.toUpperCase());
console.log(string2.toLowerCase());

console.log(string2.replace("Javascript", "PHP"));

// ========== LES METHODES NUMBERS ========== //

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

console.log(number2.toFixed(2));
console.log(parseInt(numberString));
console.log(parseFloat(numberString));

// Math
console.log(Math.PI);
console.log(Math.round(4.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.pow(2, 7));
console.log(2 ** 7);
console.log(Math.sqrt(16));
console.log(Math.floor(Math.random() * 50));

// ========== LES METHODES ARRAY ========== //

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4);
//console.log(newArray);

//let newArray = [...array3, ...array4];
//console.log(newArray);

//console.log(array3.join(" - "));

//console.log(array3.slice(2));
//console.log(newArray.slice(2, 3));

//console.log(array3.indexOf("Php"));

//array3.forEach((language) => console.log(language));

//console.log(array3.every((language) => language == "Php"));
//console.log(array3.some((language) => language == "Php"));

//console.log(array3.shift());
//console.log(array3.pop());

//const restArray = array3.splice(1, 1, "C++");
//console.log(array3);

// ** IMPORTANT ** //
let arrayNumber = [4, 74, 28, 12, 1];
console.log(arrayNumber.reduce((x, y) => x + y));

arrayNumber.push(17);
console.log(arrayNumber);

// FILTER / SORT / MAP
//console.log(arrayNumber.filter((number) => number > 10));
//console.log(arrayNumber.sort((x, y) => x - y));
//arrayNumber.map((number) => (document.body.innerHTML += `<li>${number}</li>`));

// ========== LES METHODES OBJETS ========== //

document.body.innerHTML = data
  .sort((a, b) => a.age - b.age)
  .map(
    (user) =>
      `
    <div class="user-card">
      <h2>${user.pseudo}</h2>
      <p>${user.age} ans</p>
      <p>Status : ${user.admin ? "Administrateur" : "Membre"}</p>
    </div>
    `
  )
  .join(" ");

// ========== LES DATES ========== //

// Date classique
let date = new Date();

// Timestamp
let timestamp = Date.parse(date);

// IsoString
let iso = date.toISOString();

const dateParser = (chaine) => {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    //hour: "numeric",
    //minute: "numeric",
  });
  return newDate;
};

console.log(dateParser(date));
console.log(dateParser(timestamp));
console.log(dateParser(iso));
