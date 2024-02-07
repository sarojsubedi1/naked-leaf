import axios from "axios";
import { API_URL } from "@/lib/constants";

export async function fetchCategory(id) {
  const response = await axios.get(`${API_URL}/category/${id}`);
  console.log(response.data);
  return response.data;
}
