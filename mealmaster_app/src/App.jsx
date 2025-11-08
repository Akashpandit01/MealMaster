import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ProfileForm from "./components/ProfileForm";
import RecipeList from "./components/RecipeList";
import MealPlanner from "./components/MealPlanner";
import GroceryList from "./components/GroceryList";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: 16 }}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to MealMaster</h1>
                <p>Use the navigation bar to start.</p>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/planner" element={<MealPlanner />} />
          <Route path="/grocery" element={<GroceryList />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}
