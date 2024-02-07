import { API_URL } from "@/lib/constants";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useAuth = (id) => {
  const { data, error } = useSWR(`${API_URL}/users/${id}`, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export const useUsers = () => {
  const { data, error } = useSWR(`${API_URL}/users/all`, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
