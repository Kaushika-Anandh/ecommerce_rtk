import {createSlice} from '@reduxjs/toolkit';
const initialState ={
    cartItems: [],
}
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state,action){
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem){
                existingItem.quantity += 1
            }
            else{
                state.cartItems.push({...action.payload, quantity: 1});
            }
        },
        removeItemfromCart(state,action){
            state.cartItems.filter(item => item.id !== action.payload.id);
        },
        clearCart(state){
            state.cartItems = [];
        },
        increaseItemQuantity(state,action){
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload.id);
            if (itemToIncrease){
                itemToIncrease.quantity += 1;
            }
        },
        decreaseItemQuantity(state,action){
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload.id);
            if (itemToDecrease && itemToDecrease > 1){
                itemToDecrease.quantity -= 1;
            }
        }
    }
});
export const{
    addItemToCart,
    removeItemfromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity
} = CartSlice.actions;
export default CartSlice.reducer;

