import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) || [
    { id: 1, name: "Велосипед", price: 1000, count: 1 },
    { id: 2, name: "Самокат", price: 700, count: 1 },
    { id: 3, name: "Ролики", price: 1300, count: 2 },
    { id: 4, name: "Сноуборд", price: 19000, count: 4 }
];


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increaseCount(state, action) {
            const item = state.find(i => i.id === action.payload);
            if (item && item.count < 25) item.count++;
        },
        decreaseCount(state, action) {
            const index = state.findIndex(i => i.id === action.payload);
            if (index !== -1) {
                const item = state[index];
                if (item.count > 1) {
                    item.count--;
                } else {
                    // Возвращаем новый массив без удаляемого товара
                    return state.filter(i => i.id !== action.payload);
                }
            }
        },
        deleteById(state, action) {
            return state.filter(i => i.id !== action.payload);
        },
        addNewItem(state, action) {
            const { name, price, count } = action.payload;
            state.push({
                id: Date.now(),
                name,
                price,
                count
            });
        }
    }
});

export const { increaseCount, decreaseCount, deleteById, addNewItem } = cartSlice.actions;
export default cartSlice.reducer;
