import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./views/products/ProductSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
