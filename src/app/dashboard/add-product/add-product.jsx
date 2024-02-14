import Cookies from "js-cookie";
import { API_URL } from "@/lib/constants";

export const AddNewProduct = async (productData) => {
  console.log(productData);
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        token: Cookies.get("token"),
      },
      body: productData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return { success: true, message: "Products added Sucessfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to add new product" };
  }
};
