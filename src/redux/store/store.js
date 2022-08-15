import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cart.slice";
import userReducer from "../slices/user.slice";
import categoriesReducer from "../slices/categories.slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
