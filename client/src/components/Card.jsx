import React from "react";

const Card = ({ image, description, price, discount }) => {
  return (
    <div className="  hover:scale-105 transition-all ease-in-out duration-200 shadow-md hover:shadow-2xl rounded-md">
      <div>
        <img src={image} alt="" className="w-[15em] h-[15em]" />
      </div>
      <div>
        <p>{description}</p>
        <p>#{new Intl.NumberFormat().format(price)}</p>
        <p className="line-through text-gray-400">#{discount}</p>
        <button
          className="border-gray border hover:bg-[#fde68a] text-[#164e63] hover:text-white w-full rounde-md"
          onClick={() => dispatch(addItem())}
        >
          Add To cart
        </button>
      </div>
    </div>
  );
};

export default Card;
