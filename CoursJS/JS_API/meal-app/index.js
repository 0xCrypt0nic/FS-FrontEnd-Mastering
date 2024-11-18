const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");

let meals = [];

const fetchMeals = async (search) => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));
  console.log(meals);
};

const mealsDisplay = () => {
  if (meals === null) {
    result.innerHTML = "<h2>Aucun résultat</h2>";
  } else {
    meals.length = 12;

    result.innerHTML = meals
      .map((meal) => {
        let ingredients = [];

        // On récupère les listes d'ingrédients et de mesure
        for (i = 1; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            let ingredient = meal[`strIngredient${i}`];
            let measure = meal[`strMeasure${i}`];

            ingredients.push(`<li>${ingredient} - ${measure}</li>`);
          }
        }

        // On retourne la carte à afficher
        return `
              <li class="card">
                  <h2>${meal.strMeal}</h2>
                  <p>${meal.strArea}</p>
                  <img src=${meal.strMealThumb} alt="Photo de ${meal.strMeal}">
                  <ul>${ingredients.join("")}</ul>
              </li>
          `;
      })
      .join("");
  }
};

input.addEventListener("input", (e) => {
  fetchMeals(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mealsDisplay();
});
