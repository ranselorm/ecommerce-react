import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

//import spinner
import ClipLoader from "react-spinners/ClipLoader";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const { addItem } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  // find item with id
  const product = products.find((item) => {
    return item.id === productId;
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <div className="font-semibold">Loading data...</div>
      </section>
    );
  }

  const { title, image, description, price } = product;
  return (
    <section className="h-screen pt-[32px] pb-[12px] lg:py-[32px] flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 mb-8 lg:mb-0 items-center justify-center">
            <img
              className="max-w-[200px] lg:max-w-[260px]"
              src={image}
              alt=""
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[22px] font-medium mb-2 max-w-[450px]">
              {title}
            </h1>
            <h5 className="text-red-500 font-medium text-xl mb-6">${price}</h5>
            <p className="mb-8 text-[12px]">{description}</p>
            <button
              onClick={() => addItem(product, productId)}
              className="uppercase font-medium bg-primary text-white py-3 px-6"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
