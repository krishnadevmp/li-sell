import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ServiceCalls } from "../../api/apiService";

const initialState = {
  products: [],
  searchResultProducts: [],
  isSearched: false,
  isLoading: false,
};

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async ({ offset, limit, filter, sortBy }, { rejectWithValue }) => {
    try {
      const response = await ServiceCalls.get("Product");

      if (response?.status === 204) {
        return [];
      }

      if (response.status === 200) {
        return response.data;
      }
      return [];
    } catch (error) {
      // TODO
      const errorData = JSON.parse(error.response.data);
      return rejectWithValue(errorData.title);
    }
  }
);

export const postProduct = createAsyncThunk(
  "postProduct",
  async (body, { dispatch, rejectWithValue }) => {
    try {
      debugger;
      const response = await ServiceCalls.post("Product", body);

      if (response.status === 201) {
        debugger;
        const productImages = await Promise.all(
          body.images.map(async (i) => ({
            imageData: await i,
            productId: `${response.data.id}`,
          }))
        );

        dispatch(postProductImages(productImages));
        return response.data;
      }
      return {};
    } catch (error) {
      // TODO
      const errorData = JSON.parse(error.response.data);
      return rejectWithValue(errorData.title);
    }
  }
);

export const postProductImages = createAsyncThunk(
  "postProductImages",
  async (productImages, { rejectWithValue }) => {
    try {
      debugger;
      productImages.forEach((productImage) => {
        ServiceCalls.post("Image", productImage);
      });
      return {};
    } catch (error) {
      // TODO
      const errorData = JSON.parse(error.response.data);
      return rejectWithValue(errorData.title);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.searchResultProducts = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(postProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });
    builder.addCase(postProduct.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, searchProduct } = productSlice.actions;

export default productSlice.reducer;
