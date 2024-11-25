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
