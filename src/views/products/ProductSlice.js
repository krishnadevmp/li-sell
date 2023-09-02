import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchResultProducts: [],
  isSearched: false,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProducts = [
        ...state.products,
        { ...action.payload, id: state.products.length },
      ];
      state.products = newProducts;
      state.searchResultProducts = newProducts;
    },
    searchProduct: (state, action) => {
      state.isSearched = true;
      const searchValue = action.payload?.toLowerCase();
      state.searchResultProducts = state.products.filter(
        (p) =>
          p.title?.toLowerCase()?.includes(searchValue) ||
          p.description?.toLowerCase()?.includes(searchValue)
      );
    },
    setIsSearched: (state, action) => {
      state.isSearched = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, searchProduct } = productSlice.actions;

export default productSlice.reducer;
