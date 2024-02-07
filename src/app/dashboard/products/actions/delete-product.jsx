"use client";
import { toast } from "sonner";
import { API_URL } from "@/lib/constants";
import Cookies from "js-cookie";

export const DeleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        token: Cookies.get("token"),
      },
    });

    if (response.ok) {
      toast.success("Product deleted successfully");
    } else {
      toast.error("Error deleting product");
    }
  } catch (error) {
    toast.error("Error deleting product");
  }
};
