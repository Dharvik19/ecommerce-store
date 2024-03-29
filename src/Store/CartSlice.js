import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items:[],
        totalQuantity:0
    },
    reducers:{
        replaceCart:(state, action)=>{
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addToCart:(state, action)=>{
            const newItem = action.payload;
            const existingItem = state.items.find((item)=>item.id === newItem.id);
            state.totalQuantity++;

            if(!existingItem){
                state.items.unshift({
                    id: newItem.id,
                    price: newItem.price,
                    quantity:1,
                    totalPrice: newItem.price,
                    title: newItem.title,
                    image: newItem.image
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeFromCart:(state,action)=>{
            const id = action.payload;
            const existingItem = state.items.find((item)=>item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter((item)=>item.id!== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        removeTheProduct:(state,action)=>{
            const id = action.payload;
            state.totalQuantity--;
            const existingItem = state.items.find((item)=>item.id === id);
            state.items = state.items.filter((item)=>item.id!== id);
            
        }
    }
})
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;