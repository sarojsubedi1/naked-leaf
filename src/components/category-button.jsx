"use client";
import { useCategories } from "@/lib/fetchers/category";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoriesButton = () => {
  const router = useRouter();
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
      <div className="m-10 flex gap-16" onClick={() => router.push("/shop")}>
        {data.categories.length > 0 ? (
          data.categories.map((category) => (
            <div key={category._id} className="w-40 h-40 rounded bg-primary/20">
              <Image
                src={category.icon}
                alt="category icon"
                width={500}
                height={500}
                className="w-auto aspect-square p-2"
              />
              <p className="text-center font-bold mt-1">{category.name}</p>
            </div>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </>
  );
};
export default CategoriesButton;
