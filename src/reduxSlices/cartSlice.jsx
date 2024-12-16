import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        data:1
    },
    reducers:{
        addToCart:(state)=>{
            state.data++;
        },
        removeFromCart:(state)=>{
            if(state.data>1)
            state.data--;
        }
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer