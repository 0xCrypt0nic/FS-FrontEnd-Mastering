// ========== CANVAS ========== //
//------------------------------//

const draw = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(50, 50, 50, 150);

  ctx.fillStyle = "rgba(0,100,200,0.5)";
  ctx.fillRect(100, 30, 100, 50);

  ctx.fillStyle = "rgba(100,100,200,0.5)";
  ctx.fillRect(10, 25, 100, 100);
  ctx.clearRect(15, 25, 40, 40);
  ctx.strokeRect(125, 75, 50, 50);

  ctx.fillStyle = "rgba(200,100,200,0.8)";
  ctx.beginPath();
  ctx.moveTo(180, 150);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 150);
  ctx.fill();
};

window.addEventListener("load", draw);

//------------------------------------------------------------**
// ========== TRY / CATCH ========== //
//-----------------------------------//

try {
  // Test un block de code
  maFonction();
} catch (err) {
  console.log(err);
}

function isValidJSON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch (err) {
    return false;
  }
}

// -- Finally
try {
  // Test un block de code
  maFonction();
} catch (err) {
  console.log(err);
} finally {
  console.log("On est arrivé au bout.");
}

// Throw
function isNumber(num) {
  if (isNaN(num)) {
    throw "Not a number";
  } else {
    console.log("C'est un nombre");
  }
}

try {
  isNumber("jkjk");
} catch (err) {
  console.log(err);
}

//------------------------------------------------------------**
// ========== STRICT MODE ========== //
//-----------------------------------//

// Il faut déclarer "use strict"; tout en haut du fichier, qui permet
// de cadrer le js. (Plus d'informations sur le net.

//------------------------------------------------------------**
// ========== MODULES (IMPORT / EXPORT) ========== //
//-------------------------------------------------//
