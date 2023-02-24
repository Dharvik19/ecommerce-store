import React from "react";
import { Button } from "react-bootstrap";
import classes from './CartItem.module.css';
const CartItem=(props)=>{
    return( 
        <li  className="cart-item m-2" >
          <div className="row">
            
          <h3 className="col">{props.title}</h3>
            <h4 className={classes.price}>Rs{props.price}</h4>
            <span>{props.amount}</span>
            
            <Button
              onClick={props.onRemove}
              type="button"
              className=" btn btn-danger col-2 btn-sm m-3"
            >
              X
            </Button>
          </div>
        </li>
      )
}

export default CartItem;