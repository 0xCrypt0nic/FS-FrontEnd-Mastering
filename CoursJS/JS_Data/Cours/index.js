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
