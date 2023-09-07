import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ServiceCalls } from "../../api/apiService";
import { toast } from "react-toastify";
import { trimBase64Prefix } from "../../Utils";

const initialState = {
  products: [],
  currentProduct: {},
  searchResultProducts: [],
  isSearched: false,
  isLoading: false,
  confirmationModal: {
    isOpen: false,
  },
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

export const fetchProductsById = createAsyncThunk(
  "fetchProductsById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await ServiceCalls.get(`Product/${productId}`);
      if (response.status === 200) {
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

export const postProduct = createAsyncThunk(
  "postProduct",
  async (body, { dispatch, rejectWithValue }) => {
    try {
      debugger;
      const productBody = {
        ...body,
        imageData: trimBase64Prefix(await body.productImageDatas[0]),
      };
      const response = await ServiceCalls.post("Product", productBody);

      if (response.status === 201) {
        debugger;
        if (Object.keys(body?.productImageDatas ?? {}).length) {
          const productImages = await Promise.all(
            body.productImageDatas.map(async (i) => ({
              imageData: trimBase64Prefix(await i),
              productId: `${response.data.id}`,
            }))
          );

          dispatch(postProductImages(productImages));
        }

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

export const putProduct = createAsyncThunk(
  "putProduct",
  async (body, { rejectWithValue }) => {
    try {
      const response = await ServiceCalls.put(`Product/${body.id}`, body);

      if (response.status === 200) {
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

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (productId, { dispatch, rejectWithValue }) => {
    try {
      const response = await ServiceCalls.delete(`Product/${productId}`);

      if (response.status === 200) {
        dispatch(closeConfirmationModal());
        dispatch(fetchProducts({}));
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
    setConfirmationModal: (state, action) => {
      state.confirmationModal = action.payload;
    },
    closeConfirmationModal: (state) => {
      state.confirmationModal = {
        isOpen: false,
        confirmationMessage: "",
        title: "",
        toggle: () => {},
        onYes: () => {},
        onNo: () => {},
      };
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
    builder.addCase(postProduct.fulfilled, (state) => {
      toast("Product added", { type: "success" });
      state.isLoading = false;
    });
    builder.addCase(postProduct.rejected, (state, action) => {
      debugger;
      toast("Product couldn't be added", { type: "error" });
      state.isLoading = false;
    });
    builder.addCase(putProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(putProduct.fulfilled, (state) => {
      toast("Product updated", { type: "success" });
      state.isLoading = false;
    });
    builder.addCase(putProduct.rejected, (state, action) => {
      toast("Product couldn't be updated", { type: "error" });
      state.isLoading = false;
    });
    builder.addCase(fetchProductsById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductsById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentProduct = action.payload;
    });
    builder.addCase(fetchProductsById.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      toast("Product deleted", { type: "success" });
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      toast("Product couldn't be deleted", { type: "error" });
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  searchProduct,
  setConfirmationModal,
  closeConfirmationModal,
} = productSlice.actions;

export default productSlice.reducer;
