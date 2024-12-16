import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        data: [],        
    },
    reducers:{
        addToCart:(state,action)=>{
            console.log(action.payload);
            if(state.data.find((item) => item.id === action.payload.id)){
                state.data.find((item) => item.id === action.payload.id).quantity += 1;
                message.warning("Item already in cart");
                return;
            }
            
            state.data.push(action.payload);
        },
        removeFromCart:(state,action)=>{
            state.data = state.data.filter((item) => item.id !== action.payload);
        },  
        descrementQnty:(state,action)=>{
            console.log(action.payload);
            for (let i = 0; i < state.data.length; i++) {
                if (state.data[i].id === action.payload && state.data[i].quantity > 1) {
                    state.data[i].quantity -= 1;
                    break;
                }
                else{
                    message.warning("Quantity cannot be less than 1");
                    break;
                }
            }
        },
        incrementQnty:(state,action)=>{
            console.log(action.payload);
            for (let i = 0; i < state.data.length; i++) {
                if (state.data[i].id === action.payload) {
                    state.data[i].quantity += 1;
                    break;
                }
            }
        }
    }
})

export const {addToCart,removeFromCart,descrementQnty,incrementQnty} = cartSlice.actions
export default cartSlice.reducer