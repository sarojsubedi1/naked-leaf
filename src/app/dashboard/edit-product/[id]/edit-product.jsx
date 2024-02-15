import Cookies from "js-cookie";
import { API_URL } from "@/lib/constants";

const Edit = async (productData, id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
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
export default Edit;
