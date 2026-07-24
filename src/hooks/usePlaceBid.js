import { useMutation, useQueryClient } from "@tanstack/react-query";
import { placeBid } from "../api/bids";

function usePlaceBid() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ productId, bidAmount }) => placeBid(productId, bidAmount),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      queryClient.invalidateQueries({
        queryKey: ["product", variables.productId],
      });
    },
  });
}

export { usePlaceBid };
