const API_URL = "https://api.frankfurter.dev/v2/rates";

const TARGET_CURRENCIES = ["AUD", "CAD", "EUR", "GBP", "KRW"];

async function getExchangeRates() {
  const quotes = TARGET_CURRENCIES.join(",");

  const response = await fetch(`${API_URL}?base=USD&quotes=${quotes}`);

  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates");
  }

  const data = await response.json();

  const rates = data.reduce(
    (accumulator, item) => {
      accumulator[item.quote] = item.rate;
      return accumulator;
    },
    { USD: 1 }
  );

  return rates;
}

export { getExchangeRates };
