import { createContext, useContext, useState } from "react";
import { CURRENCY_META } from "../constants/currencyMETA";

const CurrencyContext = createContext();

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
