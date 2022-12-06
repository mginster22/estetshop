import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const orderPost = createAction("order/postOrder");

// export const getAllProducts = createAsyncThunk(products, async function () {
//   const response = await axios.get(
//     "https://6388f8d0a4bb27a7f79682fc.mockapi.io/api/products/items"
//   );
//   const { data } = response;
//   return data;
// });
export const addToOrder = createAsyncThunk(
  orderPost,
  async function (obj, { rejectWithValue, dispatch }) {
    const {data} =await axios.post(
      "https://6388f8d0a4bb27a7f79682fc.mockapi.io/api/products/order",
      obj
    );
    dispatch(setOrder(data.id));
  }
);
const orderSlice = createSlice({
  name: "products",
  initialState: {
    order: null,
    status: false,
    error: null,
    orderId: null,
  },
  reducers: {
    setOrder(state, action) {
      state.orderId = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getAllProducts.pending, (state, action) => {
  //     state.status = true;
  //     state.error = null;
  //   });
  //   builder.addCase(getAllProducts.fulfilled, (state, action) => {
  //     state.status = false;
  //     state.products = action.payload;
  //   });
  //   builder.addCase(getAllProducts.rejected, (state, action) => {});
  // },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
