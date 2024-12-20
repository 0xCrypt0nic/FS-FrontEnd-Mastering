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


// ========== LES CLASSES ========== //

class Singer{
    id:number;
    name:string;
    alive?:boolean;

    constructor(id:number, name:string, alive?:boolean) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}

const prince = new Singer(0, 'Prince');
console.log(prince);

// ========== LES FONCTIONS ========== //

const sayMyName = (name: string) => {
    console.log(`Bonjour ${name}`);
  };
  
  sayMyName("Nico");

  const ageDuCapitaine = (age: number | string, size?: number): string => {
    if(size){
        return `La taille du capitaine est de ${size} et il est âgé de ${age} ans.`;
    } else{
        return `Le capitaine est âgé de ${age} ans.`; 
    }
  }

  console.log(ageDuCapitaine(16, 185));


  // ========== LES ENUM & TUPLE ========== //

enum Role{ADMIN, PREMIUM, BASIC};

  interface User{
    name: string;
    attributes: [number, string];
    role: Role.BASIC;
  }

  const user1:User = {
    name: "Nico",
    attributes: [12, "Eleve"],
    role: Role.BASIC,
  }

