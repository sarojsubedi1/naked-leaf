"use client";
import Product from "@/components/product";
import { useProduct } from "@/lib/fetchers/products";

const ProductPage = ({ params }) => {
  const { data, error } = useProduct(params.id);

  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <section>
      <Product product={data} />
    </section>
  );
};

export default ProductPage;
