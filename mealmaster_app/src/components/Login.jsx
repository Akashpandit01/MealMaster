import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    nav("/");
  };

  return (
    <form onSubmit={submit} className="card">
      <h3>Login</h3>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
