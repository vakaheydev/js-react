import React, { useContext } from 'react';
import { CartContext } from "./AppContext";

export default function AddProductItem(props) {
  const { addNewItem } = useContext(CartContext);

  function press() {
    let name = prompt("Введите название товара");
    let price = parseInt(prompt("Введите цену товара"));

    addNewItem(name, price, 1);
  }

  return (
    <div>
      <button onClick={press} style={{"font-size": "36px", "margin-top" : "24px"}}>Добавить товар</button>
    </div>
  );
}