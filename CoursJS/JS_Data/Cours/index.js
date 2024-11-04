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
