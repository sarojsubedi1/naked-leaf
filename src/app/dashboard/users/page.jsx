"use client";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useUsers } from "@/lib/fetchers/users/use-auth";

export default function UserPage() {
  const { data, error } = useUsers();
  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <div className="w-40 h-40">
        <ProductSkeleton />
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
const shimmer = `
  relative overflow-hidden
  before:content-['']
  before:absolute before:inset-0 before:-translate-x-full
  before:animate-shimmer
  before:bg-gradient-to-r before:from-transparent before:via-white/35 before:to-transparent
`;

function ProductSkeleton() {
  return (
    <div
      className={`m-5 h-full w-full relative rounded-xl bg-primary ${shimmer}`}
    />
  );
}
