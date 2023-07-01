import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [totalQuantities, setTotalQuantites] = useState(0);

  function addItem(item, id) {
    // check if item already in cart
    const existingItem = cart.find((item) => {
      return item.id === id;
    });

    if (existingItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: existingItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, amount: 1 }]);
      toast.success(`(${item.title}) added to cart`);
    }
  }

  function removeFromCart(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  function increaseQuantity(id) {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart]);
    }
  }
  function decreaseQuantity(id) {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount <= 1 ? 1 : cartItem.amount - 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  }

  const totalQuantities = cart.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  const totalPrice = cart.reduce((total, item) => {
    return (total += item.price * item.amount)
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        totalQuantities,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
