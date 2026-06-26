import { useQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "../api/products";

function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}

function useProduct(id) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
}

export { useProducts, useProduct };
