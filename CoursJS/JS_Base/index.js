console.log("Message depuis le fichier index.js");

// ======== SYNTAXES DE BASES ======== //

// Commentaire

/* Commenter
plusieurs
lignes */

// Kamel Case
let maSuperVariable = "Hello";

// ======== LES VARIABLES ======== //

//... Ancienne méthode pour déclarer une variable
var unTexte = "Voici un texte";

//... Nouvelle méthode pour déclarer une variable
const prenom = "Nicolas"; // Ne peut plus être modifiée
let age = 34; // Peut être modifiée

let chaine = "Je suis une chaine de caractères";
console.log(chaine);
let nouvelleChaine = "Concaténation : " + chaine;
console.log(nouvelleChaine);
let autreConcatenation = `Concaténation de chaine d'une autre manière : ${chaine}`;
console.log(autreConcatenation);

// ======== LES TYPES DE DONNEES ======== //
let string = "Je suis une chaine de caractère";
let number = 12;
let boolean = true;

// Tableau : il y a des crochets.
let array = ["je", "suis", 47, true];

// Objet : il y a des accolades
let object = {
  prenom: "Nicolas",
  nom: "GRENECHE",
  age: 34,
};

let arbre;
console.log(arbre);

arbre = "un arbre";
console.log(arbre);

// ======== LES OPERATEURS ======== //
console.log(4 + 5);
console.log(5 - 2);
console.log(10 / 2);
console.log(10 * 2);
console.log(4 ** 5);

let total = 0;
total = total + 1;
total += 1;
total++;
console.log(total);

// ======== LES STRUCTURES DE CONTROLE ======== //
let x = 2;
let y = 5;

console.log("x plus grand que y ?");
if (x > y) {
  console.log("yes");
} else {
  console.log("no");
}

// Ternaire
console.log(x > y ? "yes" : "no");

// On teste si la variable est true
if (x) {
  console.log("x existe !");
}

// == teste l'égalité en contenu
// === teste l'égalité en contenu et en type
if (x === y) {
  console.log("ils sont égaux");
} else {
  console.log("ils sont différents");
}

// && ET
// || OU

// ======== LES FONCTIONS ======== //

// Ancienne façon de déclarer une fonction (mais toujours utilisée)
function faireQuelqueChose() {
  console.log("quelque chose");
}

faireQuelqueChose();

// Nouvelle méthode, fonction flechée
const faireQuelqueChose2 = () => {
  console.log("quelque chose 2");
};

faireQuelqueChose2();
