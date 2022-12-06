import React from "react";
import { SlBasket } from "react-icons/sl";
import { BsSuitHeart } from "react-icons/bs";
import { TbUserCircle } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/img/logo.svg";

export const Header = ({ setBasketModal }) => {
  const { basket } = useSelector((state) => state.basket);
  const totalPrice = basket.reduce((sum, obj) => obj.price + sum, 0);
  return (
    <header className="border-b-4 ">
      <div className="container m-auto max-w-7xl h-32 flex items-center justify-between p-5 ">
        <div className="flex gap-5 items-center ">
          <Link to="/" className="400:hidden 520:hidden">
            <img
              src={logo}
              alt="logo"
              className="400:max-w-full 400:w-14 w-14"
            />
          </Link>
          <Link to='/'>
            <h2 className="flex flex-col font-bold text-xl tracking-5px 400:text-md 400:max-w-100">
              ESTET
              <span className="text-sm font-light text-gray-400 400:text-xs 520:max-w-250">
                Магазин Чоловічого Одягу
              </span>
            </h2>
          </Link>
        </div>
        <div className="flex gap-4 items-center text-2xl 400:text-md 400:flex-reverse 400:ml-4">
          <div className="flex gap-2 items-center cursor-pointer">
            <SlBasket onClick={() => setBasketModal(true)} />
            <div className="text-sm 400:text-sm ">
              <b className="text-2xl 400:text-sm ">{totalPrice}</b>
              <span>грн</span>
            </div>
          </div>
          <Link to="/favorite">
            <BsSuitHeart />
          </Link>
          <TbUserCircle />
        </div>
      </div>
    </header>
  );
};
