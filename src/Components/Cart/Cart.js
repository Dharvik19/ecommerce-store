import React,{useContext} from "react";
import classes from './CartItem.module.css'
import CartItem from "./CartItem";
import Modall from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  const hasItems = cartcntx.items.length > 0;
  const cartItemRemoveHandler = (id) =>{
    cartcntx.removeItem(id); 
  }
  const cartItems = (<ul className={classes['cart-items']}>{cartcntx.items.map((itm) =>(<CartItem key={itm.id}  title={itm.title} price={itm.price} amount={itm.totalAmount} onRemove={cartItemRemoveHandler.bind(null,itm.id)}/>))}</ul>);
  return (
    <Modall>
      <div className={classes['cart-items']}>
        <span style={{fontSize:"2.4rem"}} className=" d-flex justify-content-center">Cart</span>
        {!hasItems && <h2>Cart is Empty, please Add Something</h2>}
        {/* <div className="d-flex justify-content-center">
            <div style={{fontSize:"1.8rem"}} className="col d-flex justify-content-left ">Item</div>
            <div style={{fontSize:"1.8rem"}} className="col d-flex justify-content-center">Price</div>
            <div style={{fontSize:"1.8rem"}} className="col d-flex justify-content-center">Quantity</div>
        </div> */}
      </div>
      {cartItems}
      <div className="px-2 d-flex justify-content-center">
                <span className={classes.summary}>Total Amount: </span>
                <span className={classes.amount}>Rs. {cartcntx.totalAmount}</span>
            </div>
      <button
        onClick={props.onClose}  
        type="button"
        className=" btn btn-danger  btn m-3"
      >
        Close
      </button>
    </Modall>
  );
};

export default Cart;
