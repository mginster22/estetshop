import { configureStore } from "@reduxjs/toolkit";
import productSlice  from "./slice/productSlice";
import basketSlice  from "./slice/basketSlice";
import favoriteSlice  from "./slice/favoriteSlice";
import orderSlice  from "./slice/orderSlice";
import { combineReducers } from "@reduxjs/toolkit";
const reducers = combineReducers({
  products:productSlice,
  favorite:favoriteSlice,
  basket:basketSlice,
  order:orderSlice
})

export const store = configureStore({
  reducer: reducers,
});
