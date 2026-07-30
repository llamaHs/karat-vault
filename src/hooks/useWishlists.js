import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addWishlist, deleteWishlist, getMyWishlists } from "../api/wishlists";

function useWishlists() {
  return useQuery({
    queryKey: ["wishlists"],
    queryFn: getMyWishlists,
  });
}

function useAddWishlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishlists"],
      });
    },
  });
}

function useDeleteWishlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishlists"],
      });
    },
  });
}

export { useWishlists, useAddWishlist, useDeleteWishlist };
