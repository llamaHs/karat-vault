import { useCurrency } from "../contexts/CurrencyContext";
import { convertFromUsd, formatCurrency } from "../utils/currency";
import { useExchangeRates } from "./useExchangeRates";

function useCurrencyFormatter() {
  const { currency, currencySymbol } = useCurrency();
  const { data: exchangeRates } = useExchangeRates();

  function displayPrice(amountInUsd) {
    const convertedPrice = convertFromUsd(amountInUsd, currency, exchangeRates);

    return formatCurrency(convertedPrice, currency);
  }

  return { displayPrice, currency, currencySymbol, exchangeRates };
}

export { useCurrencyFormatter };
