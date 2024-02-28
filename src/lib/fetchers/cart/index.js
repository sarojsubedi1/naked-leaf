import { toast } from "sonner";

import axios from "axios";
import useSWR, { mutate } from "swr";
import Cookies from "js-cookie";
import { API_URL } from "@/lib/constants";

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        token: Cookies.get("token"),
      },
    })
    .then((res) => res.data);

export const useCarts = () => {
  const { data, error } = useSWR(`${API_URL}/cart`, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export const addtocart = async (token, cart) => {
  try {
    const response = await axios.post(`${API_URL}/cart`, cart, {
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      mutate(`${API_URL}/cart`);
      toast.success("Added to cart Sucessfully");
    }
  } catch (error) {
    toast.error("Error adding to cart");
  }
};

export const increaseQty = async (token, productId) => {
  try {
    const response = await fetch(`${API_URL}/cart/in/${productId}`, {
      method: "PUT",
      headers: {
        token: token,
      },
    });

    if (response.status === 200) {
      mutate(`${API_URL}/cart`);
    }
  } catch (error) {
    console.log(error);
    toast.error("Error increasing qty");
  }
};

export const decreaseQty = async (token, productId) => {
  try {
    const response = await fetch(`${API_URL}/cart/de/${productId}`, {
      method: "PUT",
      headers: {
        token: token,
      },
    });

    if (response.status === 200) {
      mutate(`${API_URL}/cart`);
    }
  } catch (error) {
    console.log(error);
    toast.error("Error increasing qty");
  }
};

export const removefromcart = async (token, productId) => {
  try {
    const response = await fetch(`${API_URL}/cart/rm/${productId}`, {
      method: "DELETE",
      headers: {
        token: token,
      },
    });

    if (response.status === 200) {
      mutate(`${API_URL}/cart`);
      toast.success("Removed from Cart");
    }
  } catch (error) {
    console.log(error);
    toast.error("Error removing item");
  }
};
