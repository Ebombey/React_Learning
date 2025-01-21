import { create } from "zustand";

type MealsType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type RecipeStoreType = {
  meals: MealsType[];
  searchQuery: string;
  setMeals: (meals: MealsType[]) => void;
  setSearchQuery: (searchQuery: string) => void;
};

export const useRecipeStore = create<RecipeStoreType>((set) => ({
  meals: [],
  searchQuery: "",
  setMeals: (meals) => set({ meals }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}));
