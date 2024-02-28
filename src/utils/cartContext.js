"use client";

import { toast } from "sonner";
import { createContext, useContext } from "react";
import { useLocalStorage } from "react-use";
import { CheckToken } from "@/hooks/auth/check-token";
import {
  addtocart,
  increaseQty,
  decreaseQty,
  removefromcart,
} from "@/lib/fetchers/cart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { token, isAuthenticated } = CheckToken();

  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = (product, qty) => {
    if (isAuthenticated && token) {
      const items = { productId: product._id, cartQty: qty };
      addtocart(token, items);
    } else {
      const existingItem = cart.find(
        (items) => items.product._id === product._id,
      );

      let cartQty;
      let updatedCart;
      if (existingItem) {
        cartQty += qty;
        updatedCart = [...cart];
      } else {
        cartQty = qty;
        updatedCart = [...cart, { product, cartQty }];
      }
      setCart(updatedCart);
      toast.success("Added to cart Sucessfully");
    }
  };

  const incrementItem = (Id) => {
    if (isAuthenticated && token) {
      increaseQty(token, Id);
    } else {
      const index = cart.findIndex((item) => item.product._id === Id);

      const updatedCart = [...cart];

      updatedCart[index].cartQty++;

      setCart(updatedCart);
    }
  };

  const decrementItem = (Id) => {
    if (isAuthenticated && token) {
      decreaseQty(token, Id);
    } else {
      const index = cart.findIndex((item) => item.product._id === Id);

      const updatedCart = [...cart];

      if (updatedCart[index].cartQty > 1) {
        updatedCart[index].cartQty--;
      } else {
        updatedCart.splice(index, 1);
        toast.success("Removed from cart.");
      }

      setCart(updatedCart);
    }
  };

  const removeFromCart = (Id) => {
    if (isAuthenticated && token) {
      removefromcart(token, Id);
    } else {
      const updatedCart = cart.filter((item) => item.product._id !== Id);
      setCart(updatedCart);
      toast.success("Removed from cart.");
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, p) => total + p.product.price * p.cartQty, 0);
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
