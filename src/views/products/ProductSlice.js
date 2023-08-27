import { createSlice } from "@reduxjs/toolkit";
import bg1 from "../../assets/images/bg/bg1.jpg";
import bg2 from "../../assets/images/bg/bg2.jpg";
import bg3 from "../../assets/images/bg/bg3.jpg";
import bg4 from "../../assets/images/bg/bg4.jpg";

const productsData = [
  {
    image: bg1,
    title: "Geepas oven",
    description: "Geepas oven 2 years old, good condition.",
  },
  {
    image: bg2,
    title: "Geepas oven",
    description: "Geepas oven 2 years old, good condition.",
  },
  {
    image: bg3,
    title: "Geepas oven",
    description: "Geepas oven 2 years old, good condition.",
  },
  {
    image: bg4,
    title: "Geepas oven",
    description: "Geepas oven 2 years old, good condition.",
  },
];

const initialState = {
  products: productsData,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
