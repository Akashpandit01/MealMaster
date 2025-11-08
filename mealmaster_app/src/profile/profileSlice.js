import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../utils/localPersistence";

const initial = loadState("mm_profile", { prefs: null });

const profileSlice = createSlice({
  name: "profile",
  initialState: initial,
  reducers: {
    saveProfile(state, action) {
      state.prefs = action.payload;
      saveState("mm_profile", state);
    },
  },
});

export const { saveProfile } = profileSlice.actions;
export default profileSlice.reducer;
