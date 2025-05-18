import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewItem } from '../features/cartSlice';

export default function AddProductItem() {
  const dispatch = useDispatch();

  function press() {
    let name = prompt("Введите название товара");
    let price = parseInt(prompt("Введите цену товара"));

    if (name && !isNaN(price)) {
      dispatch(addNewItem({ name, price, count: 1 }));
    }
  }

  return (
      <div>
        <button onClick={press} style={{ fontSize: "36px", marginTop: "24px" }}>Добавить товар</button>
      </div>
  );
}
