import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../utils/localPersistence";

const initialUsers = loadState("mm_users", []);
const initialAuth = loadState("mm_auth", { user: null });

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    register(state, action) {
      const users = loadState("mm_users", []);
      users.push(action.payload);
      saveState("mm_users", users);
      state.user = { email: action.payload.email };
      saveState("mm_auth", state);
    },
    login(state, action) {
      const users = loadState("mm_users", []);
      const found = users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (found) {
        state.user = { email: found.email };
        saveState("mm_auth", state);
      }
    },
    logout(state) {
      state.user = null;
      saveState("mm_auth", state);
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
