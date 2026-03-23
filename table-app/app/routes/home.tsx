import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import ProductsPage from "./products";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products Page" },
    { name: "description", content: "Products display page" },
  ];
}

export default function Home() {
  return < ProductsPage />;
}

