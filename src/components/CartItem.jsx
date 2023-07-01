import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const finalPrice = price * amount;

  return (
    <div className="flex gap-x-4 px-5  lg:px-6 border-b border-gray-200 font-light text-gray-500">
      <div className="w-full min-h-[150px] flex gap-x-4 items-center">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img src={image} alt="" className="max-w-[80px]" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h6 className="text-xs uppercase font-medium max-w-[200px] text-primary">
              {title}
            </h6>
            <div>
              <IoMdClose
                className="text-gray-500 hover:text-red-500 transition cursor-pointer"
                onClick={() => removeFromCart(id)}
              />
            </div>
          </div>
          {/* quantity & price */}
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-x-4 border border-gray-100 p-1">
              <IoMdRemove
                className="cursor-pointer"
                onClick={() => decreaseQuantity(id)}
              />
              <span className="text-xs font-bold">{amount}</span>
              <IoMdAdd
                className="cursor-pointer"
                onClick={() => increaseQuantity(id)}
              />
            </div>
            <p className="text-sm">${price}</p>
            <p className="text-sm font-medium">${finalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
