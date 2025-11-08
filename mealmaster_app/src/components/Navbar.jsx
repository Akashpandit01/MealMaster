import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";

export default function Navbar() {
  const auth = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  return (
    <nav className="nav">
      <Link to="/">MealMaster</Link>
      <div>
        <Link to="/recipes">Recipes</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/grocery">Grocery</Link>
        <Link to="/dashboard">Dashboard</Link>
        {auth.user ? (
          <button onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
