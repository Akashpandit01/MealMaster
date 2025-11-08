import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRecipe } from "../recipes/recipesSlice";

export default function RecipeList() {
  const recipes = useSelector((s) => s.recipes);
  const dispatch = useDispatch();

  const quickAdd = () => {
    const id = "r" + Math.random().toString(36).slice(2, 9);
    dispatch(
      addRecipe({
        id,
        title: "Custom Meal",
        meal: "lunch",
        calories: 350,
        protein: 15,
        carbs: 45,
        fat: 12,
        ingredients: [{ name: "ingredient", qty: "1" }],
      })
    );
  };

  return (
    <div>
      <h2>Recipes</h2>
      <button onClick={quickAdd}>Quick add sample</button>
      <ul>
        {recipes.map((r) => (
          <li key={r.id} className="card">
            <h4>
              {r.title} — {r.meal}
            </h4>
            <div>
              Calories: {r.calories} | P: {r.protein} | C: {r.carbs} | F:{" "}
              {r.fat}
            </div>
            <div>
              Ingredients: {r.ingredients?.map((i) => i.name).join(", ")}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
