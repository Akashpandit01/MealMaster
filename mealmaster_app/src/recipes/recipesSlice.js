import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../utils/localPersistence";

const seeded = loadState("mm_recipes", [
  {
    id: "r1",
    title: "Oats Porridge",
    meal: "breakfast",
    calories: 250,
    protein: 8,
    carbs: 40,
    fat: 6,
    ingredients: [
      { name: "oats", qty: "50g" },
      { name: "milk", qty: "200ml" },
    ],
  },
  {
    id: "r2",
    title: "Grilled Chicken Salad",
    meal: "lunch",
    calories: 450,
    protein: 36,
    carbs: 20,
    fat: 18,
    ingredients: [
      { name: "chicken", qty: "150g" },
      { name: "lettuce", qty: "100g" },
    ],
  },
  {
    id: "r3",
    title: "Dal & Rice",
    meal: "dinner",
    calories: 600,
    protein: 20,
    carbs: 90,
    fat: 10,
    ingredients: [
      { name: "dal", qty: "150g" },
      { name: "rice", qty: "200g" },
    ],
  },
]);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: seeded,
  reducers: {
    addRecipe(state, action) {
      state.push(action.payload);
      saveState("mm_recipes", state);
    },
    removeRecipe(state, action) {
      const idx = state.findIndex((r) => r.id === action.payload);
      if (idx >= 0) {
        state.splice(idx, 1);
        saveState("mm_recipes", state);
      }
    },
  },
});

export const { addRecipe, removeRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
