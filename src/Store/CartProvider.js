import React,{useReducer} from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
    items:[],
    totalAmount : 0
}

const cartReducer = (state,action)=>{
    if(action.type==="ADD"){
        const updateItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price;
        return{
            items:updateItems,
            totalAmount:updateTotalAmount
        }

    }else if(action.type === 'REMOVE'){
      const itemIndex = state.items.findIndex((itm) => itm.id === action.id);
      const itemToRemove = state.items[itemIndex]; 
      const updatedTotalAmount = state.totalAmount - itemToRemove.price;
      const updatedItemsList = state.items.filter((itm) => itm.id !== action.id);
      return {
          items: updatedItemsList,
          totalAmount: updatedTotalAmount
      }
    }
    return defaultCartState;
}
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHamdler = (item) => {
    dispatchCartAction({type:"ADD", item:item})
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id})
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHamdler,
    removeItem: removeItemFromCartHandler,
  };
  return( 
  <CartContext.Provider  value={cartContext}>
    {props.children};
    </CartContext.Provider>)
    ;
};
export default CartProvider;
