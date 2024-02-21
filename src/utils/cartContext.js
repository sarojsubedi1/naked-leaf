"use client";

import { toast } from "sonner";
import { createContext, useContext } from "react";
import { useLocalStorage } from "react-use";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = (product, qty) => {
    const existingItem = cart.find((item) => item._id === product._id);

    let updatedCart;
    if (existingItem) {
      existingItem.cartQty += qty;
      updatedCart = [...cart];
    } else {
      product.cartQty = qty;
      updatedCart = [...cart, product];
    }
    setCart(updatedCart);
    toast.success("Added to cart Sucessfully");
  };

  const incrementItem = (Id) => {
    const existingItem = cart.find((item) => item._id === Id);
    let updatedCart;
    if (existingItem) {
      existingItem.cartQty++;
      updatedCart = [...cart];
    }
    setCart(updatedCart);
  };

  const decrementItem = (Id) => {
    const existingItem = cart.find((item) => item._id === Id);

    if (existingItem) {
      existingItem.cartQty--;

      if (existingItem.cartQty < 1) {
        existingItem.cartQty = 1;
      }

      const updatedCart = [...cart];
      setCart(updatedCart);
    }
  };

  const removeFromCart = (Id) => {
    const updatedCart = cart.filter((item) => item._id !== Id);
    setCart(updatedCart);
  };

  const resetCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, p) => total + p.price * p.cartQty, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getCartTotal,
        incrementItem,
        decrementItem,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
