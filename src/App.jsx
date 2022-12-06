import React, { useEffect } from "react";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Basket } from "./Components/Basket";
import { useState } from "react";
import { Favorite } from "./pages/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  deleteFromFavorite,
  getAllFavorite,
} from "./slice/favoriteSlice";
import { addToBasket, deleteBasket, getAllBasket } from "./slice/basketSlice";
import { getAllProducts } from "./slice/productSlice";

function App() {

  const [basketModal, setBasketModal] = useState(false);
  const { basket } = useSelector((state) => state.basket);
  const { favorite } = useSelector((state) => state.favorite);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllBasket());
    dispatch(getAllFavorite());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerAddToBasket = (obj) => {
    const findBasketItem = basket.find(
      (item) => Number(item.parentId) === Number(obj.id)
    );
    if (findBasketItem) {
      dispatch(deleteBasket(findBasketItem.id));
    } else {
      dispatch(addToBasket(obj));
    }
  };

  const handlerAddedToFavorite = (obj) => {
    const findFavorite = favorite.find((item) => Number(item.parentId) === Number(obj.id))
    if (findFavorite) {
      dispatch(deleteFromFavorite(findFavorite.id));
    } else {
      dispatch(addToFavorite(obj));
    }
  };
  const isItemAdded = (id) => {
    return basket.some((obj) => Number(obj.parentId) === Number(id));
  };
  const isLikeFavorite = (id) => {
    return favorite.some((obj) => Number(obj.parentId) === Number(id));
  };
  return (
    <>
        <div >
          <Basket setBasketModal={setBasketModal} basketModal={basketModal} />
          <Header setBasketModal={setBasketModal} />
          <Main>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    handlerAddToBasket={handlerAddToBasket}
                    handlerAddedToFavorite={handlerAddedToFavorite}
                    isItemAdded={isItemAdded}
                    isLikeFavorite={isLikeFavorite}
                  />
                }
              />
              <Route
                path="/favorite"
                element={
                  <Favorite
                    handlerAddedToFavorite={handlerAddedToFavorite}
                    handlerAddToBasket={handlerAddToBasket}
                    isItemAdded={isItemAdded}
                    isLikeFavorite={isLikeFavorite}
                  />
                }
              />
            </Routes>
          </Main>
        </div>
    </>
  );
}

export default App;
