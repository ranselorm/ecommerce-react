import React, { useContext } from "react";
import { Link } from "react-router-dom";

//import icons
import { IoMdArrowBack } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

//import components
import CartItem from "./CartItem";

//import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, totalQuantities, totalPrice } =
    useContext(CartContext);
  return (
    <>
      <div
        className={` ${
          isOpen ? "right-0" : "-right-full"
        } w-full fixed top-0 h-full shadow-2xl bg-white md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 px-4 lg:px-[35px] z-20`}
      >
        <div className="flex justify-between items-center border-b py-6">
          <div
            className="w-8 h-8 flex justify-center items-center cursor-pointer"
            onClick={handleClose}
          >
            <IoMdArrowBack className="text-2xl" />
          </div>
          <h6 className="uppercase text-sm font-semibold">
            Shopping Bag <span>({totalQuantities})</span>
          </h6>
        </div>

        {/* CartItem */}
        <div className="flex flex-col h-[650px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b border-gray-500">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        {/* end of CartItem */}

        <div className="flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex items-center justify-between">
            <h6 className="font-semibold uppercase text-sm">
              <span className="mr-2">Total:</span>$
              {parseFloat(totalPrice).toFixed(2)}
            </h6>
            <div
              className="bg-red-500 cursor-pointer w-8 h-8 flex items-center justify-center text-white text-xl"
              onClick={clearCart}
            >
              <FiTrash2 />
            </div>
          </div>
          <div className="bg-primary py-2 text-white flex justify-center items-center uppercase">
            Check Out
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
