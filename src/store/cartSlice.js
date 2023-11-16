import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [

    ],
    toggle: true
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.total += newItem.price;
            } else {
                state.items.push({ id: newItem.id, title: newItem.title, quantity: 1, total: newItem.price, price: newItem.price });
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
    
            if (existingItem.quantity > 1 ) {
                existingItem.quantity--;
                existingItem.total -= existingItem.price;
            } else {
                state.items = state.items.filter(item => item.id !== id);
            }
        },
        toggle: (state) => {
            state.toggle = !state.toggle;
        }
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
