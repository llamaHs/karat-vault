import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

const CURRENCY_META = {
  USD: { symbol: "$", label: "USD $ 🇺🇸" },
  AUD: { symbol: "$", label: "AUD $ 🇦🇺" },
  CAD: { symbol: "$", label: "CAD $ 🇨🇦" },
  EUR: { symbol: "€", label: "EUR € 🇪🇺" },
  GBP: { symbol: "£", label: "GBP £ 🇬🇧" },
  KRW: { symbol: "₩", label: "KRW ₩ 🇰🇷" },
};

function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("USD");

  const currencySymbol = CURRENCY_META[currency].symbol;
  const currencyLabel = CURRENCY_META[currency].label;

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        currencySymbol,
        currencyLabel,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

function useCurrency() {
  const context = useContext(CurrencyContext);

  if (context === undefined)
    throw new Error("CurrencyContext was used outside the CurrencyProvider");

  return context;
}

export { CurrencyProvider, useCurrency };
