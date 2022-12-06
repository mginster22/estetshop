import React from "react";
import { Products } from "../Components/Products";

export const Home = ({
  handlerAddToBasket,
  handlerAddedToFavorite,
  isItemAdded,
  isLikeFavorite,
}) => {
  return (
    <div>
      <Products
        handlerAddToBasket={handlerAddToBasket}
        handlerAddedToFavorite={handlerAddedToFavorite}
        isItemAdded={isItemAdded}
        isLikeFavorite={isLikeFavorite}
      />
    </div>
  );
};
