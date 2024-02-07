"use client";
import { toast } from "sonner";
import { API_URL } from "@/lib/constants";
import Cookies from "js-cookie";

export const DeleteUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        token: Cookies.get("token"),
      },
    });

    if (response.ok) {
      toast.success("User deleted successfully");
    } else {
      toast.error("Error deleting user");
    }
  } catch (error) {
    toast.error("Error deleting user");
  }
};
