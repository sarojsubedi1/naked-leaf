"use client";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { QuantitySelector } from "./quantity-selector";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <div className=" md:flex">
          <Table className="md:w-2/3">
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mergedCart.map((products) => (
                <TableRow key={products.product._id}>
                  <TableCell>
                    <div className="flex gap-10 items-center">
                      <div className="w-20">
                        <Image
                          priority
                          src={products.product.image}
                          alt="product image"
                          width={500}
                          height={500}
                          className="object-cover h-auto w-full p-1 aspect-square"
                        />
                      </div>
                      <div className="font-bold">{products.product.title}</div>
                    </div>
                  </TableCell>
                  <TableCell>${products.product.price}</TableCell>
                  <TableCell>
                    <QuantitySelector products={products} />
                  </TableCell>
                  <TableCell>
                    ${products.product.price * products.cartQty}
                  </TableCell>

                  <TableCell className="">
                    <Button
                      onClick={() => handleRemoveFromCart(products.product._id)}
                      className="bg-red-600 hover:bg-red-500 "
                    >
                      <Trash2 className="text-white" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="bg-primary/30 md:w-1/3 p-4">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-center font-bold">Order Summary</h3>
                <div className="flex justify-between border-b border-white mt-2">
                  <div className="font-medium">Subtotal</div>
                  <div className="font-medium">${total}</div>
                </div>
                <div className="flex justify-between border-b border-white mt-2">
                  <div className="font-medium">Shipping</div>
                  <div className="font-medium">Free</div>
                </div>
              </div>

              <div>
                <div className="flex justify-between p-4 mb-5 bg-secondary">
                  <div className="font-bold">Total</div>
                  <div className="font-semibold">${total}</div>
                </div>
                <Button className="p-3 w-full">Check Out</Button>
              </div>
            </div>
          </div>
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
