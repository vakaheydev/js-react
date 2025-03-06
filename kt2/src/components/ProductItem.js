import React, { useContext } from 'react';
import { CartContext } from "./AppContext";
import styles from "../styles/ProductItem.module.css";

export default function ProductItem(props) {
  const { cart, decreaseCount, increaseCount, deleteById } = useContext(CartContext);
  
  function pressMinus(id, currentCnt) {
    if (canBeDecreased(currentCnt)) {
        decreaseCount(id);

        if (currentCnt == 1) {
            deleteById(id);
        }
    }
  }

  function pressPlus(id, currentCnt) {
    if (canBeIncreased(currentCnt)) {
        increaseCount(id);
    }
  }

  function canBeIncreased(currentCnt) {
    return currentCnt < 25;
  }

  function canBeDecreased(currentCnt) {
    return currentCnt > 0;
  }

  function handleDoubleClick(id) {
    deleteById(id);
  }

  return (
    <div>
        <h1>Список товаров</h1>
        <div className={styles['item-container']}>
            {cart.map((item) => (
            <div className={styles['item-block']} id={item.id} >
                <p onDoubleClick={() => handleDoubleClick(item.id)}>
                    {item.name}
                </p>
                <p onDoubleClick={() => handleDoubleClick(item.id)}>
                    Price: {item.price} 
                </p>
                <p>
                    <button onClick={() => pressMinus(item.id, item.count)}>-</button>
                    {item.count}
                    <button onClick={() => pressPlus(item.id, item.count)}>+</button>
                </p>
            </div>
            ))}
        </div>
    </div>
  );
}