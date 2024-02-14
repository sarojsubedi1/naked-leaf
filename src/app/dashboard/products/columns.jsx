"use client";
import Link from "next/link";
import { useCategory } from "@/lib/fetchers/category";
import { DeleteProduct } from "./actions/delete-product";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export const columns = [
  {
    accessorKey: "image",
    cell: ({ row }) => (
      <Image
        src={row.original.image}
        alt="..."
        width={100}
        height={100}
        priority
        className="object-cover aspect-square"
      />
    ),
    header: "Image",
  },
  {
    accessorKey: "_id",
    header: "Id",
  },

  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="flex justify-start p-2 hover:bg-primary/10">
            <p>Product Name</p>
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "countInStock",
    header: "Stock",
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <div
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center w-full"
        >
          <div className="flex justify-center hover:bg-primary/10 p-2">
            <p>Categories</p>
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </div>
        </div>
      );
    },
    cell: ({ row }) => {
      const Id = row.getValue("category");
      const category = Category(Id);
      return category;
    },
  },
  {
    accessorKey: "price",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <Link href={`/dashboard/edit-product/${product._id}`}>
              <DropdownMenuItem
                onClick={() => console.log(product._id)}
                className="bg-green-600 text-white focus:bg-green-600/70 focus:text-white"
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </Link>

            <DropdownMenuItem
              onClick={() => DeleteProduct(product._id)}
              className="bg-red-600 text-white focus:bg-red-600/70 focus:text-white"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
function Category(Id) {
  const { data, error } = useCategory(Id);
  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return <div className="text-center">{data.name}</div>;
}
