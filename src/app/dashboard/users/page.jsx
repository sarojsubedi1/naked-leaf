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
      <h1 className="text-primary font-bold text-2xl text-center m-5">
        All Users
      </h1>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
