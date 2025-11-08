import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import profileReducer from "../profile/profileSlice";
import recipesReducer from "../recipes/recipesSlice";
import mealPlanReducer from "../mealplan/mealPlanSlice";
import groceryReducer from "../grocery/grocerySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    recipes: recipesReducer,
    mealPlan: mealPlanReducer,
    grocery: groceryReducer,
  },
});

export default store;
