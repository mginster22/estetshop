import React from "react";
import { deleteBasket } from "../slice/basketSlice";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

export const BasketCard = ({ card }) => {
  const dispatch = useDispatch();
  return (
    <article
      className="border p-4 max-w-xs ml-7 mt-4 flex items-center rounded-3xl shadow-lg justify-between  400:mr-5 400:gap-2"
    >
      <img src={card.img} width={80} alt="img" className="400:w-12"/>
      <div className="flex flex-col">
        <span className="text-sm max-w-150 overflow-ellipsis overflow-hidden 400:text-10">
          {card.description}
        </span>
        <b className="text-sm 400:text-10 400:flex 400:justify-start  400:underline ">{card.price} <span>грн</span></b>
      </div>
      <button onClick={() => dispatch(deleteBasket(card.id))} className='400:ml-auto'>
        <MdDeleteOutline fontSize={25} />
      </button>
    </article>
  );
};
