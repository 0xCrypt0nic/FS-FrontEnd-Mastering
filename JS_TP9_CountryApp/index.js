const countryContainer = document.querySelector(".countries-container");

let listOfCountry = [];

const fetchCountries = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      listOfCountry = data;
    });

  console.log(listOfCountry[6]);
};

const countriesDisplay = async () => {
  await fetchCountries();
  countryContainer.innerHTML = listOfCountry
    .map((country) => {
      return `
        <div class="card">
            <img src=${country.flags.png} alt="Drapeau de ${
        country.name.common
      }">
            <h2>${country.name.common}</h2>
            <h3>${country.capital}</h3>
            <p>Population : ${country.population.toLocaleString()}</p>
        </div>
        `;
    })
    .join("");
};

countriesDisplay();

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
