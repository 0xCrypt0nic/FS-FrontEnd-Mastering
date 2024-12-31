import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Meals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
      .then((res) => setData(res.data.meals));
  }, []);

  return (
    <div>
      {data.map((meal, index) => (
        <Card Key={index} Meal={meal} />
      ))}
    </div>
  );
};

export default Meals;
