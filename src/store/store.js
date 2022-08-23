import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feature/Counter/CounterSlice';
import imageReducer from "../feature/image/imageSlice";
import productReducer from '../feature/SingleProduct/ProductSlice';

export const store = configureStore({
    reducer:{
        cart:counterReducer,
        product:productReducer,
        image:imageReducer
    }
})