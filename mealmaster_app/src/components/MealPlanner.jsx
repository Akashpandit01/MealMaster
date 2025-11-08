import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMealForDay } from "../mealplan/mealPlanSlice";

const days = Array.from({ length: 7 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return d.toISOString().slice(0, 10);
});

export default function MealPlanner() {
  const recipes = useSelector((s) => s.recipes);
  const mealplan = useSelector((s) => s.mealPlan);
  const dispatch = useDispatch();

  const onDrop = (e, date, slot) => {
    const recipeId = e.dataTransfer.getData("text/plain");
    dispatch(setMealForDay({ date, mealSlot: slot, recipeId }));
  };

  return (
    <div>
      <h2>Meal Planner (drag recipe title onto a slot)</h2>
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <h3>Recipes (drag me)</h3>
          {recipes.map((r) => (
            <div
              key={r.id}
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData("text/plain", r.id)
              }
              className="card-small"
            >
              {r.title}
            </div>
          ))}
        </div>
        <div style={{ flex: 2 }}>
          <table className="planner">
            <thead>
              <tr>
                <th>Date</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
              </tr>
            </thead>
            <tbody>
              {days.map((d) => (
                <tr key={d}>
                  <td>{d}</td>
                  {["breakfast", "lunch", "dinner"].map((slot) => (
                    <td
                      key={slot}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => onDrop(e, d, slot)}
                    >
                      <div>
                        {mealplan[d]?.[slot]
                          ? recipes.find((r) => r.id === mealplan[d][slot])
                              ?.title
                          : <em>Drop recipe</em>}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
