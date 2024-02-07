"use client";
import { Button } from "./ui/button";
import { useCart } from "@/utils/cartContext";

export default function AddToCart({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Button type="button" onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
}
