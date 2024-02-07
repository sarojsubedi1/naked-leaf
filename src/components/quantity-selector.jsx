"use client";

import { useCart } from "@/utils/cartContext";

export const QuantitySelector = ({ product }) => {
  const { incrementItem, decrementItem } = useCart();

  const handleIncrementQty = (id) => {
    incrementItem(id);
  };

  const handleDecrementQty = (id) => {
    decrementItem(id);
  };
  return (
    <>
      <div className="flex justify-start items-center">
        <button
          onClick={() => handleDecrementQty(product._id)}
          className="bg-white py-2 px-4 border rounded-lg"
        >
          -
        </button>
        <p className="mx-5 font-semibold">{product.cartQty}</p>
        <button
          onClick={() => handleIncrementQty(product._id)}
          className="bg-white py-2 px-4 border rounded-lg"
        >
          +
        </button>
      </div>
    </>
  );
};
