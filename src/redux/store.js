import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterProductSlice from "./counterProduct/counterSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: { counterProducts: counterProductSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
