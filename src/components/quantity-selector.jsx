"use client";

import { useCart } from "@/utils/cartContext";

export const QuantitySelector = ({ products }) => {
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
          onClick={() => handleDecrementQty(products.product._id)}
          className="bg-white py-2 px-4 border rounded-lg"
        >
          -
        </button>
        <p className="mx-5 font-semibold">{products.cartQty}</p>
        <button
          onClick={() => handleIncrementQty(products.product._id)}
          className="bg-white py-2 px-4 border rounded-lg"
        >
          +
        </button>
      </div>
    </>
  );
};
