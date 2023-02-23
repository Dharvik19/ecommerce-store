import React from "react";
import { Button } from "react-bootstrap";
import classes from './CartItem.module.css';
const CartItem=(props)=>{
    return( 
        <li  className="cart-item m-2" >
          <div className="row">
            
          <h3 className="col">{props.title}</h3>
            <h4 className="col">Rs{props.price}</h4>
            <span>{props.amount}</span>
            <Button
              onClick={props.onClose}
              type="button"
              className=" btn btn-danger col-2 btn m-3"
            >
              remove
            </Button>
          </div>
        </li>
      )
}

export default CartItem;