import { createContext, useContext, useReducer } from "react";
import productsList from "../data/products.json";

const ProductContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    default:
      throw new Error("Unkown action type");
  }
}

const initialValue = productsList.products;

function ProductProvider({ children }) {
  const [products, dispatch] = useReducer(reducer, initialValue);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("ProductContext was used outside of ProductProvider");
  return context;
}

export { ProductProvider, useProduct };
