import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../utils/localPersistence";

const initial = loadState("mm_mealplan", {});

const mealPlanSlice = createSlice({
  name: "mealPlan",
  initialState: initial,
  reducers: {
    setMealForDay(state, action) {
      const { date, mealSlot, recipeId } = action.payload;
      if (!state[date]) state[date] = {};
      state[date][mealSlot] = recipeId;
      saveState("mm_mealplan", state);
    },
    removeMealFromDay(state, action) {
      const { date, mealSlot } = action.payload;
      if (state[date]) {
        delete state[date][mealSlot];
        saveState("mm_mealplan", state);
      }
    },
  },
});

export const { setMealForDay, removeMealFromDay } = mealPlanSlice.actions;
export default mealPlanSlice.reducer;
