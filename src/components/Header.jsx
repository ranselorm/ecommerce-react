import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//context
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
//import cart icon
import { BsBag } from "react-icons/bs";
import Logo from "../img/logo.svg";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { totalQuantities } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);
  console.log(totalQuantities);

  // nav scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white shadow-xl" : "bg-none"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex justify-between items-center h-full py-4">
        <div>
          <img src={Logo} alt="" className="w-[30px]" />
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="text-2xl relative">
          <BsBag className="cursor-pointer" />
          <div className="absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] bg-red-500 text-white rounded-full flex justify-center items-center">
            {totalQuantities}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
