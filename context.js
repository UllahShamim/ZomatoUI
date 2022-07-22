import React, { createContext, useState } from "react";

const CartItems = createContext();

const BasketContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    // Whole application will now have access to cart and setCart
    <CartItems.Provider value={{ cart, setCart }}>
      {children}
    </CartItems.Provider>
  );
};

export {CartItems, BasketContext};
