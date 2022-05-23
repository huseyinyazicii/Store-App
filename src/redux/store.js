import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import productsSlice from "./products/productsSlice";
import favoriteSlice from './favorite/favoriteSlice';

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        favorite: favoriteSlice,
    },
});