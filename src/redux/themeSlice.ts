import { createSlice } from "@reduxjs/toolkit";

const savedDark = localStorage.getItem("dark");

const initialState = {
  mode: savedDark || "light",
};

export const dark = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("dark", state.mode);
    },
  },
});

export const { toggleTheme } = dark.actions;

export interface RootState {
  dark: {
    mode: string;
  };
}
