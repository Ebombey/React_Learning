import { useState } from "react";
import { useStore } from "../store/useStore.ts";

type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
};

const Recipe = () => {
  const { recipes, addRecipe, removeRecipe } = useStore();
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  const handleAddRecipe = () => {
    if (
      name.trim() === "" ||
      ingredients.trim() === "" ||
      instructions.trim() === ""
    ) {
      return;
    }

    addRecipe({
      id: Date.now(),
      name: name,
      ingredients: ingredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
      instructions: instructions,
    });

    setName("");
    setIngredients("");
    setInstructions("");
  };

  const handleEditRecipe = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setName(recipe.name);
    setIngredients(recipe.ingredients.join(", "));
    setInstructions(recipe.instructions);
  };

  const handleUpdateRecipe = () => {
    if (
      name.trim() === "" ||
      ingredients.trim() === "" ||
      instructions.trim() === ""
    ) {
      return;
    }

    if (editingRecipe) {
      removeRecipe(editingRecipe.id);

      addRecipe({
        id: Date.now(),
        name: name,
        ingredients: ingredients
          .split(",")
          .map((ingredient) => ingredient.trim()),
        instructions: instructions,
      });

      setName("");
      setIngredients("");
      setInstructions("");
      setEditingRecipe(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingRecipe(null);
    setName("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-center text-green-800">
          Recipe Book
        </h1>

        <div className="mb-6 space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Recipe Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredients (Comma Separated)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Instructions"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="flex justify-between">
            {editingRecipe ? (
              <>
                <button
                  onClick={handleUpdateRecipe}
                  className="px-4 py-2 text-white bg-yellow-400 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Update recipe
                </button>

                <button
                  onClick={handleCancelEdit}
                  className="px-4 py-2 text-white bg-yellow-400 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleAddRecipe}
                  className="px-4 py-2 text-white bg-green-400 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Add Recipe
                </button>
              </>
            )}
          </div>
        </div>

        <ul className="space-y-4">
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="p-4 rounded-lg shadow-sm bg-green-50"
            >
              <h2 className="mb-2 text-xl font-semibold text-green-800">
                {recipe.name}
              </h2>

              <p className="mb-2 text-gray-700">
                <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
              </p>

              <p className="mb-2 text-gray-700">
                <strong>Instruction:</strong> {recipe.instructions}
              </p>

              <div className="flex justify-between">
                <button
                  onClick={() => handleEditRecipe(recipe)}
                  className="px-4 py-2 text-white bg-yellow-400 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Edit
                </button>

                <button
                  onClick={() => removeRecipe(recipe.id)}
                  className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
