"use client";
import { useCategories } from "@/lib/fetchers/category";

const SelectCategory = ({ setCategory }) => {
  const { data, error, isLoading } = useCategories();

  if (isLoading) {
    return (
      <div className="w-40 h-14 rounded-xl bg-slate-200 animate-pulse"></div>
    );
  }

  if (error) return <p>Error fetching data</p>;
  return (
    <>
      <select
        id="category"
        onChange={(e) => setCategory(e.target.value)}
        className="bg-primary/20 px-4 rounded-xl"
      >
        <option value="">All Categories</option>
        {data.categories.length > 0 ? (
          data.categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </select>
    </>
  );
};
export default SelectCategory;
