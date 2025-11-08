import React from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const recipes = useSelector((s) => s.recipes);
  const mealplan = useSelector((s) => s.mealPlan);

  const today = new Date().toISOString().slice(0, 10);
  const planned = mealplan[today] || {};
  let calories = 0,
    protein = 0;

  Object.values(planned).forEach((id) => {
    const r = recipes.find((rr) => rr.id === id);
    if (r) {
      calories += r.calories || 0;
      protein += r.protein || 0;
    }
  });

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="card">
        Planned calories for {today}: <strong>{calories}</strong>
      </div>
      <div className="card">
        Planned protein: <strong>{protein}g</strong>
      </div>
      <p>Set daily goals in your profile (coming soon).</p>
    </div>
  );
}
