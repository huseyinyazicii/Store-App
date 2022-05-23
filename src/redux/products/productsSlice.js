import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsAsync = createAsyncThunk('products/getProductsAsync', async (category) => {
    let response;
    if(category === "")
        response = await axios(`${process.env.REACT_APP_BASE_URL}products`);
    else
        response = await axios(`${process.env.REACT_APP_BASE_URL}products/category/${category}`);
    return response.data;
});

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: "idle",
        error: "",
    },
    reducers:{

    },
    extraReducers: {
        [getProductsAsync.pending]: (state, action) => {
            state.status = "loading";
        },
        [getProductsAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "succeeded";
        },
        [getProductsAsync.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    }
});

export default productsSlice.reducer;