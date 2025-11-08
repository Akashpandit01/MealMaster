import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveProfile } from "../profile/profileSlice";
import { useNavigate } from "react-router-dom";

export default function ProfileForm() {
  const [prefs, setPrefs] = useState({
    diet: "omnivore",
    allergies: [],
    cuisine: "Any",
    goal: "maintain",
  });
  const dispatch = useDispatch();
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(saveProfile(prefs));
    nav("/recipes");
  };

  return (
    <form onSubmit={submit} className="card">
      <h3>Profile & Preferences</h3>
      <label>
        Diet
        <select
          value={prefs.diet}
          onChange={(e) => setPrefs({ ...prefs, diet: e.target.value })}
        >
          <option value="omnivore">Omnivore</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten Free</option>
        </select>
      </label>

      <label>
        Preferred Cuisine
        <input
          value={prefs.cuisine}
          onChange={(e) => setPrefs({ ...prefs, cuisine: e.target.value })}
        />
      </label>

      <label>
        Goal
        <select
          value={prefs.goal}
          onChange={(e) => setPrefs({ ...prefs, goal: e.target.value })}
        >
          <option value="weightloss">Weight Loss</option>
          <option value="muscle">Muscle Gain</option>
          <option value="maintain">Maintain</option>
        </select>
      </label>

      <button type="submit">Save</button>
    </form>
  );
}
