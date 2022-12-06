import React from "react";
export const Info = ({
  title,
  img,
  description,
  setBasketModal,
  
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-44 ">
      <img src={img} alt="basket" />
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="max-w-xs text-lg text-center font-light text-gray-400">
        {description}
      </p>
      <button
        className="mt-6 border py-4 max-w-250 w-full rounded-3xl bg-green-400 hover:text-white transition"
        onClick={()=>setBasketModal(false)}
      >
        Вернуться назад
      </button>
    </div>
  );
};
