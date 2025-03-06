import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([
    { id: 1, name: "Велосипед", price: 1000, count: 1 },
    { id: 2, name: "Самокат", price: 700, count: 1 },
    { id: 3, name: "Ролики", price: 1300, count: 2 },
    { id: 4, name: "Сноуборд", price: 19000, count: 4 }
  ]);

  const decreaseCount = (id) => {
    setCart((prevCart) => 
      prevCart.map(item => (
        item.id === id ? { ...item, count: item.count - 1 } : item 
        )
      )
    );
  };

  const increaseCount = (id) => {
    setCart((prevCart) => 
      prevCart.map(item => (
        item.id === id ? { ...item, count: item.count + 1 } : item 
        )
      )
    );
  };

  const deleteById = (id) => {
    setCart((prevCart) => 
      prevCart.filter(item => item.id != id)
    );
  };

  const addNewItem = (itemName, itemPrice, itemQuantity) => {
    setCart((prevCart) => 
      [...prevCart, {id: Date.now(), name: itemName, price: itemPrice, count: itemQuantity}] // Создаём новый массив с добавленным элементом
    );
  };

  return (
    <CartContext.Provider value={{ cart, decreaseCount, increaseCount, deleteById, addNewItem }}>
      {children}
    </CartContext.Provider>
  );
}
