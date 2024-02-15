"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";

import { useEffect } from "react";
import { CheckToken } from "@/hooks/auth/check-token";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { useProducts } from "@/lib/fetchers/products";

import { Button } from "@/components/ui/button";

export default function Products() {
  const router = useRouter();
  const { user } = CheckToken();
  useEffect(() => {
    user?.role !== "admin" && router.push("/");
  });

  const { data, error } = useProducts();
  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <div className="h-full overflow-y-scroll overflow-hidden">
        <div className="flex justify-between items-center mx-2 my-4">
          <h1 className="font-bold text-xl text-center p-4">
            Products List({data.length})
          </h1>
          <Link href="/dashboard/add-product">
            <Button>Add Product</Button>
          </Link>
        </div>
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
