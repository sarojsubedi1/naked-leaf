import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);
const Url = "https://naked-leaf-api.vercel.app/api/products";

export const useProducts = () => {
  const { data, error } = useSWR(Url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export const useProduct = (id) => {
  const { data, error } = useSWR(`${Url}+${id}`, fetcher, {
    cache: "no-store",
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
