console.log("// ====== Tuto TypeScript ====== //");

// ========== LES VARIABLES ========== //

let num1 = 24;
let num2:string;
let numOrString: number | string;
num1 = 11;

// ========== LES TABLEAUX ========== //

let array1 = ["chient", "chat", "poisson"];
//array[1] = false;
array1[1] = "coucou";
console.log(array1);

let tableau: (number|boolean)[] = [];
tableau.push(false);
tableau.push(24);
//tableau.push('string');

// ========== LES OBJETS ========== //
interface Player {
    if: number,
    name: string,
    jersey: number
}

let player1 = {
    id: 0,
    name: "Zidane",
    jersey:10
  };
  
  //player1.nickname = "zizou";
  //player1.nickgername = "zizou";
  console.log(player1);
  