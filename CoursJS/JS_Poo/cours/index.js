const obj = {
  // Index : Value
  pseudo: "From Scratch",
  ville: "Bordeaux",
  admin: false,

  direBonjour: function () {
    console.log(`Hello World by ${this.pseudo}`);
  },
};

// Ajouter
obj.age = 24;
obj["admin"] = true;

// Modifier
obj.pseudo = "FS";

// Supprimer
delete obj.ville;

// Checker si une propriété existe
console.log("pseudo" in obj);
console.log("ville" in obj);

// Parcourir un objet
for (const key in obj) {
  console.log(`${key} : ${obj[key]}`);
}

obj.direBonjour();

// Obtenir les clés
const keys = Object.keys(obj);
console.log(keys);

// Obtenir les valeurs
const values = Object.values(obj);
console.log(values);

// Obtenir un objet sous forme de tableaux
const nestedArray = Object.entries(obj);
console.log(nestedArray);

// Fusionner des objets
const obj2 = {
  taille: "1m80",
  poids: "75kg",
};

const fusion = Object.assign({}, obj, obj2);
console.log(fusion);

// Empêcher les modifications
//const newObj = Object.freeze(obj); // Bloque la modif et l'ajout
const newObj = Object.seal(obj); // Bloque uniquement l'ajout
newObj.pseudo = "Test";
newObj.adresse = "42 avenue du code";
console.log(newObj);

// ======== CONSTRUIRE DES OBJETS ======== //

// Fonction Constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = () => {
    console.log(`${this.pseudo} habite à ${this.ville}`);
  };
}

const user1 = new User("From Scratch", "Bordeaux");
console.log(user1);
user1.getCity();

// Factory functions
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}

const user4 = User3("FS", "nice");
console.log(user4);

// Class
class Utilisateur {
  constructor(pseudo, ville) {
    (this.pseudo = pseudo), (this.ville = ville);
  }

  sayMyName = () => {
    console.log(`Bonjour je suis ${this.pseudo}`);
  };
}

const user5 = new Utilisateur("Nico", "Orleans");

// Prototypes ne fonctionnent pas avec les fonctions flechées.
Utilisateur.prototype.sayCity = function () {
  console.log(`J'habite à ${this.ville}`);
};

Object.assign(Utilisateur.prototype, {
  method1() {},
  method2() {},
});

// INFORMATION : Les fonctions dans le prototype sont 30% plus rapides que dans le constructeur.

console.log(user5);
user5.sayMyName();
user5.sayCity();
