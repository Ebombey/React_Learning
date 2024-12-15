import { useEffect, useState } from "react";
import axios from "axios";

type MealsType = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

const Meals = () => {
  const [meals, setMeals] = useState<MealsType[]>([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res.data);
        setMeals(res.data.meals);
      })
      .catch((error) => console.error(error));
  }, []);

  const mealsList = meals.map((meal) => {
    return (
      <section className="bg-customPink text-[12px] text-customFontColor m-3 p-8 transition ease-in duration-500 cursor-pointer hover:scale-[1.1]">
        <img
          className="rounded-md h-52 w-80"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <section className="flex justify-between mt-5 font-sans">
          <p>{meal.strMeal}</p>
          <p>{meal.idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="flex flex-wrap justify-around m-3">{mealsList}</div>;
};

export default Meals;
