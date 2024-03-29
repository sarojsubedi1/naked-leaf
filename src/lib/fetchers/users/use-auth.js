import axios from "axios";
import useSWR from "swr";
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
