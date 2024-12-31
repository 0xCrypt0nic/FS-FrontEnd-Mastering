import React from "react";

const Card = ({ Meal }) => {
  return (
    <div>
      <li>
        <h2>{Meal.strMeal}</h2>
        <p>{Meal.strArea}</p>
        <img src={Meal.strMealThumb} alt={Meal.strMeal} height="100px" />
      </li>
    </div>
  );
};

export default Card;
