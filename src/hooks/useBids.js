import { useQuery } from "@tanstack/react-query";
import { getMyBids } from "../api/bids";

function useMyBids() {
  return useQuery({
    queryKey: ["myBids"],
    queryFn: getMyBids,
  });
}

export { useMyBids };
