"use client";
import EditProductForm from "./edit-form";
import { useProduct } from "@/lib/fetchers/products";

const AddProduct = ({ params }) => {
  const { data, error } = useProduct(params.id);

  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <EditProductForm product={data} />
    </>
  );
};

export default AddProduct;
