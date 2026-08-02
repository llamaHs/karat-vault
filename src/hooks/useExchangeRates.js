import { useQuery } from "@tanstack/react-query";
import { getExchangeRates } from "../api/exchangeRates";

function useExchangeRates() {
  return useQuery({
    queryKey: ["exchangeRates"],
    queryFn: getExchangeRates,
    staleTime: 1000 * 60 * 60,
  });
}

export { useExchangeRates };
