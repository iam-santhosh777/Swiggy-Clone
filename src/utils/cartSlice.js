import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            // mutating the state array here
            state.items.push(action.payload);
        },
        removeFromCart: (state) => {
            state.items.pop();
        },
        clearItems: (state)=>{
            state.items.length = 0; // []
        }

    }
})

export const { addToCart, removeFromCart, clearItems} = cartSlice.actions;

export default cartSlice.reducer;