import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  generateFromMealplan,
  toggleItem,
  clearList,
} from "../grocery/grocerySlice";

export default function GroceryList() {
  const grocery = useSelector((s) => s.grocery);
  const mealplan = useSelector((s) => s.mealPlan);
  const recipes = useSelector((s) => s.recipes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Grocery List</h2>
      <button
        onClick={() => dispatch(generateFromMealplan({ mealplan, recipes }))}
      >
        Generate from Meal Plan
      </button>
      <button onClick={() => dispatch(clearList())}>Clear</button>
      <ul>
        {grocery.items.map((it) => (
          <li key={it.name}>
            <label>
              <input
                type="checkbox"
                checked={it.checked}
                onChange={() => dispatch(toggleItem(it.name))}
              />{" "}
              {it.name} (x{it.qty})
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
