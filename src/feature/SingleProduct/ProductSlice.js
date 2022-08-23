import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const PRODUCT_URL ='https://fakestoreapi.com/products/1';

let initialState = {
    productInfo:{},
    status:'idle',
    error:null
}

export const fetchProduct = createAsyncThunk('productInfo/fetchProduct',async () =>{
    const response = await axios.get(PRODUCT_URL);
    return response.data
})


const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
    },
    extraReducers(builder){
        builder.addCase(fetchProduct.pending,(state,action)=>{
            state.status = 'loading'
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.status = 'success'
            // state.productInfo= action.payload
            for(let info in action.payload){
                state.productInfo[info] = action.payload[info]
            }
            // console.log(action.payload);
            // state.productInfo = action.payload;
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })

    }
})

export const getProduct = (state) => state.product.productInfo;
export const getProductStatus = (state) => state.product.status;
export const getProductError = (state) => state.product.error;

export default productSlice.reducer
