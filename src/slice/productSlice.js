import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const products = createAction("products/fetchProducts");

export const getAllProducts = createAsyncThunk(products, async function () {
  const response = await axios.get(
    "https://6388f8d0a4bb27a7f79682fc.mockapi.io/api/products/items"
  );
  const { data } = response;
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: false,
    error: null,
  },
  reducers: {
   
   
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.status = true;
      state.error = null;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.status = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {});
  },
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;

