import React from "react";

const Card = ({ Meal }) => {
  return (
    <li className="card">
      <h2>{Meal.strMeal}</h2>
      <p>Origin : {Meal.strArea}</p>
      <img src={Meal.strMealThumb} alt={Meal.strMeal} />
      <p id="detail">{Meal.strInstructions}</p>
    </li>
  );
};

export default Card;
