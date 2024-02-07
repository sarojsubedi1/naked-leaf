import axios from "axios";
import useSWR from "swr";
import { API_URL } from "@/lib/constants";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useCategories = () => {
  const { data, error } = useSWR(`${API_URL}/category`, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export const useCategory = (id) => {
  const { data, error } = useSWR(`${API_URL}/category/${id}`, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export const CategoryData = () => {
  const { data } = useCategories();

  if (!data) {
    return [];
  }

  return data.categories;
};
