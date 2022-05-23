import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    },
    reducers: {
        addProductToCart: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("cart",JSON.stringify(state.items));
        },
        deleteProductFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            localStorage.setItem("cart",JSON.stringify(state.items));
        },
    },
});

export const {addProductToCart, deleteProductFromCart} = cartSlice.actions;
export default cartSlice.reducer;