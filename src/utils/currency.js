import { CURRENCY_META } from "../constants/currencyMETA";

function convertFromUsd(amountInUsd, currency, exchangeRates) {
  if (amountInUsd == null) return 0;

  const rate = exchangeRates?.[currency];

  if (!rate) return amountInUsd;

  return amountInUsd * rate;
}

function convertToUsd(amount, currency, exchangeRates) {
  if (currency === "USD") return amount;

  const rate = exchangeRates?.[currency];

  if (!rate) {
    throw new Error(`Exchange rate for ${currency} is unavailable.`);
  }
  return amount / rate;
}

function formatCurrency(amount, currency) {
  const symbol = CURRENCY_META[currency].symbol;

  const formattedNumber = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 0,
  }).format(Math.round(amount));

  return `${symbol}${formattedNumber}`;
}

export { convertFromUsd, convertToUsd, formatCurrency };
