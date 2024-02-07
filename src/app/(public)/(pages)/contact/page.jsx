"use client";
import { useCategories } from "@/lib/fetchers/category";

export default function Contact() {
  return (
    <div>
      <h1 className="text-primary text-2xl font-bold">Categories</h1>
      <Categories />
    </div>
  );
}

const Categories = () => {
  const { data, error, isLoading } = useCategories();

  if (isLoading) {
    return (
      <div className="m-10 flex gap-16">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-40 h-40  rounded-xl bg-slate-200 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error) return <p>Error fetching data</p>;
  return (
    <>
      <div className="m-10 flex gap-16">
        {data.categories.length > 0 ? (
          data.categories.map((category) => (
            <div
              key={category._id}
              className="bg-primary/20 w-40 h-40 text-white text-2xl font-bold grid place-items-center rounded"
            >
              <p>{category.name}</p>
            </div>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </>
  );
};
