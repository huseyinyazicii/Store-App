const { createSlice } = require("@reduxjs/toolkit");

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        items: localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")) : [],
    },
    reducers: {
        addProductToFavorite: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("favorite",JSON.stringify(state.items));
        },
        deleteProductFromFavorite: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            localStorage.setItem("favorite",JSON.stringify(state.items));
        },
    },
});

export const {addProductToFavorite, deleteProductFromFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;