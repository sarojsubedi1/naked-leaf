"use client";

import axios from "axios";

import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { CategoryData } from "@/lib/fetchers/category";
import { AddNewProduct } from "./add-product";

const AddProduct = () => {
  const router = useRouter();
  const Categories = CategoryData();

  const schema = z.object({
    title: z.string(),
    dec: z.string(),
    category: z.string(),
    countInStock: z.number(),
    price: z.number(),
    image: z.unknown(),
  });

  const { register, handleSubmit, reset, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const { isSubmitting } = formState;

  const onSubmit = async (formData) => {
    const productData = new FormData();
    productData.append("title", formData.title);
    productData.append("dec", formData.dec);
    productData.append("category", formData.category);
    productData.append("countInStock", String(formData.countInStock));
    productData.append("price", String(formData.price));
    productData.append("image", formData.image[0]);

    const result = await AddNewProduct(productData);

    if (result.success) {
      router.push("/dashboard/products");
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <>
      <div className="h-full overflow-y-scroll">
        <h2 className="font-bold text-xl p-4">Add New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex">
            <div className="flex-1">
              <div>
                <h2 className="font-semibold text-lg p-4">Product Details</h2>
                <div className="border border-primary rounded mx-6">
                  <div className="p-5">
                    <div className="mt-4">
                      <Label htmlFor="product-name">Product Name</Label>
                      <Input
                        className="rounded-none w-full px-3 py-2 border border-gray-300 sm:text-sm"
                        id="product-name"
                        name="product-name"
                        required
                        autoComplete="title"
                        type="text"
                        {...register("title")}
                      />
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="product-name">Product Description</Label>
                      <Textarea
                        className="rounded-none w-full px-3 py-2 border border-gray-300  sm:text-sm"
                        id="product-description"
                        name="product-description"
                        required
                        {...register("dec")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-lg p-4">Category</h2>
                <div className="border border-primary rounded mx-6">
                  <div className="p-5">
                    <div className="mt-4">
                      <Label htmlFor="category">Product Category</Label>
                      <select
                        id="category"
                        name="category"
                        {...register("category")}
                        className="bg-primary/20 outline-primary w-full px-3 py-2"
                      >
                        <option value="">Select a Category</option>
                        {Categories.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-lg p-4">Inventory</h2>
                <div className="border border-primary rounded mx-6">
                  <div className="p-5">
                    <div className="mt-4">
                      <Label htmlFor="product-quantity">Product Quantity</Label>
                      <Input
                        className="rounded-none w-full px-3 py-2 border border-gray-300 sm:text-sm"
                        id="product-quantity"
                        name="product-quantity"
                        type="number"
                        {...register("countInStock", {
                          valueAsNumber: true,
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <h2 className="font-semibold text-lg p-4">Product Images</h2>
                <div className="border border-primary rounded mx-6">
                  <div className="p-5 flex">
                    <div className="mt-4">
                      <Label htmlFor="product-name">Image</Label>
                      <Input
                        className="rounded-none px-3 py-2 border border-gray-300 sm:text-sm"
                        id="product-image"
                        accept="image/*"
                        name="product-image"
                        type="file"
                        {...register("image")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-lg p-4">Pricing</h2>
                <div className="border border-primary rounded mx-6">
                  <div className="p-5">
                    <div className="mt-4">
                      <Label htmlFor="product-name">Price</Label>
                      <Input
                        className="rounded-none w-full px-3 py-2 border border-gray-300 sm:text-sm"
                        id="product-price"
                        name="product-price"
                        required
                        type="Number"
                        {...register("price", { valueAsNumber: true })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-6 mx-4 flex justify-between">
                <Button variant="outline">Discard</Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={
                    isSubmitting ? "cursor-progress" : "cursor-pointer"
                  }
                >
                  {isSubmitting ? (
                    <>
                      <Loader />
                      <p className="ml-2">Adding...</p>
                    </>
                  ) : (
                    <p>Add Product</p>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

const Loader = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="40px"
      height="40px"
      viewBox="0 0 50 50"
      style={{ enableBackground: "new 0 0 50 50" }}
      xmlSpace="preserve"
    >
      <path
        fill="white"
        d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default AddProduct;
