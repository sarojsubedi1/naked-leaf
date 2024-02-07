import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useCategory = () => {
  const { data, error } = useSWR("http://localhost:8000/api/category", fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export const CategoryData = () => {
  const { data } = useCategory();

  if (!data) {
    return [];
  }

  return data.categories;
};
