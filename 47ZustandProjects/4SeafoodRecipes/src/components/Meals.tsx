import { useEffect } from "react";
import { useRecipeStore } from "../store/useRecipeStore.ts";

const Meals = () => {
  const { meals, searchQuery, setMeals, setSearchQuery } = useRecipeStore();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );

        const data = await response.json();

        setMeals(data.meals);
      } catch (error) {
        console.error("Error fetching meals", error);
      }
    };

    fetchMeals();
  }, [setMeals]);

  const filteredMeals = meals?.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-teal-600">Seafood Recipes</h1>

      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-3 mb-8 text-center border border-teal-400 rounded-lg w-96 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      <div>
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <div
              key={meal.idMeal}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="object-cover w-full h-48 mb-4 rounded-t-lg"
              />

              <h2 className="mb-2 text-xl font-semibold text-teal-700">
                {meal.strMeal}
              </h2>

              <p className="text-sm text-gray-600">Delicious seafood meal.</p>
            </div>
          ))
        ) : (
          <p>No Meals found</p>
        )}
      </div>
    </div>
  );
};

export default Meals;
