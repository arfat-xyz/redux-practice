import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import colorSlice from "../features/theme/themSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    colors: colorSlice,
  },
});
