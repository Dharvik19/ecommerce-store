import React,{useContext} from "react";
import classes from './CartItem.module.css'
import CartItem from "./CartItem";
import Modall from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  const cartItems = (<ul className={classes['cart-items']}>{cartcntx.items.map((itm) =>(<CartItem key={itm.id}  title={itm.title} price={itm.price} amount={itm.amount} />))}</ul>);
  return (
    <Modall>
      <div className={classes['cart-items']}>
        <span style={{fontSize:"2.4rem"}} className=" d-flex justify-content-center">Cart</span>
        <div className="d-flex justify-content-center">
            <div style={{fontSize:"1.8rem"}} className="col d-flex justify-content-left ">Item</div>
            <div style={{fontSize:"1.8rem"}} className="col d-flex justify-content-center">Price</div>
            <div style={{fontSize:"1.8rem"}} className="col d-flex justify-content-center">Quantity</div>
        </div>
      </div>
      
      {cartItems}
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
