import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const favoriteGet = createAction("favorite/getAllFavorite");
const favoritePost = createAction("favorite/postAllFavorite");
const favoriteDelete = createAction("favorite/deleteFavorite");

export const getAllFavorite = createAsyncThunk(favoriteGet, async function () {
  const response = await axios.get(
    "https://6388f8d0a4bb27a7f79682fc.mockapi.io/api/products/favorite"
  );
  const { data } = response;
  return data;
});

export const addToFavorite = createAsyncThunk(
  favoritePost,
  function (obj, { rejectWithValue, dispatch }) {
    axios.post(
      "https://6388f8d0a4bb27a7f79682fc.mockapi.io/api/products/favorite",
      obj
    );
    dispatch(setAddToFavorite(obj));
  }
);

export const deleteFromFavorite = createAsyncThunk(
  favoriteDelete,
  function (id, { rejectWithValue, dispatch }) {
    dispatch(deleteFavorite(id));
    axios.delete(
      `https://6388f8d0a4bb27a7f79682fc.mockapi.io/api/products/favorite/${id}`
    );
  }
);

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
    status: false,
    error: null,
  },
  reducers: {
    setAddToFavorite(state, action) {
      state.favorite = [...state.favorite, action.payload];
    },
    deleteFavorite(state, action) {
      state.favorite = state.favorite.filter(
        (item) => Number(item.id) !== Number(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllFavorite.pending, (state, action) => {
      state.status = true;
      state.error = null;
    });
    builder.addCase(getAllFavorite.fulfilled, (state, action) => {
      state.status = false;
      state.favorite = action.payload;
    });
    builder.addCase(getAllFavorite.rejected, (state, action) => {});
  },
});

export const { setAddToFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
