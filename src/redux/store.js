import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterProductSlice from "./counterProduct/counterSlice";
import logger from "redux-logger";
import shoppingCardReducer from "./ShowModal/shoppingCardSlice";
export const store = configureStore({
  reducer: { counterProducts: counterProductSlice, modal: shoppingCardReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
