import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../Components/ProductCard";

export const Favorite = ({ handlerAddedToFavorite, handlerAddToBasket,isItemAdded ,isLikeFavorite}) => {
  const { favorite } = useSelector((state) => state.favorite);

  return (
    <div className="my-4 flex flex-wrap gap-6">
      {favorite.map((card) => (
        <ProductCard
          card={card}
          key={card.id}
          favorite={favorite.some((obj)=>Number(obj.id)===Number(card.id))}
          handlerAddedToFavorite={handlerAddedToFavorite}
          handlerAddToBasket={handlerAddToBasket}
          isItemAdded={isItemAdded}
          isLikeFavorite={isLikeFavorite}
        />
      ))}
    </div>
  );
};
