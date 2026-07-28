import { useQuery } from "@tanstack/react-query";
import { getMyListings, getProduct, getProducts } from "../api/products";

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

function useMyListings() {
  return useQuery({
    queryKey: ["myListings"],
    queryFn: getMyListings,
  });
}

export { useProducts, useProduct, useMyListings };
