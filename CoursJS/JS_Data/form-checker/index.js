const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

let pseudo, email, password, confirmPass;

// Affichage des messages d'erreurs / confirmation.
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector(`.${tag}-container`);
  const span = document.querySelector(`.${tag}-container > span`);

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

// Verification du PSEUDO.
const pseudoChecker = (value) => {
  pseudo = null;
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

// Verification de l'EMAIL.
const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

// Verification du PASSWORD.
const passwordChecker = (value) => {};

// Verification du CONFIRM PASSWORD.
const confirmChecker = (value) => {};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});
