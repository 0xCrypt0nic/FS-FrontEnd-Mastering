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
