import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../utils/localPersistence";

const initial = loadState("mm_grocery", { items: [] });

const grocerySlice = createSlice({
  name: "grocery",
  initialState: initial,
  reducers: {
    generateFromMealplan(state, action) {
      const { mealplan, recipes } = action.payload;
      const map = {};
      Object.values(mealplan || {}).forEach((day) => {
        Object.values(day || {}).forEach((recipeId) => {
          const r = recipes.find((rr) => rr.id === recipeId);
          if (r && r.ingredients) {
            r.ingredients.forEach(
              (ing) => (map[ing.name] = (map[ing.name] || 0) + 1)
            );
          }
        });
      });
      state.items = Object.keys(map).map((k) => ({
        name: k,
        qty: map[k],
        checked: false,
      }));
      saveState("mm_grocery", state);
    },
    toggleItem(state, action) {
      const idx = state.items.findIndex((i) => i.name === action.payload);
      if (idx >= 0) {
        state.items[idx].checked = !state.items[idx].checked;
        saveState("mm_grocery", state);
      }
    },
    clearList(state) {
      state.items = [];
      saveState("mm_grocery", state);
    },
  },
});

export const { generateFromMealplan, toggleItem, clearList } =
  grocerySlice.actions;
export default grocerySlice.reducer;
