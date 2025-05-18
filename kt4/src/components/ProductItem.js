import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount, deleteById } from '../features/cartSlice';
import styles from "../styles/ProductItem.module.css";

export default function ProductItem() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    function pressMinus(id, currentCnt) {
        dispatch(decreaseCount(id));
    }

    function pressPlus(id, currentCnt) {
        if (currentCnt < 25) {
            dispatch(increaseCount(id));
        }
    }

    function handleDoubleClick(id) {
        dispatch(deleteById(id));
    }

    return (
        <div>
            <h1>Список товаров</h1>
            <div className={styles['item-container']}>
                {cart.map(item => (
                    <div className={styles['item-block']} key={item.id}>
                        <p onDoubleClick={() => handleDoubleClick(item.id)}>{item.name}</p>
                        <p onDoubleClick={() => handleDoubleClick(item.id)}>Price: {item.price}</p>
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
