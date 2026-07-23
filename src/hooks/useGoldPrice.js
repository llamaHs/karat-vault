import { useQuery } from "@tanstack/react-query";
import { useCurrency } from "../contexts/CurrencyContext";
import { getGoldPrice } from "../api/gold";

function useGoldPrice() {
  const { currency } = useCurrency();

  return useQuery({
    queryKey: ["goldPrice", currency],
    queryFn: () => getGoldPrice(currency),
    staleTime: 1000 * 30,
  });
}

export { useGoldPrice };
