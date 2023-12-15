import React, { useEffect } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  //Implementacion de localStorage para persistir el valor del carrito

  const [itemCount, setItemCount] = React.useState(
    parseInt(localStorage.getItem("itemCount")) || 0
  );

  useEffect(() => {
    localStorage.setItem("itemCount", itemCount);
  }, [itemCount]);

  return (
    <CartContext.Provider value={{ itemCount, setItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
