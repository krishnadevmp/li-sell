import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./views/products/ProductSlice";
import accountReducer from "./views/account/AccountSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    account: accountReducer,
  },
});
