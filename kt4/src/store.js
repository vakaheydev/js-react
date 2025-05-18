import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// Сохраняем cart в localStorage при каждом изменении
store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart));
});
