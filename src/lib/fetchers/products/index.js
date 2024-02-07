import axios from "axios";
import useSWR from "swr";

import { API_URL } from "@/lib/constants";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useProducts = () => {
  const { data, error } = useSWR(`${API_URL}/products`, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export const useProduct = (id) => {
  const { data, error } = useSWR(`${API_URL}/products/${id}`, fetcher);
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
