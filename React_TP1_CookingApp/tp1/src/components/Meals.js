import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Meals = ({ search }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => setData(res.data.meals));
  }, [search]);

  return (
    <ul className="meals">
      {data.map((meal, index) => (
        <Card key={index} Meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
