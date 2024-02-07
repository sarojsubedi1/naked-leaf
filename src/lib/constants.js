import { LayoutDashboard, Users, Package } from "lucide-react";

export const LINKS = [
  { title: "Home", url: "/" },
  { title: "Shop", url: "/shop" },
  { title: "Contact Us", url: "/contact" },
];

export const DLINKS = [
  { title: "Dashboard", url: "/dashboard", icon: <LayoutDashboard /> },
  { title: "Users", url: "/dashboard/users", icon: <Users /> },
  { title: "Products", url: "/dashboard/products", icon: <Package /> },
];

export const API_URL = "https://naked-leaf-api.vercel.app/api";
