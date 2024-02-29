"use client";
import { useCategories } from "@/lib/fetchers/category";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectCategory = ({ category, setCategory }) => {
  const { data, error, isLoading } = useCategories();

  if (isLoading) {
    return (
      <div className="w-40 h-14 rounded-xl bg-slate-200 animate-pulse"></div>
    );
  }

  if (error) return <p>Error fetching data</p>;

  const handleChange = (value) => {
    let fValue;
    if (value === 1) {
      fValue = "";
    } else {
      fValue = value;
    }
    setCategory(fValue);
  };

  return (
    <>
      <Select onValueChange={handleChange} value={category}>
        <SelectTrigger className="w-[180px] bg-primary/20">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value={1}>All</SelectItem>
            {data.categories.length > 0 ? (
              data.categories.map((category) => (
                <SelectItem key={category._id} value={category._id}>
                  {category.name}
                </SelectItem>
              ))
            ) : (
              <p>No categories found.</p>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
export default SelectCategory;
