"use client";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { QuantitySelector } from "./quantity-selector";
import { Button } from "./ui/button";

import { CheckToken } from "@/hooks/auth/check-token";
import { useCart } from "@/utils/cartContext";
import { useCarts } from "@/lib/fetchers/cart";

export default function CartProduct() {
  const { cart, getCartTotal, removeFromCart } = useCart();

  const cartData = CartData();

  const mergedCart = cartData.length > 0 ? cartData : cart;

  const total = getCartTotal(mergedCart);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  if (mergedCart.length > 0) {
    return (
      <>
        {mergedCart.map((products) => (
          <div key={products.product._id} className="border-b p-4">
            <div className="flex gap-4 justify-between">
              <div className="w-36">
                <Image
                  priority
                  src={products.product.image}
                  alt="product image"
                  width={500}
                  height={500}
                  className="object-cover h-auto w-full p-1 aspect-square"
                />
              </div>
              <div className="max-sm:text-sm flex-1">
                <h3 className="text-lg max-sm:textbase font-semibold">
                  {products.product.title}
                </h3>
                <p className="text-gray-600 max-sm:hidden">
                  {products.product.dec}
                </p>
                <p>${products.product.price * products.cartQty}</p>
                <QuantitySelector products={products} />
              </div>
              <div className="flex flex-col justify-end">
                <Button
                  onClick={() => handleRemoveFromCart(products.product._id)}
                  className="bg-red-600 hover:bg-red-500 "
                >
                  <Trash2 className="text-white" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        <div className="p-3 flex justify-between bg-primary/10 mt-5">
          <div className="font-bold">Total</div>
          <div className="font-semibold">${total}</div>
        </div>
      </>
    );
  }
  return <p>nothing in cart</p>;
}

function CartData() {
  const { isAuthenticated } = CheckToken();

  const { data, isLoading } = useCarts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? data.items : [];
}
