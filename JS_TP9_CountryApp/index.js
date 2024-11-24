const countryContainer = document.querySelector(".countries-container");
let listOfCountry = [];

const fetchCountries = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      listOfCountry = data;
    });
  countriesDisplay();
};

const countriesDisplay = async (sort) => {
  // On filtre le tableau
  if (inputSearch.value) {
    listOfCountry = listOfCountry.filter((country) => {
      return country.name.common
        .toUpperCase()
        .includes(inputSearch.value.toUpperCase());
    });
  }

  // On trie le tableau
  if (sort) {
    switch (sort) {
      case "asc":
        listOfCountry.sort((a, b) => a.population - b.population);
        break;
      case "desc":
        listOfCountry.sort((a, b) => b.population - a.population);
        break;
      case "alpha":
        listOfCountry.sort((a, b) =>
          a.translations.fra.common
            .toUpperCase()
            .localeCompare(b.translations.fra.common.toUpperCase())
        );
        break;
      default:
        break;
    }
  }

  countryContainer.innerHTML = listOfCountry
    .slice(0, inputRange.value)
    .map((country) => {
      return `
        <div class="card">
            <img src=${country.flags.png} alt="Drapeau de ${
        country.name.common
      }">
            <h2>${country.translations.fra.common}</h2>
            <h3>${country.capital}</h3>
            <p>Population : ${country.population.toLocaleString()}</p>
        </div>
        `;
    })
    .join("");
};

// Event on search input => Filtering results.
inputSearch.addEventListener("input", () => {
  countriesDisplay();
});

// Event on range => displaying card from 0 to 250.
inputRange.addEventListener("input", (e) => {
  rangeValue.textContent = e.target.value;
  countriesDisplay();
});

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

minToMax.addEventListener("click", () => {
  countriesDisplay("asc");
});

maxToMin.addEventListener("click", () => {
  countriesDisplay("desc");
});

alpha.addEventListener("click", () => {
  countriesDisplay("alpha");
});

window.addEventListener("load", fetchCountries);
