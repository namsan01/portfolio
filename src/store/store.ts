import { configureStore } from "@reduxjs/toolkit";
import { dark } from "../redux/themeSlice";

export default configureStore({
  reducer: {
    dark: dark.reducer,
  },
});
