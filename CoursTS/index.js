console.log("// ====== Tuto TypeScript ====== //");
// ========== LES VARIABLES ========== //
var num1 = 24;
var num2;
var numOrString;
num1 = 11;
// ========== LES TABLEAUX ========== //
var array1 = ["chient", "chat", "poisson"];
//array[1] = false;
array1[1] = "coucou";
console.log(array1);
var tableau = [];
tableau.push(false);
tableau.push(24);
var player1 = {
    id: 0,
    name: "Zidane",
    jersey: 10
};
//player1.nickname = "zizou";
//player1.nickgername = "zizou";
console.log(player1);
// ========== LES CLASSES ========== //
var Singer = /** @class */ (function () {
    function Singer(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
    return Singer;
}());
var prince = new Singer(0, 'Prince');
console.log(prince);
// ========== LES FONCTIONS ========== //
var sayMyName = function (name) {
    console.log("Bonjour ".concat(name));
};
sayMyName("Nico");
var ageDuCapitaine = function (age, size) {
    if (size) {
        return "La taille du capitaine est de ".concat(size, " et il est \u00E2g\u00E9 de ").concat(age, " ans.");
    }
    else {
        return "Le capitaine est \u00E2g\u00E9 de ".concat(age, " ans.");
    }
};
console.log(ageDuCapitaine(16, 185));
