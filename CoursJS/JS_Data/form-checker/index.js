const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

const progressBar = document.getElementById("progress-bar");
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
const passwordChecker = (value) => {
  // Nettoyage des ProgressBar.
  progressBar.classList = "";
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Min 8 caractères (une maj, un chiffre, un caractère spécial)"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    errorDisplay("password", "", true);
    progressBar.classList.add("progressBlue");
    password = value;
  } else {
    errorDisplay("password", "", true);
    progressBar.classList.add("progressGreen");
    password = value;
  }

  if (confirmPass) confirmChecker(confirmPass);
};

// Verification du CONFIRM PASSWORD.
const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe ne sont pas identiques");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (pseudo && email && password && confirmPass) {
    const data = {
      pseudo,
      email,
      password,
    };

    console.log(data);

    // Remise à 0 du formulaire.
    inputs.forEach((input) => {
      input.value = "";
    });
    progressBar.classList = "";
    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;

    alert("Inscription validée");
  } else {
    alert("Veuillez remplir correctement les champs");
  }
});
