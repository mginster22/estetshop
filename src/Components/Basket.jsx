import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { BasketCard } from "./BasketCard";
import { Info } from "./Info";
import basketimg from "../assets/img/basket.png";
import orderImg from "../assets/img/order.png";
import { deleteBasketsArr, deleteBasket } from "../slice/basketSlice";
import { addToOrder } from "../slice/orderSlice";
export const Basket = ({ setBasketModal, basketModal }) => {
  const { basket } = useSelector((state) => state.basket);
  const { orderId } = useSelector((state) => state.order);

  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const dispatch = useDispatch();

  const handlerOrder = () => {
    dispatch(addToOrder(basket));
    dispatch(deleteBasketsArr());
    setIsOrderComplete(true);
    for (let i = 0; i < basket.length; i++) {
      const item = basket[i];
      dispatch(deleteBasket(item.id));
    }
  };
  const totalPrice = basket.reduce((sum, obj) => obj.price + sum, 0);

  const openBasket = basketModal
    ? "fixed bg-light-black w-full h-full z-50  visible opacity-1 transition-all ease-in-out"
    : "fixed bg-light-black w-full h-full z-50 invisible opacity-0  transition-all ease-in-out";

  return (
    <div className={openBasket} onClick={() => setBasketModal(false)}>
      <div
        className="absolute w-96 bg-white h-full right-0 flex flex-col flex-auto 400:w-72"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-bold ml-8 text-2xl mt-4">Корзина</h2>
        {basket.length > 0 ? (
          <div>
            <div className="h-370 overflow-scroll py-2 mt-6  border-t-2 border-b-2">
              {basket.map((card) => (
                <BasketCard card={card} key={card.id} />
              ))}
            </div>
            <div className="p-4 flex flex-col gap-6 mt-16 400:mt-4 400:p-0">
              <div className="flex gap-1 items-center ml-4">
                <span className="text-xl 400:text-md">Итого: </span>
                <div className="w-36 border-dotted border h-0 mt-4 400:w-20"></div>
                <div className="400:text-sm ">{totalPrice} грн</div>
              </div>
              <div className="flex gap-1 items-center  ml-4">
                <span className="text-xl 400:text-md">Налог 5%: </span>
                <div className="w-36 border-dotted border h-0 mt-4  400:w-20"></div>
                <div className="400:w-20">{(totalPrice / 100) * 5} грн</div>
              </div>
              <button
                className="flex gap-4 justify-center border items-center py-4 rounded-3xl bg-green-400 hover:text-white transition pl-6 400:max-w-200 400:p-2 400:translate-x-11"
                onClick={handlerOrder}
              >
                Оформить заказ <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            setBasketModal={setBasketModal}
            description={
              isOrderComplete
                ? `Ваш заказ ${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            img={isOrderComplete ? orderImg : basketimg}
          />
        )}
      </div>
    </div>
  );
};
