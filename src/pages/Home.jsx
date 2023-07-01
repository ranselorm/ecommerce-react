import React, { useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );
  return (
    <>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <div key={product.id} className="w-full h-[300px] my-[50px]">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
