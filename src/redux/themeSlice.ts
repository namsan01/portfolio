import { createSlice } from "@reduxjs/toolkit";

export const dark = createSlice({
  name: "theme",
  initialState: localStorage.getItem("theme") || "light",
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

export const { toggleTheme } = dark.actions;

export interface RootState {
  dark: string;
}
