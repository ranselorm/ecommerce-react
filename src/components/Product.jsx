import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { id, title, image, category, price } = product;
  const { cartItem, addItem } = useContext(CartContext);

  return (
    <>
      <div className="border border-gray-300 h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={image}
            alt=""
            className="max-h-[160px] group-hover:scale-110 transition duration-300"
          />
        </div>
        <div className="absolute top-2 -right-11 group-hover:right-2 p-2 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            className="w-8 h-8 flex justify-center items-center text-white bg-red-500"
            onClick={() => addItem(product, id)}
          >
            <BsPlus className="text-xl" />
          </button>
          <Link
            to={`/product/${id}`}
            className="bg-white hover:bg-slate-100 transition duration-100 w-8 h-8 flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div className="mb-[100px] text-sm md:text-xs">
        <div className="capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold my-2">{title}</h2>
        </Link>
        <div className="font-semibold">${price}</div>
      </div>
    </>
  );
};

export default Product;
