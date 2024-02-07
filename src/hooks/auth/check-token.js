import { useCookie } from "react-use";
import { jwtDecode } from "jwt-decode";

const decodeJwt = (jwt) => jwtDecode(jwt);

const validateJwt = (jwt) => {
  if (!jwt) return { user: null, isAuthenticated: false };

  const decoded = decodeJwt(jwt);

  return { user: decoded, isAuthenticated: true };
};

export const CheckToken = () => {
  const [token] = useCookie("token");

  const { user, isAuthenticated } = validateJwt(token);

  return { token, user, isAuthenticated };
};
