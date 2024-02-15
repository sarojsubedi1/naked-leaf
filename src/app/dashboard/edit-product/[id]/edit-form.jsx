"use client";

import { toast } from "sonner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "@/components/svg";

import { CategoryData } from "@/lib/fetchers/category";
import Edit from "./edit-product";

const EditProductForm = ({ product }) => {
  const router = useRouter();
  const Categories = CategoryData();

  const defaultValues = {
    title: product.title,
    featured: product.featured,
    dec: product.dec,
    countInStock: product.countInStock,
    price: product.price,
    category: product.category,
    image: null,
  };

  const { register, handleSubmit, formState } = useForm({
    defaultValues,
  });
  const { isSubmitting } = formState;

  const onSubmit = async (formData) => {
    const changedValues = {};

    for (let key in formData) {
      if (key === "image" && formData.image instanceof File) {
        changedValues.image = formData.image;
      } else if (formData[key] !== defaultValues[key]) {
        changedValues[key] = formData[key];
      }
    }

    const productData = new FormData();

    for (let key in changedValues) {
      if (key === "image") {
        productData.append(key, changedValues[key][0]);
      } else {
        productData.append(key, String(changedValues[key]));
      }
    }
    const result = await Edit(productData, product._id);
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
                      <Label htmlFor="featured">Featured</Label>
                      <select
                        className="rounded-none w-full px-3 py-2 border border-gray-300 sm:text-sm"
                        name="featured"
                        id="featured"
                        {...register("featured")}
                      >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
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
            </div>

            <div className="flex-1">
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

              <div>
                <h2 className="font-semibold text-lg p-4">Product Images</h2>
                <div className="border border-primary rounded mx-6">
                  <div className="p-5 flex">
                    <div className="mt-4">
                      <p className="text-sm font-semibold">Current Image</p>
                      <Image
                        src={product.image}
                        alt="Product image"
                        width={500}
                        height={500}
                        priority
                        className="w-20 h-20 aspect-square"
                      />
                      <Label htmlFor="product-name">Change Image</Label>
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
                <Button variant="outline" onClick={() => router.back()}>
                  Cancel
                </Button>
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
                      <p className="ml-2">Updating...</p>
                    </>
                  ) : (
                    <p>Update</p>
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

export default EditProductForm;
