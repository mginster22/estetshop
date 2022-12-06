import React, { useState, } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { MdDone } from "react-icons/md";

export const ProductCard = ({
  card: { id, description, price, title, img },
  isItemAdded,
  isLikeFavorite,
  handlerAddToBasket,
  handlerAddedToFavorite,
}) => {
  const [isProductAdded, setIsProductAdded] = useState(isItemAdded);
  const [isLike, setIsLike] = useState(isLikeFavorite);

  const obj = { id, parentId: id, description, price, title, img };



  const handlerAdded = () => {
    setIsProductAdded(!isProductAdded);
    handlerAddToBasket(obj);
  };
  const handlerIsLike = () => {
    setIsLike(!isLike);
    handlerAddedToFavorite(obj);
  };




  return (
    <article
      className="max-w-250 flex flex-col border w-full p-4 rounded-3xl gap-4 shadow-lg hover:-translate-y-1 transition cursor-pointer bg-white shadow-orange-400 520:max-w-180 400:w-40 400:text-xs"
      key={id}
    >
      <div className="flex justify-center relative">
        <button
          className="absolute top-4 left-2 400:text-xs 400:left-0 400:top-0"
          onClick={handlerIsLike}
        >
          {isLikeFavorite(id) ? (
            <BsSuitHeartFill fontSize={"26px"} className="400:text-md" />
          ) : (
            <BsSuitHeart fontSize={"26px"} className="400:text-md" />
          )}
        </button>
        <img src={img} alt="img1" width={200} className="400:max-w-100" />
      </div>
      <h3 className="text-xl 400:text-xs 520:text-xs">{description}</h3>
      <div className="flex justify-between items-center ">
        <div className="flex flex-col">
          <span>Цена:</span>
          <b>
            {price} <span className="text-sm font-light 400:text-xs ">грн</span>
          </b>
        </div>
        <button onClick={handlerAdded}>
          {isItemAdded(id) ? (
            <MdDone fontSize={"26px"} />
          ) : (
            <HiOutlinePlus fontSize={"26px"} />
          )}
        </button>
      </div>
    </article>
  );
};
