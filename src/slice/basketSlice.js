import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const basketGet = createAction("bakset/getBasket");
const basketPost = createAction("bakset/postBasket");
const basketDelete = createAction("bakset/basketDelete");
const basketsDelete = createAction("bakset/basketsDelete");

export const getAllBasket = createAsyncThunk(basketGet, async function () {
  const response = await axios.get(
    "https://6388f8d0a4bb27a7f79682fc.mockapi.io/api/products/basket"
  );
  const { data } = response;
  return data;
});

export const addToBasket = createAsyncThunk(
  basketPost,
  async function (obj, { rejectWithValue, dispatch }) {
    const { data } = await axios.post(
      "https://6388f8d0a4bb27a7f79682fc.mockapi.io/api/products/basket",
      obj
    );
    dispatch(setBasketProducts(data));
  }
);
export const deleteBasket = createAsyncThunk(
  basketDelete,
  async function (id, { rejectWithValue, dispatch }) {
    dispatch(deleteBasketProducts({ id }));
    await axios.delete(
      `https://6388f8d0a4bb27a7f79682fc.mockapi.io/api/products/basket/${id}`
    );
  }
);
export const deleteBasketsArr = createAsyncThunk(
  basketsDelete,
  async function (_, { rejectWithValue, dispatch }) {
    dispatch(setBasketProductsNew());
  }
);
// export const clearBasket = createAsyncThunk(
//   basketClear,
//   async function (_, { rejectWithValue, dispatch }) {
//     dispatch(setBasketProductsNew());
//   }
// );

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    status: false,
    error: null,
  },
  reducers: {
    setBasketProducts(state, action) {
      state.basket = [...state.basket, action.payload];
    },
    setBasketProductsNew(state, action) {
      state.basket = [];
    },

    deleteBasketProducts(state, action) {
      state.basket = state.basket.filter(
        (item) => Number(item.id) !== Number(action.payload.id)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBasket.pending, (state, action) => {
      state.status = true;
      state.error = null;
    });
    builder.addCase(getAllBasket.fulfilled, (state, action) => {
      state.status = false;
      state.error = null;
      state.basket = action.payload;
    });
    builder.addCase(getAllBasket.rejected, (state, action) => {});
    builder.addCase(deleteBasket.rejected, (state, action) => {});
  },
});

export const {
  setBasketProducts,
  deleteBasketProducts,
  setBasketProductsNew,
  deleteAllBasketProduct,
} = basketSlice.actions;
export default basketSlice.reducer;
