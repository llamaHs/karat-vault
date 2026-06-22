import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";

function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}

export { useProducts };
