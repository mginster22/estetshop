import React from "react";
import { useSelector } from "react-redux";
// import {addToBasket,deleteBasket } from "../slice/basketSlice";

import { ProductCard } from "./ProductCard";

export const Products = ({ handlerAddToBasket, handlerAddedToFavorite ,isItemAdded,isLikeFavorite}) => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="my-4">
      <h2 className="my-4 ml-16 text-2xl font-bold tracking-5px">Все продукты</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {products.map((card) => (
          <ProductCard
            card={card}
            key={card.id}
            handlerAddedToFavorite={handlerAddedToFavorite}
            handlerAddToBasket={handlerAddToBasket}
            isItemAdded={isItemAdded}
            isLikeFavorite={isLikeFavorite}
          />
        ))}
      </div>
    </div>
  );
};
