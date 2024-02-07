"use client";
import { useCart } from "@/utils/cartContext";
import dynamic from "next/dynamic";

const CartItems = dynamic(() => import("../../../../components/cart-items"), {
  ssr: false,
});

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="m-10">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <CartItems products={cart} />
    </div>
  );
}
