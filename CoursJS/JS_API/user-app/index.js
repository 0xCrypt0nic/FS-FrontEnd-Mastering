let userData = [];

// Récupère les données de l'API.
const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));

  console.log(userData);
};

// Formate une date au format JJ mois AA.
const dateParser = (date) => {
  let newDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return newDate;
};

// Calcul le nombre de jours écoulés depuis une date donnée.
const dayCalc = (date) => {
  let today = new Date();
  let todayTimestamp = Date.parse(today);
  let timestamp = Date.parse(date);

  return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
};

// Affichage des données.
const userDisplay = async () => {
  await fetchUser();

  document.body.innerHTML = userData
    .map(
      (user) =>
        `
        <div class="card">
            <img src=${user.picture.large} alt="photo de ${user.name.last}">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
            <em>Membre depuis : ${dayCalc(user.registered.date)} jours</em>
        </div>
        `
    )
    .join("");
};

userDisplay();
